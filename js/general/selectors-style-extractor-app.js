/**
 * Namespace to manage and display CSS styles for selected selectors.
 * @namespace SelectorsStyleExtractorApp
 */
const SelectorsStyleExtractorApp = (() => {
  let sse_selectedSelectors = [];
  let sse_checkboxes = [];

  /**
   * Initializes the SelectorsStyleExtractorApp.
   *
   * @param {String} styleFileName - Name of the CSS file to extract styles from.
   * @param {HTMLElement} ssExtractor The Selectors Style Extractor component.
   */

  function init(ssExtractor, styleFileName) {
    const elements = initializeUIElements(ssExtractor);
    setupEventListeners(elements, styleFileName);
  } // init

  function initializeUIElements(ssExtractor) {
    const selectorList = ssExtractor.querySelector(".md-sse-selector-list");
    if (!selectorList) {
      console.error(
        "Selector list element not found. Required class: 'md-sse-selector-list'"
      );
      return;
    }

    const styleContainer = ssExtractor.querySelector(".md-sse-extracted-style");
    if (!styleContainer) {
      console.error(
        "Element to display style not found. Check your HTML structure. Required class: 'md-sse-extracted-style'"
      );
      return;
    }

    const waitSpinner = ssExtractor.querySelector(".md-sse-wait-spinner");
    if (!waitSpinner) {
      console.error(
        "Element to display pulsate spinner for ready style not found. Required class: 'md-sse-wait-spinner'"
      );
      return;
    }

    const showStyleBtn = ssExtractor.querySelector(".md-sse-show-style-btn");
    if (!showStyleBtn) {
      console.error(
        "Button 'Show style' not found. Required class: 'md-sse-show-style-btn'"
      );
      return;
    }

    const selectSelectorsBtn = ssExtractor.querySelector(
      ".md-sse-select-selectors-btn"
    );
    if (!selectSelectorsBtn) {
      console.error(
        "Button 'Select All' not found. Required class: 'md-sse-select-selectors-btn'"
      );
      return;
    }

    const resetSelectorsBtn = ssExtractor.querySelector(
      ".md-sse-selectors-btn-reset"
    );
    if (!resetSelectorsBtn) {
      console.error(
        "Button 'Clear selection' not found. Required class: 'md-sse-selectors-btn-reset'"
      );
      return;
    }

    const readySpinner = ssExtractor.querySelector(".md-sse-spinner-ready");
    if (!readySpinner) {
      console.error(
        "Element to display pulsate spinner for ready style not found. Required class: 'md-sse-spinner-ready'"
      );
      return;
    }

    const selectorsStateInfo = ssExtractor.querySelector(
      ".md-sse-selectors-state"
    );
    if (!selectorsStateInfo) {
      console.error(
        "Element to display selectors state not found. Required class: '.md-sse-selectors-state'"
      );
      return;
    }
    const styleTabBtn = ssExtractor.querySelector(".md-sse-style-tab-btn");
    if (!styleTabBtn) {
      console.error(
        "Button for tab 'Style' not found. Required class: 'md-sse-style-tab-btn'"
      );
      return;
    }

    const componentId = ssExtractor.id;

    sse_checkboxes = collectAllInputCheckboxes(selectorList);

    return {
      selectorList,
      styleContainer,
      waitSpinner,
      showStyleBtn,
      selectSelectorsBtn,
      resetSelectorsBtn,
      readySpinner,
      selectorsStateInfo,
      styleTabBtn,
      componentId,
    };
  }

  function setupEventListeners(elements, styleFileName) {
    const {
      selectorList,
      styleContainer,
      waitSpinner,
      showStyleBtn,
      selectSelectorsBtn,
      resetSelectorsBtn,
      readySpinner,
      selectorsStateInfo,
      styleTabBtn,
      componentId,
    } = elements;

    /***************************************************************************
     * Show Style Button
     */
    showStyleBtn.addEventListener("click", function () {
      styleReadyManager.turnOff(readySpinner);

      sse_selectedSelectors = getSelectedSelectorsList(selectorList);

      manageSelectorsStyleExtractor(
        styleContainer,
        waitSpinner,
        styleFileName,
        readySpinner,
        componentId,
        styleTabBtn
      );

      selectorsStateManager.selectedSelectorsId = collectSelectedSelectorsId();
      selectorsStateManager.displayCheckedSelectorsStateInfo(
        selectorList,
        selectorsStateInfo
      );
      selectorsStateManager.initOnShowStyle(selectorList);
    });

    /***************************************************************************
     * Select Selectors Button
     */
    selectSelectorsBtn.addEventListener("click", function () {
      selectorsStateManager.checkAllSelectors(
        showStyleBtn,
        resetSelectorsBtn,
        selectorList,
        selectorsStateInfo
      );
    });

    /***************************************************************************
     * Reset selectors Button
     */
    resetSelectorsBtn.addEventListener("click", function () {
      selectorsStateManager.resetSelectors(
        resetSelectorsBtn,
        selectorList,
        selectorsStateInfo,
        showStyleBtn
      );
    });

    /***************************************************************************
     * selectorList
     */
    selectorList.addEventListener("change", function () {
      selectorsStateManager.setStateResetSelectorsButton(resetSelectorsBtn);
      selectorsStateManager.setStateStyleButton(showStyleBtn);

      selectorsStateManager.displayCheckedSelectorsStateInfo(
        selectorList,
        selectorsStateInfo
      );
      selectorsStateManager.indicateCurrentlyCheckedSelectors(selectorList);
    });
  }

  /*****************************************************************************
   * STYLE READY MANAGER
   * Turn on and turns off ready spinner (showing next to 'Style' name on the tab).
   * Switch to style tab when results are ready.
   */
  const styleReadyManager = {
    turnOn: function (readySpinner) {
      readySpinner.classList.remove("d-none");
    },
    turnOff: function (readySpinner) {
      readySpinner.classList.add("d-none");
    },
    switchToStyleTab: function (styleTabBtn) {
      styleTabBtn.click();
    },
  }; // STYLE READY BUTTON

  /*****************************************************************************
   * SELECTORS STATE INFO MANAGER
   *
   * Inform about the manipulation of the selectors in "Selectors" Tab.
   * Add information if the list of selectors has changed,
   * e.g if a selector has been checked or unchecked.
   */
  const selectorsStateManager = {
    // An array to store the IDs of selected selectors
    selectedSelectorsId: [],

    /**
     * Disable 'Show style' button when no selectors are selected.
     *
     * @param {HTMLElement} showStyleBtn - HTML button element to trigger displaying styles.
     */
    setStateStyleButton: function (showStyleBtn) {
      let disableButton = true;

      for (let checkbox of sse_checkboxes) {
        if (checkbox.checked) {
          disableButton = false;
          break;
        } else {
          disableButton = true;
        }
      }
      if (disableButton) {
        showStyleBtn.setAttribute("disabled", "");
      } else {
        showStyleBtn.removeAttribute("disabled");
      }
    },

    /**
     * Checks all selectors within the given container.
     *
     * @param {HTMLElement} selectorList -The HTML element to display the list of selectors.
     */
    checkAllSelectors: function (
      showStyleBtn,
      resetSelectorsBtn,
      selectorList,
      selectorsStateInfo
    ) {
      for (let i = 0; i < sse_checkboxes.length; i++) {
        sse_checkboxes[i].checked = true;
      }
      showStyleBtn.removeAttribute("disabled");
      resetSelectorsBtn.removeAttribute("disabled");
      this.displayCheckedSelectorsStateInfo(selectorList, selectorsStateInfo);
    },

    /**
     * Resets all selected selectors within the given container.
     *
     * @param {HTMLElement} selectorList
     * HTML element to display the list of selectors.
     */
    resetSelectors: function (
      resetSelectorsBtn,
      selectorList,
      selectorsStateInfo,
      showStyleBtn
    ) {
      for (let i = 0; i < sse_checkboxes.length; i++) {
        sse_checkboxes[i].checked = false;
      }
      resetSelectorsBtn.setAttribute("disabled", "");
      this.setStateStyleButton(showStyleBtn);
      this.displayCheckedSelectorsStateInfo(selectorList, selectorsStateInfo);
    },

    /**
     * Disables the 'Clear Selection' button when no selectors are selected.
     *
     * @param {HTMLElement} resetSelectorsBtn - HTML button element to clear the extracted CSS style.
     */
    setStateResetSelectorsButton: function (resetSelectorsBtn) {
      let clearButton = false;

      for (let checkbox of sse_checkboxes) {
        if (checkbox.checked) {
          clearButton = true;
          break;
        } else {
          clearButton = false;
        }
      }
      if (clearButton) {
        resetSelectorsBtn.removeAttribute("disabled");
      } else {
        resetSelectorsBtn.setAttribute("disabled", "");
      }
    },

    /**
     * Initializes the state when showing style and clears previous selections.
     * @param {HTMLElement} selectorList - The container for selectors.
     */
    initOnShowStyle: function (selectorList) {
      this.clearCurrentCheckedSelectorClass(selectorList);
      this.clearSelectors();
      this.markSelectedSelectors();
    },

    /**
     * Displays information when user checks or unchecks the selectors.
     *
     * @param {HTMLElement} selectorList - The container with selectors.
     * @param {HTMLElement} selectorsStateInfo - The element to display information.
     */
    displayCheckedSelectorsStateInfo: function (
      selectorList,
      selectorsStateInfo
    ) {
      if (this.isSelectorListChanged(selectorList)) {
        selectorsStateInfo.classList.remove("invisible");
      } else {
        selectorsStateInfo.classList.add("invisible");
      }
    },

    /**
     * When user checks selector adds a class to it in order to differentiate this selector from earlier selected selectors.
     *
     * @param {HTMLElement} selectorList - The container with selectors.
     */
    indicateCurrentlyCheckedSelectors: function (selectorList) {
      const additionalSelectors =
        this.findCurrentlyCheckedSelectors(selectorList);
      for (let selector of additionalSelectors) {
        for (let i = 0; i < this.selectedSelectorsId.length; i++) {
          if (selector !== this.selectedSelectorsId) {
            let input = document.getElementById(selector);
            this.addClassToCurrentlyCheckedSelectors(input);
          }
        }
      }
    },

    /**
     * Find all currently checked selectors that are not in selected set of selectors
     * (Selected set of selectors is the one approved by pressing the 'Show style' button)
     *
     * @param {HTMLElement} selectorList - The container for selectors.
     * @returns {Array} Currently checked selectors
     */
    findCurrentlyCheckedSelectors: function (selectorList) {
      const allCheckedSelectors =
        this.getCurrentCheckedSelectorsId(selectorList);
      let difference = allCheckedSelectors.filter(
        (x) => !this.selectedSelectorsId.includes(x)
      );
      return difference;
    },

    /**
     * Checks if the selector list has changed.
     *
     * @param {HTMLElement} selectorList - The container for selectors.
     * @returns {boolean} - True if the list has changed, otherwise false.
     */
    isSelectorListChanged: function (selectorList) {
      const newCheckedSelectors =
        this.getCurrentCheckedSelectorsId(selectorList);
      return !this.isArrayEqual(this.selectedSelectorsId, newCheckedSelectors);
    },

    /**
     * Gets the IDs of currently checked selectors.
     *
     * @param {HTMLElement} selectorList - The container for selectors.
     * @returns {string[]} - An array of selector IDs.
     */
    getCurrentCheckedSelectorsId: function (selectorList) {
      const newCheckedSelectors =
        selectorList.querySelectorAll("input:checked");
      const newCheckedSelectorsId = [];
      for (let i = 0; i < newCheckedSelectors.length; i++) {
        newCheckedSelectorsId[i] = newCheckedSelectors[i].getAttribute("id");
      }
      return newCheckedSelectorsId;
    },

    /**
     * Checks if two arrays are equal.
     *
     * @param {any[]} arr1 - The first array.
     * @param {any[]} arr2 - The second array.
     * @returns {boolean} - True if the arrays are equal, otherwise false.
     */
    isArrayEqual: function (arr1, arr2) {
      return (
        arr1.length === arr2.length &&
        arr1.every((element, index) => element === arr2[index])
      );
    },

    /**
     * Marks the selected selectors with a specific class.
     */
    markSelectedSelectors: function () {
      for (let selector of this.selectedSelectorsId) {
        const input = document.getElementById(selector);
        input.nextSibling.classList.add("bg-primary-subtle");
      }
    },

    /**
     * Clears the selection of selectors.
     */
    clearSelectors: function () {
      const className = "bg-primary-subtle";
      const selectedLabels = document.getElementsByClassName(className);
      while (selectedLabels.length) {
        selectedLabels[0].classList.remove(className);
      }
    },

    /**
     * Adds a class to the currently checked selector.
     *
     * @param {HTMLInputElement} input - The input element.
     */
    addClassToCurrentlyCheckedSelectors: function (input) {
      input.classList.add("md-sse-form-check-input");
    },

    /**
     * Clears a class from the currently checked selectors.
     *
     */
    clearCurrentCheckedSelectorClass: function () {
      const className = "md-sse-form-check-input";
      const currentCheckedSelectors =
        document.getElementsByClassName(className);
      while (currentCheckedSelectors.length) {
        currentCheckedSelectors[0].classList.remove(className);
      }
    },
  }; // SELECTORS STATE INFO MANAGER

  /*****************************************************************************
   * SELECTORS STYLE EXTRACTOR MANAGEMENT
   *
   * Manages the style extraction process.
   *
   * @param {HTMLElement} styleContainer - HTML element to display styles for selectors.
   * @param {HTMLElement} spinner - HTML element to display spinner.
   * @param {String} styleFileName - Name of the CSS file to extract styles from.
   */
  function manageSelectorsStyleExtractor(
    styleContainer,
    waitSpinner,
    styleFileName,
    readySpinner,
    componentId,
    styleTabBtn
  ) {
    showSpinner(waitSpinner);

    // Delay the style extraction to show the spinner briefly.
    setTimeout(function () {
      displaySelectorAccordions(styleContainer, styleFileName, componentId);
      openFirstAccordionPanel(componentId);
      styleReadyManager.turnOn(readySpinner);
      hideSpinner(waitSpinner);
      styleReadyManager.switchToStyleTab(styleTabBtn);
    }, 100);
  } //manageSelectorsStyleExtractor

  /**
   * Displays the spinner element.
   *
   * @param {HTMLElement} waitSpinner HTML element to display spinner.
   */
  function showSpinner(waitSpinner) {
    waitSpinner.classList.remove("d-none");
  }

  /**
   * Hides the spinner element.
   *
   * @param {HTMLElement} waitSpinner HTML element to display waitSpinner.
   */
  function hideSpinner(waitSpinner) {
    waitSpinner.classList.add("d-none");
  }

  /*****************************************************************************
   * Build and display Bootstrap accordions for the selected selectors.
   *
   */

  /**
   * Opens the first panel of the accordion.
   *
   * @param {HTMLElement} styleContainer - HTML element to display styles for selectors.
   * @param {String} componentId - The id of the Selectors Style Extractor Component.
   */
  function openFirstAccordionPanel(componentId) {
    const firstExtractedStyleAccordion = document.getElementById(
      `${componentId}Selector0`
    );
    firstExtractedStyleAccordion
      .getElementsByClassName("accordion-button")[0]
      .classList.remove("collapsed");
    firstExtractedStyleAccordion
      .getElementsByClassName("accordion-collapse")[0]
      .classList.add("show");
  }

  function displaySelectorAccordions(
    styleContainer,
    styleFileName,
    componentId
  ) {
    let selectedSelectorNameList = collectSelectedSelectorNames();
    let accordions = collectSelectorAccordions(
      styleFileName,
      selectedSelectorNameList,
      componentId
    );
    accordions = accordions.join("");
    styleContainer.innerHTML = accordions;
  }

  /**
   * Collect all Accordions for every selected selector
   *
   * @param {String} styleFileName - The name of the CSS style file.
   * @param {string[]} selectorNameList - The array of the selected selector names
   * @param {String} componentId - The id of the Selectors Style Extractor Component.
   */
  function collectSelectorAccordions(
    styleFileName,
    selectorNameList,
    componentId
  ) {
    let accordions = [];
    for (let i = 0; i < selectorNameList.length; i++) {
      accordions.push(
        createAccordion(styleFileName, selectorNameList[i], componentId, i)
      );
    }
    return accordions;
  }

  /**
   *
   * @param {String} styleFileName - Name of the CSS file to extract styles from.
   * @param {String} selector - The name of the CSS selector.
   * @param {String} componentId - The id of the Selectors Style Extractor Component.
   * @param {Number} index - The number of the selected selector.
   * @returns
   */
  function createAccordion(styleFileName, selector, componentId, index) {
    const style = CSSStyleExtractor.init(styleFileName, selector);
    const highlightedStyle = highlightSelectors(style, selector);
    const accordionElement = `<div class="accordion " id="${componentId}Selector${index}">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#panel-${componentId}Selector${index}" aria-expanded="false" aria-controls="panel-${componentId}Selector${index}">${selector}</button>
    </h2>
    <div id="panel-${componentId}Selector${index}" class="accordion-collapse collapse" data-bs-parent="#${componentId}Selector${index}">
      <div class="accordion-body">
        <pre><code>${highlightedStyle}</code></pre>
      </div>
    </div>
  </div> 
</div>`;
    return accordionElement;
  }

  /**
   *
   * @param {String} style - The CSS style.
   * @param {String} selector - The CSS selector.
   * @returns {String} - The CSS style with highlighted selected selector.
   */
  function highlightSelectors(style, selector) {
    let selectorLength = selector.length;
    let newStyle = "";
    let selectorId = 0;
    while (style.length > 0) {
      let selectorIndex1 = style.indexOf(`${selector} `);
      let selectorIndex2 = style.indexOf(`${selector},`);
      if (selectorIndex1 === -1 && selectorIndex2 === -1) {
        newStyle = newStyle + style;
        break;
      } else {
        let selectorIndex;

        if (selectorIndex1 === -1) {
          selectorIndex = selectorIndex2;
        } else if (selectorIndex2 === -1) {
          selectorIndex = selectorIndex1;
        } else {
          selectorIndex = Math.min(selectorIndex1, selectorIndex2);
        }
        let tempStyle = style.slice(0, selectorIndex);
        let formattedSelector = `<span id="checkedSelector_${selectorId}" class="bg-danger-subtle p-1">${selector}</span>`;
        selectorId++;
        style = style.slice(selectorIndex + selectorLength);
        newStyle = newStyle + tempStyle + formattedSelector;
      }
    }
    return newStyle;
  }

  /**
   * Gets array of the selected HTML input elements.
   *
   * @param {HTMLElement} selectorList - The container with the selectors.
   * @returns {HTMLInputElement[]} - Array of the HTML input elements.
   */
  function getSelectedSelectorsList(selectorList) {
    let checkedCheckboxes = selectorList.querySelectorAll("input:checked");
    return [...checkedCheckboxes];
  }

  /**
   * Collect the names of the selected selectors
   *
   * @returns {string[]} The array of the names of the selected selectors.
   */
  function collectSelectedSelectorNames() {
    let selectorsList = new Array();
    for (let i = 0; i < sse_selectedSelectors.length; i++) {
      selectorsList[i] = sse_selectedSelectors[i].nextSibling.innerText;
    }
    return selectorsList;
  }

  /**
   * Collect the Ids of the selected selectors
   *
   * @returns {string[]} - The array of the id's of the selected selectors.
   */
  function collectSelectedSelectorsId() {
    let selectorsId = [];
    for (let selector of sse_selectedSelectors) {
      selectorsId.push(selector.getAttribute("id"));
    }
    return selectorsId;
  }

  /**
   *
   * @param {HTMLElement} selectorList The container with the selectors.
   */
  function collectAllInputCheckboxes(selectorList) {
    return selectorList.getElementsByTagName("input");
  }
  return {
    init: init,
  };
})();
