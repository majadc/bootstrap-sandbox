/**
 * bsBreakpointsMediaQueries
 * Function puts out the data about the current breakpoints used in Bootstrap
 * Function:
 *  - checks what is the current viewport width
 *  - name and short description
 *  - the Class infix
 *  - Scss mixin code to use
 *  - Css code
 */
let bsBreakpointsMediaQueries = {};
(function () {
  const breakpointsUp = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  };
  const breakpointsDown = {
    xs: 0,
    sm: 575.98,
    md: 767.98,
    lg: 991.98,
    xl: 1199.98,
    xxl: 1399.98,
  };
  /**
   *
   * @param {object} mediaQueriesElement HTML element object
   * @des function displays info for media-query: min-width
   */
  this.displayInfoMediaQueriesMinWidth = function (mediaQueriesOutput) {
    let viewportWidth = window.innerWidth;
    let viewportDimension = "";
    let codeSCSS = "";
    let codeCSS = "";
    let viewportDesc = "";
    let classInfix = "";

    if (viewportWidth < breakpointsUp.sm) {
      viewportDimension = "&lt;576px";
      viewportDesc = "X-Small devices (portrait phones, less than 576px)";
      codeSCSS =
        "No media query necessary for xs breakpoint as it's effectively @media (min-width: 0) { ... }";
      codeCSS =
        "No media query for `xs` since this is the default in Bootstrap";
    } else if (
      viewportWidth >= breakpointsUp.sm &&
      viewportWidth < breakpointsUp.md
    ) {
      viewportDimension = "&ge;576px";
      viewportDesc = "Small devices (landscape phones, 576px and up)";
      classInfix = "sm";
      codeSCSS = "@include media-breakpoint-up(sm) { ... }";
      codeCSS = "@media (min-width: 576px) { ... }";
    } else if (
      viewportWidth >= breakpointsUp.md &&
      viewportWidth < breakpointsUp.lg
    ) {
      viewportDimension = "&ge;768px";
      viewportDesc = "Medium devices (tablets, 768px and up)";
      classInfix = "md";
      codeSCSS = "@include media-breakpoint-up(md) { ... }";
      codeCSS = "@media (min-width: 768px) { ... }";
    } else if (
      viewportWidth >= breakpointsUp.lg &&
      viewportWidth < breakpointsUp.xl
    ) {
      viewportDimension = "&ge;992px";
      viewportDesc = "Large devices (desktops, 992px and up)";
      classInfix = "lg";
      codeSCSS = "@include media-breakpoint-up(lg) { ... }";
      codeCSS = "@media (min-width: 992px) { ... }";
    } else if (
      viewportWidth >= breakpointsUp.xl &&
      viewportWidth < breakpointsUp.xxl
    ) {
      viewportDimension = "&ge;1200px";
      viewportDesc = "X-Large devices (large desktops, 1200px and up)";
      classInfix = "xl";
      codeSCSS = "@include media-breakpoint-up(xl) { ... }";
      codeCSS = "@media (min-width: 1200px) { ... }";
    } else {
      viewportDimension = "&ge;1400px";
      viewportDesc = "XX-Large devices (larger desktops, 1400px and up)";
      classInfix = "xxl";
      codeSCSS = "@include media-breakpoint-up(xxl) { ... }";
      codeCSS = "@media (min-width: 1400px) { ... }";
    }

    mediaQueriesOutput.innerHTML = `width ${viewportDimension}<br/>${viewportDesc}<br/>class infix: ${classInfix}<br/>${codeSCSS}<br/>${codeCSS}`;
  };

  /**
   *
   * @param {object} mediaQueriesElement HTML element
   * @desc function displays info for media-query: max-width
   */
  this.listInfoMediaQueriesMaxWidth = function (mediaQueriesOutput) {
    let viewportWidth = window.innerWidth;
    let viewportDimension = "";
    let codeSCSS = "";
    let codeCSS = "";
    let viewportDesc = "";
    let classInfix = "";

    if (viewportWidth <= breakpointsDown.sm) {
      viewportDimension = "&le;575.98px";
      viewportDesc =
        "Applies to x-small devices (portrait phones, less than 576px)";
      classInfix = "<code>sm</code>";
      codeSCSS = "@include media-breakpoint-down(sm) { ... }";
      codeCSS = "@media (max-width: 575.98px) { ... }";
    } else if (
      viewportWidth > breakpointsDown.sm &&
      viewportWidth <= breakpointsDown.md
    ) {
      viewportDimension = "&le;767.98px";
      viewportDesc =
        "Applies to small devices (landscape phones, less than 768px)";
      classInfix = "<code>md</code>";
      codeSCSS = "@include media-breakpoint-down(md) { ... }";
      codeCSS = "@media (max-width: 767.98px) { ... }";
    } else if (
      viewportWidth > breakpointsDown.md &&
      viewportWidth <= breakpointsDown.lg
    ) {
      viewportDimension = "&le;992px";
      viewportDesc = "Applies to medium devices (tablets, less than 992px))";
      classInfix = "<code>lg</code>";
      codeSCSS = "@include media-breakpoint-down(lg) { ... }";
      codeCSS = "@media (max-width: 991.98px) { ... }";
    } else if (
      viewportWidth > breakpointsDown.lg &&
      viewportWidth <= breakpointsDown.xl
    ) {
      viewportDimension = "&le;1200px";
      viewportDesc = "Applies to large devices (desktops, less than 1200px)";
      classInfix = "<code>xl</code>";
      codeSCSS = "@include media-breakpoint-down(xl) { ... }";
      codeCSS = "@media (max-width: 1199.98px) { ... }";
    } else {
      viewportDimension = "&le;1400px";
      viewportDesc =
        "Applies to x-large devices (large desktops, less than 1400px)";
      classInfix = "<code>xxl</code>";
      codeSCSS = "@include media-breakpoint-down(xxl) { ... }";
      codeCSS = "@media (max-width: 1399.98px) { ... }";
    }

    mediaQueriesOutput.innerHTML = `width ${viewportDimension}<br/>${viewportDesc}<br/>class infix: ${classInfix}<br/>${codeSCSS}<br/>${codeCSS}`;
  };

  /**
   *
   * @param {string} mediaQueriesElement HTML element class
   * @desc function displays info for a single segment breakpoints
   */
  this.listInfoMediaQueriesSingleSegment = function (mediaQueriesOutput) {
    let viewportWidth = window.innerWidth;
    let viewportDimension = "";
    let codeSCSS = "";
    let codeCSS = "";
    let viewportDesc = "";
    let classInfix = "";

    if (viewportWidth < breakpointsUp.sm) {
      viewportDimension = "&le;575.98px";
      viewportDesc = "X-Small devices (portrait phones, less than 576px)";
      classInfix = "<code>xs</code>";
      codeSCSS = "@include media-breakpoint-only(xs) { ... }";
      codeCSS = "@media (max-width: 575.98px)";
    } else if (
      viewportWidth >= breakpointsUp.sm &&
      viewportWidth <= breakpointsDown.md
    ) {
      viewportDimension = "&ge;576px and &le;767.98";
      viewportDesc =
        "Small devices (landscape phones, from 576px and less than 768px)";
      classInfix = "<code>sm</code>";
      codeSCSS = "@include media-breakpoint-only(sm) { ... }";
      codeCSS = "@media (min-width: 576px) and (max-width: 767.98px) { ... }";
    } else if (
      viewportWidth >= breakpointsUp.md &&
      viewportWidth <= breakpointsDown.lg
    ) {
      viewportDimension = "&ge;768px and &le;991.98px";
      viewportDesc = "Medium devices (tablets, from 768px and less than 992px)";
      classInfix = "<code>md</code>";
      codeSCSS = "@include media-breakpoint-only(md) { ... }";
      codeCSS = "@media (min-width: 768px) and (max-width: 991.98px) { ... }";
    } else if (
      viewportWidth >= breakpointsUp.lg &&
      viewportWidth <= breakpointsDown.xl
    ) {
      viewportDimension = "&ge;992px and &le;1199.98px";
      viewportDesc =
        "Large devices (desktops, from 992px and less than 1200px)";
      classInfix = "<code>lg</code>";
      codeSCSS = "@include media-breakpoint-only(lg) { ... }";
      codeCSS = "@media (min-width: 992px) and (max-width: 1199.98px) { ... }";
    } else if (
      viewportWidth >= breakpointsUp.xl &&
      viewportWidth <= breakpointsDown.xxl
    ) {
      viewportDimension = "&ge;1200px and &le;1399.98px";
      viewportDesc =
        "X-Large devices (large desktops, 1200px and less than 1400px)";
      classInfix = "<code>xl</code>";
      codeSCSS = "@include media-breakpoint-only(xl) { ... }";
      codeCSS = "@media (min-width: 1200px) and (max-width: 1399.98px) { ... }";
    } else {
      viewportDimension = "&ge;1400px";
      viewportDesc = "XX-Large devices (larger desktops, 1400px and up)";
      classInfix = "<code>xxl</code>";
      codeSCSS = "@include media-breakpoint-only(xxl) { ... }";
      codeCSS = "@media (min-width: 1400px)";
    }

    mediaQueriesOutput.innerHTML = `width ${viewportDimension}<br/>class infix: ${classInfix}<br/>${viewportDesc}<br/>${codeSCSS}<br/>${codeCSS}`;
  };
}).apply(bsBreakpointsMediaQueries);
