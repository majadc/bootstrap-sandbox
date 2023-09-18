/**
 * Load and display selectors from json file.
 */

function JsonSelectorLoader(jsonFilePath, selectorsContainer) {
  this.jsonFilePath = jsonFilePath;
  this.selectorsContainer = selectorsContainer;

  this.load = async function () {
    const selectors = await log.call(this);
    SelectorListBuilder.init(this.selectorsContainer, selectors);
  };

  // Private method
  /**
   * Fetches and returns an array of selectors from a JSON file.
   *
   * @returns {Promise<Array>} - Array of selectors from the JSON file.
   */
  async function log() {
    const response = await fetch(this.jsonFilePath);
    const data = await response.json();
    const jsonObjectName = Object.keys(data)[0];
    return data[jsonObjectName];
  }
}
