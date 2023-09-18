/**
 * Namespace for building and displaying a list of CSS selector checkboxes with associated labels.
 * @namespace SelectorListBuilder
 */
const SelectorListBuilder = {
  /**
   * Initializes the SelectorListBuilder.
   * @param {HTMLElement} selectorsContainer - The HTML element to display the list of selectors.
   * @param {string[]} selectorNames - The names of the selectors.
   */
  init: function (selectorsContainerElement, selectorNames) {
    const selectorNamesArray = selectorNames;
    const selectorsContainer = selectorsContainerElement;

    // Generate form controls and display selectors
    const formControlList = this.generateFormControls(selectorNamesArray);
    this.displaySelectors(selectorsContainer, formControlList);
  },

  /**
   * Displays a list of selector checkboxes within a specified container.
   * @param {HTMLElement[]} formControlList - An array of form control elements.
   */
  displaySelectors: function (selectorsContainer, formControlList) {
    for (let i = 0; i < formControlList.length; i++) {
      selectorsContainer.appendChild(formControlList[i]);
    }
  },

  /**
   * Generates an array of CSS selector checkboxes with associated labels.
   * @returns {HTMLElement[]} - An array of form control elements.
   */
  generateFormControls: function (selectorNamesArray) {
    let formControls = [];
    for (let i = 0; i < selectorNamesArray.length; i++) {
      const input = this.createCheckbox(`selector${i}`, `selector${i}`);
      const label = this.createLabel(`selector${i}`, selectorNamesArray[i]);
      const formControl = this.createFormControl(input, label);
      formControls[i] = formControl;
    }
    return formControls;
  },

  /**
   * Creates an input checkbox element.
   * @param {String} inputId - The id of the input element.
   * @param {String} inputValue - The value of the input "value" attribute.
   * @returns {HTMLElement} - An input element with the "form-check-input" class.
   */
  createCheckbox: function (inputId, inputValue) {
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("value", inputValue);
    input.setAttribute("id", inputId);
    input.setAttribute("class", "form-check-input");
    return input;
  },

  /**
   * Creates a label element associated with an input element.
   * @param {String} inputId - The value of the "for" attribute that associates the label with an input element.
   * @param {String} selectorName - The name or description of the selector displayed as the label text.
   * @returns {HTMLElement} - A label element with the "form-check-label" class, associated with an input element.
   */
  createLabel: function (inputId, selectorName) {
    const label = document.createElement("label");
    label.setAttribute("class", "form-check-label");
    label.setAttribute("for", inputId);
    label.innerText = selectorName;
    return label;
  },

  /**
   * Creates a form control element with an associated label.
   * @param {HTMLElement} input - The input element, such as a checkbox, to be included in the form control.
   * @param {HTMLElement} label - The label element associated with the input.
   * @returns {HTMLElement} - A div element with the "form-check" class containing the input and label.
   */
  createFormControl: function (input, label) {
    const formControl = document.createElement("div");
    formControl.setAttribute("class", "form-check");
    formControl.appendChild(input);
    formControl.appendChild(label, input);
    /**
     * <div class="form-check">
     * <input type="checkbox" value="selector2" id="selector2" class="form-check-input">
     * <label class="form-check-label" for="selector2">name of the selector</label>
     * </div>
     */
    return formControl;
  },
};
