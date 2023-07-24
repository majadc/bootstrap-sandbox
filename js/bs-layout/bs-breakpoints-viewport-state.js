/*
 * Three functions that display information for breakpoints based on min-width
 * bootstrap.
 * 1. Function displays state of the viewport:
 *  - current viewport width
 *  - name of the current breakpoint
 *  - class infix for the current breakpoint
 * 2. Function displays only current viewport width
 * 3. Function displays only name of the current breakpoint
 * 4. Function displays only Infix Class.
 */

let bsBreakpointsMediaQueriesViewportState = {};
(function () {
  const breakpoints = {
    xs: {
      size: 0,
      name: "extra small",
      infix: "xs",
    },
    sm: {
      size: 576,
      name: "small",
      infix: "sm",
    },
    md: {
      size: 768,
      name: "medium",
      infix: "md",
    },
    lg: {
      size: 992,
      name: "large",
      infix: "lg",
    },
    xl: {
      size: 1200,
      name: "extra large",
      infix: "xl",
    },
    xxl: {
      size: 1400,
      name: "extra extra large",
      infix: "xxl",
    },
  };

  /**
   * @param {string} viewportWidthElement HTML element's class
   * for displaying current viewport width
   */
  this.displayViewportWidth = function (viewportWidthElementClass) {
    let viewportWidthElements = document.getElementsByClassName(
      viewportWidthElementClass
    );
    let viewportWidth = window.innerWidth;
    if (viewportWidthElements.length > 0) {
      for (let i = 0; i < viewportWidthElements.length; i++) {
        viewportWidthElements[i].innerHTML = viewportWidth;
      }
    }
  };

  /**
   *
   * @param {string} viewportNameElement HTML element's class
   * for displaying breakpoint's name
   */
  this.displayBreakpointName = function (breakpointNameElementClass) {
    let viewportNameEle = document.getElementsByClassName(
      breakpointNameElementClass
    );
    for (let i = 0; i < viewportNameEle.length; i++) {
      viewportNameEle[i].innerHTML = getBreakpointName();
    }
  };

  /**
   * @param {string} viewportInfixClassElement HTML element's class
   * for displaying breakpoint's Infix Class
   */
  this.displayBreakpointClassInfix = function (
    breakpointInfixClassElementClass
  ) {
    let viewportInfixClassEle = document.getElementsByClassName(
      breakpointInfixClassElementClass
    );
    for (let i = 0; i < viewportInfixClassEle.length; i++) {
      viewportInfixClassEle[i].innerHTML = getBreakpointClassInfix();
    }
  };

  /**
   *
   * @param {object} breakpointStateElement HTML Element to display info
   */
  this.displayBreakpointState = function (breakpointStateElement) {
    breakpointStateElement.innerHTML = `Current viewport width: ${
      window.innerWidth
    }px;<br/>Breakpoint name: ${getBreakpointName()};<br/>Breakpoint Class Infix: ${getBreakpointClassInfix()};`;
  };

  /**
   * @return {string} viewport name based on current viewport width
   */
  function getBreakpointName() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < breakpoints.sm.size) {
      return breakpoints.xs.name;
    } else if (
      viewportWidth >= breakpoints.sm.size &&
      viewportWidth < breakpoints.md.size
    ) {
      return breakpoints.sm.name;
    } else if (
      viewportWidth >= breakpoints.md.size &&
      viewportWidth < breakpoints.lg.size
    ) {
      return breakpoints.md.name;
    } else if (
      viewportWidth >= breakpoints.lg.size &&
      viewportWidth < breakpoints.xl.size
    ) {
      return breakpoints.lg.name;
    } else if (
      viewportWidth >= breakpoints.xl.size &&
      viewportWidth < breakpoints.xxl.size
    ) {
      return breakpoints.xl.name;
    } else {
      return breakpoints.xxl.name;
    }
  } // getViewportName

  /**
   *
   * @returns {string} viewport Class Infix base on viewport current viewport width
   */
  function getBreakpointClassInfix() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < breakpoints.sm.size) {
      return breakpoints.xs.infix;
    } else if (
      viewportWidth >= breakpoints.sm.size &&
      viewportWidth < breakpoints.md.size
    ) {
      return breakpoints.sm.infix;
    } else if (
      viewportWidth >= breakpoints.md.size &&
      viewportWidth < breakpoints.lg.size
    ) {
      return breakpoints.md.infix;
    } else if (
      viewportWidth >= breakpoints.lg.size &&
      viewportWidth < breakpoints.xl.size
    ) {
      return breakpoints.lg.infix;
    } else if (
      viewportWidth >= breakpoints.xl.size &&
      viewportWidth < breakpoints.xxl.size
    ) {
      return breakpoints.xl.infix;
    } else {
      return breakpoints.xxl.infix;
    }
  } // getViewportInfixClass
}).apply(bsBreakpointsMediaQueriesViewportState);
