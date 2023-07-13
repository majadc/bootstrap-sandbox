const bsBootstrapCssFile = "bootstrap.min.css";
/*
 * bs-breakpoints-viewport-state.js
 * display viewport state:
 *  - current viewport width in px
 *  - breakpoint name
 *  - breakpoint Class Infix
 *  Used in:
 *  - layout-breakpoints
 */
let bsBreakpointsViewportStateElement = document.getElementById(
  "bsBreakpointsViewportState"
);

if (
  typeof bsBreakpointsViewportStateElement !== "undefined" &&
  bsBreakpointsViewportStateElement !== null
) {
  bsBreakpointsMediaQueriesViewportState.displayBreakpointState(
    bsBreakpointsViewportStateElement
  );
  addEventListener("resize", function () {
    bsBreakpointsMediaQueriesViewportState.displayBreakpointState(
      bsBreakpointsViewportStateElement
    );
  });
}

/**
 * bs-breakpoints-list.js
 * check:
 *  - current viewport width in px
 *  - viewport name with Class Infix and viewport range
 *  Used:
 *   - layout-breakpoints
 */
let bsBreakpointsMediaQueryListElement = document.getElementById(
  "bsBreakpointsMediaQueryList"
);
if (
  typeof bsBreakpointsMediaQueryListElement !== "undefined" &&
  bsBreakpointsMediaQueryListElement !== null
) {
  bsBreakpointsMediaQueriesList.showCurrentViewport(
    bsBreakpointsMediaQueryListElement
  );
  addEventListener("resize", function () {
    bsBreakpointsMediaQueriesList.showCurrentViewport(
      bsBreakpointsMediaQueryListElement
    );
  });
}

/**
 * Breakpoints based on different sizes viewport:
 * min-width max-width, Single breakpoint
 */

let bsBreakpointsMQMinWidthElement = document.getElementById(
  "bsBreakpointsMediaQueryMinWidth"
);
if (
  typeof bsBreakpointsMQMinWidthElement !== "undefined" &&
  bsBreakpointsMQMinWidthElement &&
  bsBreakpointsMQMinWidthElement !== null
) {
  bsBreakpointsMediaQueries.displayInfoMediaQueriesMinWidth(
    bsBreakpointsMQMinWidthElement
  );
  window.addEventListener("resize", function () {
    bsBreakpointsMediaQueries.displayInfoMediaQueriesMinWidth(
      bsBreakpointsMQMinWidthElement
    );
  });
} // bsBreakpointsMQMinWidthElement

let bsBreakpointsMQMaxWidthElement = document.getElementById(
  "bsBreakpointsMediaQueryMaxWidth"
);

if (
  typeof bsBreakpointsMQMaxWidthElement !== "undefined" &&
  bsBreakpointsMQMaxWidthElement !== null
) {
  bsBreakpointsMediaQueries.listInfoMediaQueriesMaxWidth(
    bsBreakpointsMQMaxWidthElement
  );
  window.addEventListener("resize", function () {
    bsBreakpointsMediaQueries.listInfoMediaQueriesMaxWidth(
      bsBreakpointsMQMaxWidthElement
    );
  });
} // bsBreakpointsMQMaxWidthElement

let bsBreakpointsMQSingleSegmentElement = document.getElementById(
  "bsBreakpointsMediaQuerySingleSegment"
);
if (
  typeof bsBreakpointsMQSingleSegmentElement !== "undefined" &&
  bsBreakpointsMQSingleSegmentElement !== null
) {
  bsBreakpointsMediaQueries.listInfoMediaQueriesSingleSegment(
    bsBreakpointsMQSingleSegmentElement
  );
  window.addEventListener("resize", function () {
    bsBreakpointsMediaQueries.listInfoMediaQueriesSingleSegment(
      bsBreakpointsMQSingleSegmentElement
    );
  });
} // bsBreakpointsMQSingleSegmentElement

/*
 * Layout Containers
 */

//CONTAINER
let bsLayoutContainerContainerElement =
  document.getElementById("bsLayoutContainer");
let bsLayoutContainerJsOutputContainerElement = document.getElementById(
  "bsLayoutContainerComputedStyle"
);
if (
  typeof bsLayoutContainerContainerElement !== "undefined" &&
  bsLayoutContainerContainerElement !== null
) {
  CSSStyleRulesInformation.displayElementStyleFromStylesheet(
    bsBootstrapCssFile,
    ".container",
    "#bsLayoutContainerJsOutput"
  );
  CSSStyleRulesInformation.displayElementComputedStyle(
    bsLayoutContainerContainerElement,
    bsLayoutContainerJsOutputContainerElement,
    "padding-left",
    "padding-right"
  );
}

//container fluid
let bsLayoutContainerContainerFluidElement = document.getElementById(
  "bsLayoutContainerFluid"
);
let bsLayoutContainerJsOutputContainerFluidElement = document.getElementById(
  "bsLayoutContainerFluidComputedStyle"
);
if (
  typeof bsLayoutContainerContainerFluidElement !== "undefined" &&
  bsLayoutContainerContainerFluidElement !== null
) {
  CSSStyleRulesInformation.displayElementStyleFromStylesheet(
    bsBootstrapCssFile,
    ".container-fluid",
    "#bsLayoutContainerFluidJsOutput"
  );
  CSSStyleRulesInformation.displayElementComputedStyle(
    bsLayoutContainerContainerFluidElement,
    bsLayoutContainerJsOutputContainerFluidElement,
    "padding-left",
    "padding-right"
  );
}

//row
let bsLayoutContainerRowElement = document.getElementById("bsLayoutRow");
let bsLayoutContainerJsOutputRowElement = document.getElementById(
  "bsLayoutRowComputedStyle"
);
if (
  typeof bsLayoutContainerRowElement !== "undefined" &&
  bsLayoutContainerRowElement !== null
) {
  CSSStyleRulesInformation.displayElementStyleFromStylesheet(
    bsBootstrapCssFile,
    ".row",
    "#bsLayoutRowJsOutput"
  );
  CSSStyleRulesInformation.displayElementComputedStyle(
    bsLayoutContainerRowElement,
    bsLayoutContainerJsOutputRowElement,
    "padding-left",
    "padding-right",
    "margin-left",
    "margin-right"
  );
}

// columns
let bsLayoutContainerCellElement = document.getElementById("bsLayoutCell");
let bsLayoutContainerJsOutputCellElement = document.getElementById(
  "bsLayoutCellComputedStyle"
);
if (
  typeof bsLayoutContainerCellElement !== "undefined" &&
  bsLayoutContainerCellElement !== null
) {
  CSSStyleRulesInformation.displayElementStyleFromStylesheet(
    bsBootstrapCssFile,
    ".row > *",
    "#bsLayoutCellJsOutput"
  );
  CSSStyleRulesInformation.displayElementComputedStyle(
    bsLayoutContainerCellElement,
    bsLayoutContainerJsOutputCellElement,
    "padding-left",
    "padding-right"
  );
}
