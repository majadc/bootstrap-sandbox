//let bsLayoutGridContainerInfo = {};
let CSSStyleRulesInformation = {};

/*
 * Two functions:
 * 1.Function:
 *   - displays style of the selector
 *   - form given CSS file
 *   - in the HTML element with given ID / Class / selector
 * 2. Function:
 *   - displays Computed Style (Live from the Browser) for given HTML element
 *   - for given CSS properties
 *   - in given HTML element
 */
(function () {
  /**
   *
   * @param {string} CSSStyleFileName CSS style file name
   * @param {string} selectorName id, class ... selector from the CSS style file
   * @param {string} elementJSOutputId HTML element ID / Class / selector
   * in which CSS styles are displayedStyle
   */
  this.displayElementStyleFromStylesheet = function (
    CSSStyleFileName,
    selectorName,
    elementJSOutput
  ) {
    if (elementJSOutput.startsWith("#")) {
      let jsOutputElement = document.getElementById(elementJSOutput.slice(1));
      jsOutputElement.innerHTML = CSSStyleExtractor.initialize(
        CSSStyleFileName,
        selectorName
      );
    } else if (elementJSOutput.startsWith(".")) {
      let jsOutputElement = document.getElementsByClassName(
        elementJSOutput.slice(1)
      );
      for (let i = 0; i < jsOutputElement.length; i++) {
        jsOutputElement[i].innerHTML = CSSStyleExtractor.initialize(
          CSSStyleFileName,
          selectorName
        );
      }
    } else {
      let jsOutputElement = document.getElementsByTagName(elementJSOutput);

      if (jsOutputElement.length > 0) {
        for (let i = 0; i < jsOutputElement.length; i++) {
          jsOutputElement[i].innerHTML = CSSStyleExtractor.initialize(
            CSSStyleFileName,
            selectorName
          );
        }
      } else {
        console.trace(jsOutputElement);
      }
    }
  }; // displayElementStyleFromStylesheet

  /**
   *
   * @param {object} elementHTML HTML element for which styles are displayed
   * @param {object} jsOutputElement HTML element in which CSS styles are displayed
   * @param  {...string} elementProperties CSS properties to display
   */
  this.displayElementComputedStyle = function (
    elementHTML,
    jsOutputElement,
    ...elementProperties
  ) {
    let elementStyle = window.getComputedStyle(elementHTML, null);
    let jsOutputEleContent = jsOutputElement.innerHTML;
    let declarations = getLiveStyle(elementStyle, elementProperties);

    if (
      typeof jsOutputEleContent === "undefined" ||
      jsOutputEleContent === null ||
      jsOutputEleContent === ""
    ) {
      jsOutputEleContent = "";
    } else {
      jsOutputEleContent = `${jsOutputEleContent}<br/>`;
    }
    jsOutputElement.innerHTML = `${jsOutputEleContent}${declarations}`;
  }; // displayElementComputedStyle

  /**
   *
   * @param {CSSStyleDeclaration object} elementStyle  CSSStyleDeclaration object
   * @param {string} properties CSSStyle properties
   * @returns {string} declarations
   */
  function getLiveStyle(elementStyle, properties) {
    let declarations = "";
    let propertyValue = "";
    for (let i = 0; i < properties.length; i++) {
      propertyValue = elementStyle.getPropertyValue(properties[i]);
      declarations = `${declarations}${properties[i]}: ${propertyValue};<br/>`;
    }
    return declarations;
  }
}).apply(CSSStyleRulesInformation);
