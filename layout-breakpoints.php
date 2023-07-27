<?php require_once 'header.php' ?>
<?php require_once 'menu.php' ?>


<nav class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasPageMenu" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">On this page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="nav flex-column nav-pills" id="pageMenu">
      <li class=" nav-item"><a href="#breakpoints" class="nav-link">Breakpoints</a></li>
      <li class="nav-item"><a href="#media-queries" class="nav-link">Media queries</a></li>
    </ul>
  </div>
</nav>

<article class="mt-4" data-bs-spy="scroll" data-bs-target="#pageMenu" data-bs-smooth-scroll="true">
  <header class="container mb-5">
    <div class="row">
      <div class="col">
        <h1 id="breakpoints">Breakpoints <a class="btn btn-sm text-bg-dark btn-bs-version" href="https://getbootstrap.com/docs/5.3/layout/breakpoints/" target="_blank" title="Bootstrap Breakpoints Documentation">Doc</a></h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p id="bsBreakpointsViewportState" class="bs-breakpoints-viewport-state d-inline-block"></p>
      </div>
    </div>
  </header>

  <div class="container mb-5">
    <div class="row">
      <div class="col">
        <h2 class="h2 mb-3">List of breakpoints <a class="btn btn-sm text-bg-dark btn-bs-version" href="https://getbootstrap.com/docs/5.3/layout/breakpoints/#available-breakpoints" target="_blank" title="Bootstrap Available breakpoints - Documentation">Doc</a></h2>
        <ul class="list-group bs-breakpoints-media-query-viewport-list" id="bsBreakpointsMediaQueryList">
          <li class="list-group-item">
            Current viewport width:
            <strong id="bsBreakpointCurrentViewportWidth" class="bs-breakpoints-media-query-viewport-list-width px-1 rounded-1"></strong>
          </li>
          <li class="list-group-item text-bg-primary" id="bsBreakpointActiveItemXS">
            Extra small - xs - &gt;&#61;0px
          </li>
          <li class="list-group-item text-bg-secondary" id="bsBreakpointActiveItemSM">
            Small - sm - &gt;&#61;576px = 36em
          </li>
          <li class="list-group-item text-bg-success" id="bsBreakpointActiveItemMD">
            Medium - md - &gt;&#61;768px = 48em
          </li>
          <li class="list-group-item text-bg-danger" id="bsBreakpointActiveItemLG">
            Large - lg - &gt;&#61;992px = 62em
          </li>
          <li class="list-group-item text-bg-warning" id="bsBreakpointActiveItemXL">
            Extra large - xl - &gt;&#61;1200px = 75em
          </li>
          <li class="list-group-item text-bg-info" id="bsBreakpointActiveItemXXL">
            Extra extra large - xxl - &gt;&#61;1400px = 87.5em
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="h2 mb-3" id="media-queries">Media Queries <a href="https://getbootstrap.com/docs/5.3/layout/breakpoints/#media-queries" class="btn btn-sm text-bg-dark btn-bs-version" target="_blank" title="Bootstrap Media Queries - Documentation">Doc</a></h2>
      </div>
    </div>
  </div>

  <div class="container bs-breakpoints-media-query-up">
    <div class="row">
      <div class="col">
        <h3 class="h3 text-bg-dark">
          Breakpoints based on minimum viewport widths <code>min-width</code>.
        </h3>
        <pre><code id="bsBreakpointsMediaQueryMinWidth"></code></pre>
      </div>
    </div>
  </div>


  <div class="container bs-breakpoints-media-query-down my-4">
    <div class="row">
      <div class="col">
        <h3 class="h3 text-bg-dark">
          Media queries for breakpoints based on maximum viewport widths<br />
          <code>max-width</code>
        </h3>
        <pre><code id="bsBreakpointsMediaQueryMaxWidth"></code></pre>
      </div>
    </div>

  </div>

  <div class="container bs-breakpoints-media-query-single my-4">
    <div class="row">
      <div class="col">
        <h3 class="h3 text-bg-dark">
          Media queries for targeting single segment of screen sizes using the
          minimum and maximum breakpoint widths.
        </h3>
        <pre><code id="bsBreakpointsMediaQuerySingleSegment"></code></pre>
      </div>
    </div>
  </div>

</article>













<?php require_once 'footer.php' ?>