<?php require_once 'header.php' ?>
<?php require_once 'menu.php' ?>

<nav class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasPageMenu" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">On this page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="nav flex-column nav-pills" id="pageMenu">
      <li class=" nav-item"><a href="#containers" class="nav-link">Containers</a></li>
      <li class="nav-item"><a href="#containers-responsive-classes" class="nav-link">Containers - responsive classes</a></li>
      <li class="nav-item"><a href="#container" class="nav-link">Container</a></li>
      <li class="nav-item"><a href="#container-fluid" class="nav-link">Container Fluid</a></li>
      <li class="nav-item"><a href="#container-row" class="nav-link">Row</a></li>
      <li class="nav-item"><a href="#container-column" class="nav-link">Column</a></li>
    </ul>

  </div>
</nav>

<article class="mt-5" data-bs-spy="scroll" data-bs-target="#pageMenu" data-bs-smooth-scroll="true">
  <header class="container mb-5">
    <div class="row">
      <div class="col">
        <h1 id="containers" class="h1">Containers <a class="btn btn-sm text-bg-dark btn-bs-version" href="https://getbootstrap.com/docs/5.3/layout/containers/" target="_blank" title="Bootstrap Containers - Documentation">Doc</a></h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p id="bsBreakpointsViewportState" class="bs-breakpoints-viewport-state d-inline-block p-1"></p>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="row">
      <div class="col">
        <h2 id="containers-responsive-classes" class="h2">Containers - responsive classes</h2>
        <h3 class="h3 my-3">Bootstrap has three different containers:</h3>
        <ul>
          <li>
            <code>.container</code>, which sets a max-width at each responsive
            breakpoint
          </li>
          <li>
            <code>.container-{breakpoint}</code>, which is width: 100% until
            the specified breakpoint
          </li>
          <li>
            <code>.container-fluid</code>, which is width: 100% at all
            breakpoints
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container p-2 mb-3 text-bg-primary">
    <code class="text-bg-dark">.container</code><br />
    its max width changes at each breakpoint
  </div>
  <div class="container-sm p-2 mb-3 text-bg-secondary">
    <code class="text-bg-dark">.container-sm</code> <br />100% wide until small breakpoint - sm: &ge;576px
  </div>
  <div class="container-md p-2 mb-3 text-bg-success">
    <code class="text-bg-dark">.container-md</code><br />100% wide until medium breakpoint - md: &ge;768px
  </div>
  <div class="container-lg p-2 mb-3 text-bg-danger">
    <code class="text-bg-dark">.container-lg</code><br />100% wide until large breakpoint - lg: &ge;992px
  </div>
  <div class="container-xl p-2 mb-3 text-bg-warning">
    <code class="text-bg-dark">.container-xl</code><br />100% wide until extra large breakpoint - xl: &ge;1200px
  </div>
  <div class="container-xxl p-2 mb-3 text-bg-info">
    <code class="text-bg-dark">.container-xxl</code><br />100% wide until extra extra large breakpoint - xxl: &ge;1400px
  </div>
  <div class="container-fluid p-2 mb-5 text-bg-dark">
    <code class="text-bg-dark">.container-fluid</code><br />full width container, spanning the entire width of the viewport
  </div>

  <div class="container mb-3">
    <div class="row">
      <div class="col">
        <h2 id="container" class="h2">Container <a class="btn btn-sm text-bg-dark btn-bs-version" href="https://getbootstrap.com/docs/5.3/layout/containers/#default-container" target="_blank" title="Bootstrap Default container - Documentation">Doc</a></h2>
      </div>
    </div>
  </div>
  <div class="container bg-primary-subtle" id="bsLayoutContainer">
    <code>.container</code>
    <pre><code id="bsLayoutContainerComputedStyle"></code></pre>
  </div>
  </div>
  <div class="container mt-3 mb-5">
    <div class="row">
      <div class="col">
        <pre><code id="bsLayoutContainerJsOutput"></code></pre>
      </div>
    </div>
  </div>

  <div class="container mb-3">
    <div class="row">
      <div class="col">
        <h2 id="container-fluid" class="h2">Fluid Container <a class="btn btn-sm text-bg-dark btn-bs-version" href="https://getbootstrap.com/docs/5.3/layout/containers/#fluid-containers" target="_blank" title="Bootstrap Fluid container - Documentation">Doc</a></h2>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-dark-subtle" id="bsLayoutContainerFluid">
    <div class="row">
      <div class="col">
        <code>.container-fluid</code>
        <pre><code id="bsLayoutContainerFluidComputedStyle"></code></pre>
      </div>
    </div>
  </div>
  <div class="container mt-3 mb-5">
    <div class="row">
      <div class="col">
        <pre><code id="bsLayoutContainerFluidJsOutput"></code></pre>
      </div>
    </div>
  </div>

  <div class="container mb-3">
    <div class="row">
      <div class="col">
        <h2 id="container-row" class="h2">Row <a class="btn btn-sm text-bg-dark btn-bs-version" href="https://getbootstrap.com/docs/5.3/layout/grid/#how-it-works" target="_blank" title="Bootstrap Row - Documentation">Doc</a></h2>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row bg-success-subtle" id="bsLayoutRow">
      <code>.row</code>
      <pre><code id="bsLayoutRowComputedStyle"></code></pre>
    </div>
  </div>
  <div class="container mt-3 mb-5">
    <div class="row">
      <div class="col">
        <pre><code id="bsLayoutRowJsOutput"></code></pre>
      </div>
    </div>
  </div>

  <div class="container mb-3">
    <div class="row">
      <div class="col">
        <h2 id="container-column" class=" h2">Column <a class="btn btn-sm text-bg-dark btn-bs-version" href="https://getbootstrap.com/docs/5.3/layout/grid/#how-it-works" target="_blank" title="Bootstrap Column - Documentation">Doc</a></h2>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="bg-info-subtle" id="bsLayoutCell">
        <code>.col</code>
        <pre><code id="bsLayoutCellComputedStyle"></code></pre>
      </div>
    </div>
  </div>
  <div class="container mt-3 mb-5">
    <div class="row">
      <div class="col">
        <pre><code id="bsLayoutCellJsOutput"></code></pre>
      </div>
    </div>
  </div>


</article>


<?php require_once 'footer.php' ?>