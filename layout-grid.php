<?php require_once 'header.php' ?>
<?php require_once 'menu.php' ?>

<nav class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasPageMenu" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">On this page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="nav flex-column nav-pills" id="pageMenu">
      <li class="nav-item"><a href="#grid" class="nav-link">Grid</a></li>
      <li class=" nav-item"><a href="#breakpoints" class="nav-link">Breakpoints</a></li>
      <li class="nav-item"><a href="#twelve-column-system" class="nav-link">The 12 column system</a></li>
      <li class="nav-item"><a href="#grid-equal-width" class="nav-link">Grid - equal-width</a></li>
      <li class="nav-item"><a href="#setting-one-column-width" class="nav-link">Setting one column width</a></li>
      <li class="nav-item"><a href="#all-breakpoints" class="nav-link">All breakpoints</a></li>
      <li class="nav-item"><a href="#stack-horizontally" class="nav-link">Stack horizontally</a></li>
      <li class="nav-item"><a href="#mix-and-match" class="nav-link">Mix and Mach</a></li>
      <li class="nav-item"><a href="#example-1" class="nav-link">Example 1</a></li>
    </ul>
  </div>
</nav>

<section class="mt-4" data-bs-spy="scroll" data-bs-target="#pageMenu" data-bs-smooth-scroll="true">
  <header class="container mb-5">
    <div class="row">
      <div class="col">
        <h1 id="grid" class="h1">Grid <a class="btn btn-sm text-bg-dark" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/layout/grid/" target="_blank" title="Bootstrap Grid - Documentation">Doc</a></h1>
      </div>
    </div>

  </header>

  <div class="container mb-3">
    <div class="row">
      <div class="col">
        <h2 class="h2 mb-3" id="breakpoints">Breakpoints <a class="btn btn-sm text-bg-dark" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/layout/grid/#how-it-works" target="_blank" title="Bootstrap Breakpoints - Documentation">Doc</a></h2>
        <p>Bootstrap grid supports six responsive breakpoints. Breakpoints are based on min-width media queries, meaning they affect that breakpoint and all those above it (e.g., .col-sm-4 applies to sm, md, lg, xl, and xxl).</p>
        <h3 class="h3 my-3">Basic style for column <code>.row > *</code></h3>
        <pre><code id="bsGridBaseStyleCell"></code></pre>
        <p>
          Column gutter
        <pre><code id="bsGridGutterStyleCell"></code></pre>
        </p>
      </div>
    </div>
  </div>
  <div class="container bs-mq-classes-display" id="bsGridMQClassesDisplay">
    <div class="row">
      <div class="col col-sx" id="bsGridColumnCell">
        <code>.col</code>
        <pre class="bs-grid-mq-classes-output-js"><code></code></pre>
      </div>
      <div class="col-sm">
        <code>.col-sm</code>
        <pre class="bs-grid-mq-classes-output-js"><code></code></pre>
      </div>
      <div class="col-md">
        <code>.col-md</code>
        <pre class="bs-grid-mq-classes-output-js"><code></code></pre>
      </div>
      <div class="col-lg">
        <code>.col-lg</code>
        <pre class="bs-grid-mq-classes-output-js"><code></code></pre>
      </div>
      <div class="col-xl">
        <code>.col-xl</code>
        <pre class="bs-grid-mq-classes-output-js"><code></code></pre>
      </div>
      <div class="col-xxl">
        <code>.col-xxl</code>
        <pre class="bs-grid-mq-classes-output-js"><code></code></pre>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h2 class="h2" id="twelve-column-system">The 12 column system <a class="btn btn-sm text-bg-dark" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/layout/grid/#grid-options" target="_blank" title="Bootstrap Grid - Documentation">Doc</a></h2>
        <p>There are 12 template columns available per row. Column classes indicate the number of template columns to span (e.g., col-4 spans four). widths are set in percentages so you always have the same relative sizing.</p>
      </div>
    </div>
  </div>

  <div class="container bs-grid-template text-center my-3">
    <div class="row">
      <div class="col border border-secondary-subtle" id="bsGridColumnCell">1</div>
      <div class="col border border-secondary-subtle border-start-0">2</div>
      <div class="col border border-secondary-subtle border-start-0">3</div>
      <div class="col border border-secondary-subtle border-start-0">4</div>
      <div class="col border border-secondary-subtle border-start-0">5</div>
      <div class="col border border-secondary-subtle border-start-0">6</div>
      <div class="col border border-secondary-subtle border-start-0">7</div>
      <div class="col border border-secondary-subtle border-start-0">8</div>
      <div class="col border border-secondary-subtle border-start-0">9</div>
      <div class="col border border-secondary-subtle border-start-0">10</div>
      <div class="col border border-secondary-subtle border-start-0">11</div>
      <div class="col border border-secondary-subtle border-start-0">12</div>
    </div>
  </div>

  <div class="container mt-5 mb-3">
    <div class="row">
      <div class="col">
        <h2 class="h2 mb-3">Grid Examples</h2>
        <h3 class="h3 mt-5" id="grid-equal-width">Equal-width <a class="btn btn-sm text-bg-dark" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/layout/grid/#equal-width" target="_blank" title="Bootstrap Grid Equal-width - Documentation">Doc</a></h3>
      </div>
    </div>
  </div>

  <div class="container bs-grid-template" id="bsGridEqualColumns">
    <div class="row">
      <div class="col">
        1 of 2
      </div>
      <div class="col">
        2 of 2
      </div>
    </div>
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col">
        2 of 3
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>


  <div class="container mt-5 mb-3">
    <div class="row">
      <div class="coll">
        <h3 class="h3 my-3" id="setting-one-column-width">Setting one column width <a class="btn btn-sm text-bg-dark" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/layout/grid/#setting-one-column-width" target="_blank" title="Bootstrap Grid - Documentation">Doc</a></h3>
      </div>
    </div>
  </div>

  <div class="container bs-grid-template" id="bsGridOneColumnWidth">
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col-6">
        2 of 3 (wider)
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col-5">
        2 of 3 (wider)
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>


  <div class="container mt-5 mb-3">
    <div class="row">
      <div class="col">
        <h3 class="h3" id="all-breakpoints">All breakpoints <a class="btn btn-sm text-bg-dark" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/layout/grid/#all-breakpoints" target="_blank" title="Bootstrap Grid - Documentation">Doc</a></h3>
      </div>
    </div>
  </div>
  <div class="container bs-grid-template" id="bsGridAllBreakpoints">
    <div class="row">
      <div class="col">col</div>
      <div class="col">col</div>
      <div class="col">col</div>
      <div class="col">col</div>
    </div>
    <div class="row">
      <div class="col-8">col-8</div>
      <div class="col-4">col-4</div>
    </div>
  </div>


  <div class="container mt-5 mb-3">
    <div class="row">
      <div class="col">
        <h3 class="h3" id="stack-horizontally">Stack horizontally <a class="btn btn-sm text-bg-dark" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/layout/grid/#stacked-to-horizontal" target="_blank" title="Bootstrap Grid - Documentation">Doc</a></h3>
      </div>
    </div>
  </div>
  <div class="container bs-grid-template" id="bsGridStackHorizontally">
    <div class="row">
      <div class="col-sm-8">col-sm-8</div>
      <div class="col-sm-4">col-sm-4</div>
    </div>
    <div class="row">
      <div class="col-sm">col-sm</div>
      <div class="col-sm">col-sm</div>
      <div class="col-sm">col-sm</div>
    </div>
  </div>


  <div class="container mt-5 mb-3">
    <div class="row">
      <div class="col">
        <h3 class="h3" id="mix-and-match">Mix and match <a class="btn btn-sm text-bg-dark" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/layout/grid/#mix-and-match" target="_blank" title="Bootstrap Grid - Documentation">Doc</a></h3>
      </div>
    </div>
  </div>
  <div class="container bs-grid-template" id="bsGridMixMatch">
    <div class="row">
      <div class="col-md-8">.col-md-8</div>
      <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    </div>
    <div class="row">
      <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    </div>
    <div class="row">
      <div class="col-6">.col-6</div>
      <div class="col-6">.col-6</div>
    </div>
  </div>

  <div class="container mt-5 mb-3">
    <div class="row">
      <div class="col">
        <h3 class="h3" id="example-1">Example 1</h3>
      </div>
    </div>
  </div>
  <div class="container bs-grid-template" id="bsGridExample_1">
    <div class="row">
      <div class="col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxl-10">
        .col .col-sm-6 .col-md-7 .col-lg-8 .col-xl-10 .col-xxl-11
      </div>
      <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
        .col .col-sm-6 .col-md-5 .col-lg-4 .col-xl-2 .col-xxl-1
      </div>
    </div>
  </div>

</section>
<?php require_once 'footer.php' ?>