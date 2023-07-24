/*
 * The list of viewport breakpoints is build in HTML file
 * The function:
 *  - points the current viewport by adding arrow next to specific item of the list
 *     + adding `active` class to li item
 *     + removing `active` class from other li items
 *  - displays current viewport value
 *    and adds background color to it (corresponding to current viewport)
 *      + getting viewport value
 *      + displaying viewport value
 *
 */
let bsBreakpointsMediaQueriesList = {};
(function () {
  /**
   *
   * @param {object} bsBreakpointsListElement HTML element to display data
   */
  this.showCurrentViewport = function (bsBreakpointsListElement) {
    let viewportWidth = window.innerWidth;
    const breakpoints = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    };
    let viewportWidthElements = bsBreakpointsListElement.getElementsByClassName(
      "bs-breakpoints-media-query-viewport-list-width"
    );
    for (let i = 0; i < viewportWidthElements.length; i++) {
      viewportWidthElements[i].innerHTML = `${viewportWidth}px`;
    }

    if (viewportWidth < breakpoints.sm) {
      // sx - extra small
      removeActiveClass();
      document
        .getElementById("bsBreakpointActiveItemXS")
        .classList.add("active");
    } else if (
      viewportWidth >= breakpoints.sm &&
      viewportWidth < breakpoints.md
    ) {
      // sm - small
      removeActiveClass();
      document
        .getElementById("bsBreakpointActiveItemSM")
        .classList.add("active");
    } else if (
      viewportWidth >= breakpoints.md &&
      viewportWidth < breakpoints.lg
    ) {
      // md - medium
      removeActiveClass();
      document
        .getElementById("bsBreakpointActiveItemMD")
        .classList.add("active");
    } else if (
      viewportWidth >= breakpoints.lg &&
      viewportWidth < breakpoints.xl
    ) {
      // lg - large
      removeActiveClass();
      document
        .getElementById("bsBreakpointActiveItemLG")
        .classList.add("active");
    } else if (
      viewportWidth >= breakpoints.xl &&
      viewportWidth < breakpoints.xxl
    ) {
      // xl - extra large
      removeActiveClass();
      document
        .getElementById("bsBreakpointActiveItemXL")
        .classList.add("active");
    } else {
      // xxl - extra extra large
      removeActiveClass();
      document
        .getElementById("bsBreakpointActiveItemXXL")
        .classList.add("active");
    }

    function removeActiveClass() {
      let breakpointsListItems =
        bsBreakpointsListElement.getElementsByTagName("li");
      for (let i = 0; i < breakpointsListItems.length; i++) {
        breakpointsListItems[i].classList.remove("active");
      }
    }
  }; // showCurrentViewport
}).apply(bsBreakpointsMediaQueriesList);
