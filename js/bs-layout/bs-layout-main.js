const bsBootstrapCssFile = "bootstrap-grid.css";

/*******************************************************************************
 *
 * layout-breakpoints page
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
} // if bsBreakpointsViewportStateElement

/*******************************************************************************
 *
 * layout-breakpoints page
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
} // if bsBreakpointsMediaQueryListElement

/*******************************************************************************
 *
 *  Breakpoints based on different sizes viewport:
 * min-width max-width, Single breakpoint
 * layout-breakpoints page
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
} // if bsBreakpointsMQMinWidthElement

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
} // if bsBreakpointsMQMaxWidthElement

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

/*******************************************************************************
 *
 * layout-containers page
 */

// CONTAINER
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
} // if bsLayoutContainerContainerElement

// CONTAINER FLUID
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
} // if bsLayoutContainerContainerFluidElement

// ROW
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
} // if bsLayoutContainerRowElement

// COL
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
} // if bsLayoutContainerCellElement

/**
 * Basic style for .col-*
 * layout-grid page
 */
let bsGridColumnCellElement = document.getElementById("bsGridColumnCell");
let bsGridGutterStyleCellOutput = document.getElementById(
  "bsGridGutterStyleCell"
);

if (bsGridColumnCellElement) {
  CSSStyleRulesInformation.displayElementStyleFromStylesheet(
    bsBootstrapCssFile,
    ".row > *",
    "#bsGridBaseStyleCell"
  );
  CSSStyleRulesInformation.displayElementComputedStyle(
    bsGridColumnCellElement,
    bsGridGutterStyleCellOutput,
    "padding-left",
    "padding-right"
  );
} // if bsGridColumnCellElement

/*******************************************************************************
 *
 * layout-grid page
 */
let bsMQClassesContainer = document.getElementById("bsGridMQClassesDisplay");
if (
  typeof bsMQClassesContainer !== "undefined" &&
  bsMQClassesContainer !== null
) {
  bsGridMediaQueryClasses.displayMediaQueryClassesInfo(
    bsBootstrapCssFile,
    bsMQClassesContainer,
    "bs-grid-mq-classes-output-js"
  );
  window.addEventListener("resize", function () {
    bsGridMediaQueryClasses.displayMediaQueryClassesInfo(
      bsBootstrapCssFile,
      bsMQClassesContainer,
      "bs-grid-mq-classes-output-js"
    );
  });
} // if bsMQClassesContainer

/**
 * layout-grid
 */

let bsGridEqualColumnsElement = document.getElementById("bsGridEqualColumns");
if (
  typeof bsGridEqualColumnsElement !== "undefined" &&
  bsGridEqualColumnsElement !== null
) {
  bsLayoutGridColStyle.displayColStyle(
    bsBootstrapCssFile,
    bsGridEqualColumnsElement,
    "bs-grid-columns"
  );
} // if bsGridEqualColumnsElement

let bsGridOneColumnWidthElement = document.getElementById(
  "bsGridOneColumnWidth"
);
if (
  typeof bsGridOneColumnWidthElement !== "undefined" &&
  bsGridOneColumnWidthElement !== null
) {
  bsLayoutGridColStyle.displayColStyle(
    bsBootstrapCssFile,
    bsGridOneColumnWidthElement,
    "bs-grid-columns"
  );
} // if bsGridOneColumnWidthElement

let bsGridAllBreakpointsElement = document.getElementById(
  "bsGridAllBreakpoints"
);
if (
  typeof bsGridAllBreakpointsElement !== "undefined" &&
  bsGridAllBreakpointsElement !== null
) {
  bsLayoutGridColStyle.displayColStyle(
    bsBootstrapCssFile,
    bsGridAllBreakpointsElement,
    "bs-grid-columns"
  );
}

let bsGridStackHorizontallyElement = document.getElementById(
  "bsGridStackHorizontally"
);
if (
  typeof bsGridStackHorizontallyElement !== "undefined" &&
  bsGridStackHorizontallyElement !== null
) {
  bsLayoutGridColStyle.displayColStyle(
    bsBootstrapCssFile,
    bsGridStackHorizontallyElement,
    "bs-grid-columns"
  );
} // if bsGridStackHorizontallyElement

let bsGridMixMatchElement = document.getElementById("bsGridMixMatch");
if (
  typeof bsGridMixMatchElement !== "undefined" &&
  bsGridMixMatchElement !== null
) {
  bsLayoutGridColStyle.displayColStyle(
    bsBootstrapCssFile,
    bsGridMixMatchElement,
    "bs-grid-columns"
  );
} // if bsGridMixMatchElement

let bsGridExample_1Element = document.getElementById("bsGridExample_1");
if (
  typeof bsGridExample_1Element !== "undefined" &&
  bsGridExample_1Element !== null
) {
  bsLayoutGridColStyle.displayColStyle(
    bsBootstrapCssFile,
    bsGridExample_1Element,
    "bs-grid-columns"
  );
}
