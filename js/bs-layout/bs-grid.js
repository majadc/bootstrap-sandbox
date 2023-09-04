let bsLayoutGridColStyle = {};
(function () {
  /*
   * function displays style for all present `.col-*` elements classes
   * function adds additional CSS class to the `pre` element (for CSS style)
   *
   * Function:
   *  - takes id grid container;
   *  - looks for `.row` class within grid container
   *    and takes its children;
   *  - displays CSS style for `.col-*` classes in `col elements`;
   *  - sets classes `bs-bg-*` on `pre elements`
   *    `.bs-bg-*` classes take care of the background color depends of the breakpoint
   * (the container grid needs to have a class `.bs-layout-grid-container-column`)
   *
   * it is used in:
   *   - grid-12-template-columns.html
   */

  const breakpointsClasses = {
    xs: { bpClass: "col-xs", class: "bs-bg-xs" },
    sm: { bpClass: "col-sm", class: "bs-bg-sm" },
    md: { bpClass: "col-md", class: "bs-bg-md" },
    lg: { bpClass: "col-lg", class: "bs-bg-lg" },
    xl: { bpClass: "col-xl", class: "bs-bg-xl" },
    xxl: { bpClass: "col-xxl", class: "bs-bg-xxl" },
  };

  /**
   *
   * @param {string} fileCSSStyle CSS file name
   * @param {object} container HTML `.container` element
   * @param {string} elementContainerClass HTML '.container' class
   */
  this.displayColStyle = function (
    fileCSSStyle,
    container,
    elementContainerClass
  ) {
    //let container = document.getElementById(elementContainerId);
    let rows = container.getElementsByClassName("row");

    container.classList.add(elementContainerClass);

    for (let i = 0; i < rows.length; i++) {
      for (const child of rows[i].children) {
        let colContent = child.innerHTML;
        let colClassName = child.className;
        let colClassNamesArray = colClassName.split(" ");
        let resultColStyle = "";

        for (let i = 0; i < colClassNamesArray.length; i++) {
          let currentColStyle = CSSStyleExtractor.initialize(
            fileCSSStyle,
            `.${colClassNamesArray[i]}`
          );

          if (colClassNamesArray[i].includes(breakpointsClasses.sm.bpClass)) {
            currentColStyle = buildHTML(
              currentColStyle,
              breakpointsClasses.sm.class
            );
          } else if (
            colClassNamesArray[i].includes(breakpointsClasses.md.bpClass)
          ) {
            currentColStyle = buildHTML(
              currentColStyle,
              breakpointsClasses.md.class
            );
          } else if (
            colClassNamesArray[i].includes(breakpointsClasses.lg.bpClass)
          ) {
            currentColStyle = buildHTML(
              currentColStyle,
              breakpointsClasses.lg.class
            );
          } else if (
            colClassNamesArray[i].includes(breakpointsClasses.xl.bpClass)
          ) {
            currentColStyle = buildHTML(
              currentColStyle,
              breakpointsClasses.xl.class
            );
          } else if (
            colClassNamesArray[i].includes(breakpointsClasses.xxl.bpClass)
          ) {
            currentColStyle = buildHTML(
              currentColStyle,
              breakpointsClasses.xxl.class
            );
          } else {
            currentColStyle = buildHTML(
              currentColStyle,
              breakpointsClasses.xs.class
            );
          }
          resultColStyle = `${resultColStyle} ${currentColStyle}`;
        }
        child.innerHTML = `${colContent} ${resultColStyle}`;
      }
    } // for
  }; // displayColStyle

  /**
   *
   * @param {string} currentStyle current Style for `.col-*` classes
   * @param {string} insertedClass class to add to HTML tag that displays style
   * @returns code HTML to display current style
   */
  function buildHTML(currentStyle, insertedClass) {
    return `<pre class="${insertedClass}"><code>${currentStyle}</code></pre>`;
  }
}).apply(bsLayoutGridColStyle);
