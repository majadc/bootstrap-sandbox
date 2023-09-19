const CSSStyleExtractor = (() => {
  
  // The CSS file name provided by user.
  let cse_selectorName = "";

  // The CSS selector provided by the user to target specific CSS style rules.
  let cse_styleSheetName = "";

  // An array of keyframes names that aren't used within specific CSS style rules.
  let cse_keyframesNamesToRemove = [];

  /**
   *
   * @param {String} styleSheetName The name of the stylesheet.
   * @param {String} selectorName The name of the searched selector.
   * @returns {String | null} A formatted CSS rulesets for the specified selector,
   *                   or empty string if there are no CSSStyleRules for the selector
   *                   or null if there is no the CSS style sheet
   */
  function init (styleSheetName, selectorName) {
    cse_selectorName = sanitizeSelectorName(selectorName);
    cse_styleSheetName = styleSheetName;
    let CSSStyleRules = getCSSStyleRules(styleSheetName);
    if (CSSStyleRules === null) {
      return null;
    }
    removeCSSStyleRule(CSSStyleRules);
    cse_keyframesNamesToRemove = getKeyframesNamesToRemove(CSSStyleRules);
    if (cse_keyframesNamesToRemove.length > 0) {
      removeKeyframes(CSSStyleRules);
    }
    removeEmptyMedia(CSSStyleRules);
    const formattedRules = formatRules(CSSStyleRules);
    return formattedRules;
  };

  
  /****************************************************************************
   * FORMATTING the CSS style rulesets
   */

  /**
   * Iterates through all CSSStyleRules and CSSMediaRules selected
   * for a specified selector and formats CSS rulesets.
   * @returns {String} Formatted CSS rulests for all selected CSSRules.
   */
  function formatRules(CSSStyleRules) {
    let formattedRules = "";
    for (let rule of CSSStyleRules) {
      let fR = formatRule(rule.cssText);
      formattedRules = `${formattedRules}${fR}`;
    }
    return formattedRules;
  }

  /**
   * Formats cssText from one CSSRule.
   * Function adds `\n` end of line and spaces.
   * @param {String} cssText Text of a CSSStyleSheet style-rule.
   * @returns {String} Formatted CSS ruleset
   */
  function formatRule(cssText) {
    let formattedRule = "";
    /**
     * `charsPositions: Object with three properties:
     *  - `posOpenCurlyBracket`: Position of opening curly bracket;
     *  - `posSemicolon`: Position of semicolon;
     *  - `posCloseCurlyBracket`: Position of closing curly bracket;
     */
    let charsPositions = getCharPositions(cssText);

    /**
     * `positionToStartFormat` represents the starting point for parsing a CSS ruleset.
     * It is the smallest value among the position properties in the `charsPositions` object.
     */
    let positionToStartFormat = getPositionToStartFormat(charsPositions);
    let tabLevel = 0;
    let spaces = "";

    while (
      charsPositions.posOpenCurlyBracket !== -1 ||
      charsPositions.posSemicolon !== -1 ||
      charsPositions.posCloseCurlyBracket !== -1
    ) {
      if (charsPositions.posOpenCurlyBracket === positionToStartFormat) {
        let selector = cssText
          .slice(0, charsPositions.posOpenCurlyBracket + 1)
          .trim();
        cssText = cssText.slice(charsPositions.posOpenCurlyBracket + 1);
        charsPositions = getCharPositions(cssText);
        positionToStartFormat = getPositionToStartFormat(charsPositions);
        tabLevel = tabLevel + 2;
        spaces = generateSpaces(tabLevel);
        formattedRule = `${formattedRule}\n${spaces}${selector}`;
      } else if (charsPositions.posSemicolon === positionToStartFormat) {
        let declaration = cssText
          .slice(0, charsPositions.posSemicolon + 1)
          .trim();
        cssText = cssText.slice(charsPositions.posSemicolon + 1);
        charsPositions = getCharPositions(cssText);
        positionToStartFormat = getPositionToStartFormat(charsPositions);
        spaces = generateSpaces(tabLevel + 2);
        formattedRule = `${formattedRule}\n${spaces}${declaration}`;
      } else if (
        charsPositions.posCloseCurlyBracket === positionToStartFormat
      ) {
        let closeCurlyBracket = cssText
          .slice(0, charsPositions.posCloseCurlyBracket + 1)
          .trim();
        cssText = cssText.slice(charsPositions.posCloseCurlyBracket + 1);
        charsPositions = getCharPositions(cssText);
        positionToStartFormat = getPositionToStartFormat(charsPositions);
        spaces = generateSpaces(tabLevel);
        tabLevel = tabLevel - 2;
        formattedRule = `${formattedRule}\n${spaces}${closeCurlyBracket}`;
      }
    }
    return formattedRule;
  }

  /**
   * @param {Number} tabLevel Number of spaces.
   * @returns {String} Spaces.
   */
  function generateSpaces(tabLevel) {
    let spaces = "";
    for (let i = 1; i <= tabLevel; i++) {
      spaces = `${spaces} `;
    }
    return spaces;
  }

  /**
   * @summary Calculates minimum value.
   * @param {Object} charsPositions An object containing positions information
   * of the three characters {;} in CSS ruleset.
   * @param {number} charsPositions.posOpenCurlyBracket - Position of opening curly bracket.
   * @param {number} charsPositions.posSemicolon - Position of semicolon.
   * @param {number} charsPositions.posCloseCurlyBracket - Position of closing curly bracket.
   * @returns {Number} Minimum value of the characters positions.
   */
  function getPositionToStartFormat(charsPositions) {
    let positions = [];
    for (const value of Object.values(charsPositions)) {
      if (value !== -1) {
        positions.push(value);
      }
    }
    return Math.min(...positions);
  }

  /**
   * @summary The function calculates the position of three characters within CSS ruleset:
   * { ; }
   * @param {String} cssText Text of a CSSStyleSheet style-rule.
   * @returns {Object} An object containing position information - Numbers
   *  - `posOpenCurlyBracket`: Position of opening curly bracket
   *  - `posSemicolon`: Position of semicolon
   *  - `posCloseCurlyBracket`: Position of closing curly bracket
   */
  function getCharPositions(cssText) {
    return {
      posOpenCurlyBracket: cssText.indexOf("{"),
      posSemicolon: cssText.indexOf(";"),
      posCloseCurlyBracket: cssText.indexOf("}"),
    };
  }

  /****************************************************************************
   * HANDLING empty `CSSMediaRules`
   */

  /**
   * Removes empty CSSMediaRule objects
   * @param {CSSRules} CSSStyleRules - The CSS rules object to search within.
   */
  function removeEmptyMedia(CSSStyleRules) {
    let emptyMedia = getEmptyMedia(CSSStyleRules);
    while (emptyMedia.index !== -1) {
      emptyMedia.parent.deleteRule(emptyMedia.index);
      emptyMedia = getEmptyMedia(CSSStyleRules);
    }
  }

  /**
   * @summary Recursive function searches for empty CSSMediaRule object.
   * @param {CSSRules} CSSStyleRules - The CSS rules object to search within.
   * @param {Boolean} sheetIsParent - `true` if style sheet is the parent of CSS rule
   * @returns {Object} emptyMedia:
   *  - emptyMedia.index: index of the object empty media or -1 if it is not empty
   *  - emptyMedia.parent: parent of the object empty media or null if object media is not empty
   */
  function getEmptyMedia(CSSStyleRules, sheetIsParent = true) {
    let emptyMedia = {
      index: -1,
      parent: null,
    };
    for (let [index, rule] of Object.entries(CSSStyleRules)) {
      if (rule.constructor.name === "CSSMediaRule") {
        if (rule.cssRules.length === 0) {
          emptyMedia.index = index;
          emptyMedia.media = rule;

          if (sheetIsParent) {
            emptyMedia.parent = rule.parentStyleSheet;
          } else {
            emptyMedia.parent = rule.parentRule;
          }
          return emptyMedia;
        }
        let currentEmptyMedia = getEmptyMedia(rule.cssRules, false);
        if (currentEmptyMedia.index !== -1) {
          return currentEmptyMedia;
        }
      }
    }
    return emptyMedia;
  }

  /****************************************************************************
   * HANDLING `CSSKeyframeRules`
   */

  /**
   * Removes CSSKeyframeRules objects
   * that are not included in `animation` property in selected `CSSStyleRules`
   * @param {CSSRules} CSSStyleRules - The CSS rules object to search within.
   */
  function removeKeyframes(CSSStyleRules) {
    let keyframe = findKeyframeToRemove(CSSStyleRules);
    while (keyframe.index !== -1) {
      keyframe.parent.deleteRule(keyframe.index);
      keyframe = findKeyframeToRemove(CSSStyleRules);
    }
  }

  /**
   * Searches a `CSSKeyframeRule` object
   * that is not used in `animation` CSS property in selected `CSSStyleRules`.
   * The names of keyframes that are not used in `animations` property for selected `CSSStyleRules`
   * are stored in `cse_keyframesNamesToRemove` variable.
   * @param {CSSRules} CSSStyleRules - The CSS rules object to search within.
   * @param {Boolean} sheetIsParent - `true` if the style sheet is a parent of `KeyframeRule`.
   * @returns {Object}  keyframe
   * - keyframe.index - index of keyframe rule to remove
   * - keyframe.parent - parent of keyframe rule to remove
   */
  function findKeyframeToRemove(CSSStyleRules, sheetIsParent = true) {
    let keyframe = {
      index: -1,
      parent: {},
    };
    for (const [index, rule] of Object.entries(CSSStyleRules)) {
      if (rule.constructor.name === "CSSKeyframesRule") {
        if (cse_keyframesNamesToRemove.includes(rule.name)) {
          keyframe.index = index;
          if (sheetIsParent) {
            keyframe.parent = rule.parentStyleSheet;
          } else {
            keyframe.parent = rule.parentRule;
          }
          return keyframe;
        }
      } else if (rule.constructor.name === "CSSMediaRule") {
        let currentKeyframe = findKeyframeToRemove(rule.cssRules, false);
        if (currentKeyframe.index !== -1) {
          return currentKeyframe;
        }
      }
    }
    return keyframe;
  }

  /**
   * Returns an array of keyframe names that are not used in the `animation` CSS property.
   * The returned array is assigned to a private variable `cse_keyframesNamesToRemove`.
   *@param {CSSRules} CSSStyleRules - The CSS rules object to search within.
   * @returns {Array<String>} An array of the keyframe names to be removed.
   */
  function getKeyframesNamesToRemove(CSSStyleRules) {
    const keyframesInRules = getNamesOfKeyframesInRules(CSSStyleRules);
    const keyframesNames = getNamesOfKeyframes(CSSStyleRules);
    let keyframesToRemove = keyframesNames.filter(
      (x) => !keyframesInRules.includes(x)
    );
    return keyframesToRemove;
  }

  /**
   * Recursively searches for the names of the keyframes
   * that are used in animations property in all selected `CSSStyleRules`
   * @param {CSSRules} CSSStyleRules - The CSS rules object to search within.
   * @returns {Set<String>} Set of the names of the keyframes found in the CSSStyleRules
   */
  function getNamesOfKeyframesInRules(CSSStyleRules) {
    const keyframesNames = getNamesOfKeyframes(CSSStyleRules);
    let keyframesInRules = new Set();
    for (const rule of CSSStyleRules) {
      if (rule.constructor.name === "CSSStyleRule") {
        let kF = getNamesOfKeyframesInRule(rule, keyframesNames);
        keyframesInRules = [...keyframesInRules, ...kF];
      } else if (rule.constructor.name === "CSSMediaRule") {
        let kF = getNamesOfKeyframesInRules(rule.cssRules);
        keyframesInRules = [...keyframesInRules, ...kF];
      }
    }
    return keyframesInRules;
  }

  /**
   *  Retrieves the names of keyframes that are referenced in the `animation` properties
   * of the provided `CSSStyleRule`.
   *
   * This function examines the `animation-name` property of the CSS rule. If a keyframe name
   * is specified, it is added to the resulting set of keyframes. If no name is specified,
   * the function analyzes the rule's CSS properties to identify keyframe references.
   * @param {CSSRule} rule The CSS rule object to search within.
   * @param {string[]} keyframesNames An array of keyframe names.
   * @returns {Set<String>} Set of the keyframe names found in `CSSStyleRule`.
   */
  function getNamesOfKeyframesInRule(rule, keyframesNames) {
    let name = rule.style.getPropertyValue("animation-name");
    let keyframesNamesInRule = new Set();
    for (let keyframe of keyframesNames) {
      let isKeyframeInRule = false;
      if (name !== "") {
        if (keyframe === name) {
          isKeyframeInRule = true;
        }
      } else {
        let text = rule.cssText;
        let cssProperties = text.slice(
          text.indexOf("{") + 1,
          text.indexOf("}")
        );
        let regExpKeyframe = new RegExp(keyframe, "g");
        if (cssProperties.match(regExpKeyframe)) {
          isKeyframeInRule = true;
        }
      }
      if (isKeyframeInRule) {
        keyframesNamesInRule.add(keyframe);
      }
    }
    return keyframesNamesInRule;
  }

  /**
   * Recursively searches the names of all keyframes.
   * @param {CSSRules} CSSStyleRules - The CSS rules object to search within.
   * @returns {string[]>} - The names of keyframes.
   */
  function getNamesOfKeyframes(CSSStyleRules) {
    let keyframesNames = [];
    for (const rule of CSSStyleRules) {
      if (rule.constructor.name === "CSSKeyframesRule") {
        keyframesNames.push(rule.name);
      } else if (rule.constructor.name === "CSSMediaRule") {
        keyframesNames = keyframesNames.concat(
          getNamesOfKeyframes(rule.cssRules)
        );
      }
    }
    return keyframesNames;
  }

  /****************************************************************************
   * HANDLING `CSSStyleRules`
   */

  /**
   * Removes CSS rules that lack the specified selector.
   * @param {CSSRules} CSSStyleRules - The CSS rules object to search within.
   */
  function removeCSSStyleRule(CSSStyleRules) {
    let cssStyleRule = findCSSStyleRuleToRemove(CSSStyleRules);
    while (cssStyleRule.index !== -1) {
      cssStyleRule.parent.deleteRule(cssStyleRule.index);
      cssStyleRule = findCSSStyleRuleToRemove(CSSStyleRules);
    }
  }

  /**
   * Recursively searches for a CSS rule that lacks the specified selector.
   * @param {CSSRules} CSSStyleRules - The CSS rules object to search within.
   * @param {Boolean} sheetIsParent - `true` if the style sheet is the parent of CSS rule
   * @returns {Object} - `cssStyleRule` object:
   * - cssStyleRule.index: Index of the object to be removed.
   * - cssStyleRule.parent: Parent ot the object to be removed.
   */
  function findCSSStyleRuleToRemove(CSSStyleRules, sheetIsParent = true) {
    let cssStyleRule = {
      index: -1,
      parent: null,
    };
    for (let [index, rule] of Object.entries(CSSStyleRules)) {
      if (rule.constructor.name === "CSSMediaRule") {
        let currentCssStyleRule = findCSSStyleRuleToRemove(
          rule.cssRules,
          false
        );
        if (currentCssStyleRule.index !== -1) {
          return currentCssStyleRule;
        }
      } else if (rule.constructor.name === "CSSStyleRule") {
        if (!isSelectorIncluded(rule)) {
          cssStyleRule.index = index;
          if (sheetIsParent) {
            cssStyleRule.parent = rule.parentStyleSheet;
          } else {
            cssStyleRule.parent = rule.parentRule;
          }
          return cssStyleRule;
        }
      }
    }
    return cssStyleRule;
  }

  /**
   * Checks whether the provided selector exists within the given CSS rule.
   * @param {CSSStyleRule} rule the CSSStyleRule object to examine.
   * @returns {Boolean} - `true` if the provided selector is present in the CSS rule.
   */
  function isSelectorIncluded(rule) {
    let selectorsInRule = rule.selectorText.split(",");
    selectorsInRule = selectorsInRule.map((element) => {
      return element.trim();
    });
    return selectorsInRule.includes(cse_selectorName);
  }

  /**
   * Searches for the [attribute="value"] syntax within the provided selector (`cse_selectorName`).
   * The function verifies whether the 'value' within the syntax is enclosed in double quotes;
   * if it isn't, the function adds quotes to it.
   * @param {String} selectorName The name of the provided selector (`cse_selectorName`)
   * @returns {String} The name of the provided selector (`cse_selectorName`) with double quotes: [attribute="value"]
   */
  function sanitizeSelectorName(selectorName) {
    let sanitizedSelectorName = "";
    while (selectorName.includes("=")) {
      let posEqual = selectorName.indexOf("=");
      let posClosingSquareBracket = getPosClosingSquareBracket(
        posEqual,
        selectorName
      );
      if (selectorName.charAt(posEqual + 1) === '"') {
        let sanitizedChunk = selectorName.slice(0, posClosingSquareBracket);
        sanitizedSelectorName = `${sanitizedSelectorName}${sanitizedChunk}`;
      } else {
        let stringToEqual = selectorName.slice(0, posEqual);
        let value = selectorName.slice(
          posEqual + 1,
          posClosingSquareBracket - 1
        );
        let sanitizedChunk = `${stringToEqual}="${value}"]`;
        sanitizedSelectorName = `${sanitizedSelectorName}${sanitizedChunk}`;
      }
      selectorName = selectorName.slice(posClosingSquareBracket);
    }
    sanitizedSelectorName = `${sanitizedSelectorName}${selectorName}`;
    return sanitizedSelectorName;
  }

  /**
   *
   * @param {Number} posEqual The position of the first equal sign in provided selector (`cse_selectorName'`)
   * @param {String} selectorName The name of the provided selector (cse_selectorName)
   * @returns {Number} The position of the closing bracket in '[attribute="value"]' syntax
   */
  function getPosClosingSquareBracket(posEqual, selectorName) {
    let stringToEqual = selectorName.slice(0, posEqual);
    let stringFromEqual = selectorName.slice(posEqual);
    let numberOfCharInStringToEqual = stringToEqual.length;
    let posClosingBracketInStringFromEqual = stringFromEqual.indexOf("]");
    return numberOfCharInStringToEqual + posClosingBracketInStringFromEqual + 1;
  }

  /****************************************************************************
   * LOADING `CSSRules`
   */

  /**
   * Retrieves a `CSSRuleList` object containing all CSS style rules
   * and copy them to a new CSSStyleSheet object.
   * @returns {CSSRuleList | null} - `CSSRuleList` object containing all CSS style rules: `CSSStyleRules` or null
   */
  function getCSSStyleRules() {
    // Load CSSStyleSheet object from the document.
    let sheet = loadStyleSheet();
    if (sheet === null) {
      return null;
    }
    // Create a new CSSStyleSheet object.
    let cssStyleSheetCopy = new CSSStyleSheet();

    // Make a copy of CSS rules to a new CSSStyleSheet object.
    for (let [index, rule] of Object.entries(sheet.cssRules)) {
      cssStyleSheetCopy.insertRule(rule.cssText, index);
    }
    return cssStyleSheetCopy.cssRules;
  }
  /**
   * Locates and loads a specific the CSS style sheet object `CSSStyleSheet` by name.
   * The CSS file should be included in the <head> section of the HTML.
   * @param {String} cse_styleSheetName The name of the chosen CSS file.
   * @returns {CSSStyleSheet | null} The CSS style sheet object containing the collection of CSSRule objects
   * or null.
   */
  function loadStyleSheet() {
    // Obtain a list of CSSStyleSheet objects for document
    const styleSheets = document.styleSheets;

    for (const sheet of styleSheets) {
      let hrefSheet = sheet.href;
      hrefSheet = hrefSheet.substring(hrefSheet.lastIndexOf("/") + 1);
      if (hrefSheet.indexOf("?") !== -1) {
        hrefSheet = hrefSheet.substring(0, hrefSheet.indexOf("?"));
      }

      // Grab CSSStyleSheet object with provided file name.
      if (hrefSheet === cse_styleSheetName) {
        return sheet;
      }
    }
    return null;
  }
  
  return {
    init: init,
  };
})();
