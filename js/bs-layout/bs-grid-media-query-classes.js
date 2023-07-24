/**
 * is used in:
 *  - grid-media-query-classes.html
 * Function:
 *  - display actual working @media-query classes depended on actual breakpoint
 *  - if there is no @media-query actual working class display info
 *    "base style".
 */

let bsGridMediaQueryClasses = {};
(function () {
  const breakpointsUp = [
    { viewport: 576, class: "col" },
    { viewport: 768, class: "col-sm" },
    { viewport: 992, class: "col-md" },
    { viewport: 1200, class: "col-lg" },
    { viewport: 1400, class: "col-xl" },
    { viewport: Infinity, class: "col-xxl" },
  ];

  /**
   *
   * @param {string} CSSStyleFileName CSS Style file name
   * @param {object} elementContainerId HTML .container
   * @param {string} elementOutputJSClass HTML element class - output JS
   */
  this.displayMediaQueryClassesInfo = function (
    CSSStyleFileName,
    container,
    elementOutputJSClass
  ) {
    //let container = document.getElementById(elementContainerId);
    let cells = container.getElementsByClassName("row")[0].children;

    for (let i = 0; i <= isBreakpointIndex(); i++) {
      let info = cssRulesMajadc.getCssStyleRules(
        CSSStyleFileName,
        `.${breakpointsUp[i].class}`
      );
      displayInfoInOutputElement(cells[i], info, elementOutputJSClass);
    }

    for (let i = isBreakpointIndex() + 1; i < cells.length; i++) {
      let info = "Basic style:<br/>.row > *";
      displayInfoInOutputElement(cells[i], info, elementOutputJSClass);
    }
  }; // displayMediaQueryClassesInfo

  /**
   *
   * @param {string} container HTML .container ID
   * @param {string} info Information displayed in elementOutputJS
   * @param {string} elementOutputJSClass HTML element class to display information
   */
  function displayInfoInOutputElement(container, info, elementOutputJSClass) {
    container.getElementsByClassName(elementOutputJSClass)[0].innerHTML = info;
  } // displayInfo

  function isBreakpointIndex() {
    let viewportWidth = window.innerWidth;
    for (const [index, bp] of breakpointsUp.entries()) {
      if (viewportWidth < bp.viewport) {
        return index;
      }
    }
  } // isBreakpointIndex
}).apply(bsGridMediaQueryClasses);
