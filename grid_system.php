<?php require_once 'header.php' ?>
<div class="container">
    <div class="row">
      <div class="col-sm-4 sticky-top nav-main">
        <nav class="navbar navbar-expand-sm navbar-light bg-light" id="nav-main">
          <div class="container flex-column">
            <a href="index" class="navbar-brand">Bootstrap Sandbox</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto flex-column">
                <li class="nav-item"><a href="#top" class="nav-link">Top</a></li>
                <li class="nav-item"><a href="#container" class="nav-link">Container</a></li>
                <li class="nav-item"><a href="#container-fluid" class="nav-link">Fluid Container</a></li>
                <li class="nav-item"><a href="#row" class="nav-link">Row</a></li>
                <li class="nav-item"><a href="#column" class="nav-link">Columns</a></li>
                <li class="nav-item"><a href="#grid" class="nav-link">Grid</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div><!--nav-main-->

      <div class="col-sm-8 ">
        <header class="row">
          <div id="top" class="col-sm">
            <h1 class="h1">Grid System</h1>
          </div>
          <div class="col-sm text-right align-self-end"><a class="btn btn-primary"
              href="https://getbootstrap.com/docs/4.1/layout/overview/" target="_blank">Bootstrap Grid</a></div>
        </header>

        <section class="my-5">
        <h2 id="container" class="h2 mb-3">Grid container</h2>
        <div class="container bg-primary majadc-grid-container" data-toggle="tooltip" data-placement="top" title="padding left and right : 15px;"></div>
        <pre><code id="grid-container-output-js"></code></pre>
        </section>

        <section class="my-5">
          <h2 id="container-fluid" class="h2 mb-3">Fluid Container</h2>
          <p>Fluid container is a full width container, spanning the entire width of the viewport</p>
          <div class="container-fluid bg-secondary majadc-grid-container" data-toggle="tooltip" data-placement="top" title="padding left and right : 15px;"></div>
          <pre><code id="grid-container-fluid-output-js"></code></pre>
        </section>

        <section class="my-5">
          <h2 id="row" class="h2 mb-3">Row</h2>
          <div class="row bg-danger majadc-grid-container majadc-grid-container-row" data-toggle="tooltip" data-placement="top" title="margin left and right : -15px;"></div>
          <pre><code id="grid-row-output-js"></code></pre>

        </section>

        <section class="my-5">
          <h2 id="column" class="h2 mb-3">Column</h2>
          <div class="row bg-success">
            <div class="col majadc-grid-container" data-toggle="tooltip" data-placement="top" title="padding left and right : 15px;"></div>
          </div>
          <pre><code id="grid-col-output-js"></code></pre>
        </section>

        <section class="my-5">
          <h2 id="grid" class="h2 mb-3">Grid - breakpoints</h2>
          <h3 class="h3 mt-5 mb-3">Equal columns</h3>
          <div class="container">
            <div class="row majadc-grid majadc-equal-columns" data-toggle="tooltip" data-placement="top" title="padding left and right : 15px;">
              <div class="col">1 column</div>
              <div class="col">2 column</div>
              <div class="col">3 column</div>
            </div>
          </div>
          <pre class="mt-3"><code>&lt;div class="container"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col"&gt;1 column&lt;/div&gt;
      &lt;div class="col"&gt;2 column&lt;/div&gt;
      &lt;div class="col"&gt;3 column&lt;/div&gt;
    &lt;/div&gt;
    &lt;/div&gt;</code></pre>
          <h3 class="h3 mt-5 mb-3">No gutters</h3>
          <div class="container">
            <div class="row no-gutters majadc-grid">
              <div class="col">1 column</div>
              <div class="col">2 column</div>
              <div class="col">3 column</div>
            </div>
          </div>
          <pre class="mt-3"><code>&lt;div class="container"&gt;
    &lt;div class="row no-gutters"&gt;
      &lt;div class="col"&gt;1 column&lt;/div&gt;
      &lt;div class="col"&gt;2 column&lt;/div&gt;
      &lt;div class="col"&gt;3 column&lt;/div&gt;
    &lt;/div&gt;
    &lt;/div&gt;</code></pre>

          <h3 class="h3 mt-5 mb-3">Breakpoints Classes</h3>
          <p class="h3 my-3">Current viewport: <span id="grid-viewport"></span></p>
          <p class="mb-5"><a class="btn btn-outline-success btn-sm" href="https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints" target="_blank">Bootstrap: Responsive breakpoints</a></p>
          <div id="majadc-grid-example-1" class="row majadc-grid">
            <div class="col-sm">class="col-sm" <span class="majadc-js-output majadc-style-block"></span></div>
            <div class="col-md">class="col-md" <span class="majadc-js-output majadc-style-block"></span></div>
            <div class="col-lg">class="col-lg <span class="majadc-js-output majadc-style-block"></span></div>
            <div class="col-xl">class="col-xl <span class="majadc-js-output majadc-style-block"></span></div>
          </div>
          <pre  class="mt-3"><code>&lt;div class="row"&gt;
    &lt;div class="col-sm"&gt;Column 1&lt;/div&gt;
    &lt;div class="col-md"&gt;Column 2&lt;/div&gt;
    &lt;div class="col-lg"&gt;Column 3&lt;/div&gt;
    &lt;div class="col-xl"&gt;Column 4&lt;/div&gt;
    &lt;/div&gt;</code></pre>
          

          <h3 class="h3 mt-5 mb-3">Stacked to horizontal</h3>
          <div id="majadc-grid-example-2" class="row majadc-grid">
            <div class="col-sm"><span class="majadc-js-output majadc-style-block"></span></div>
            <div class="col-sm"><span class="majadc-js-output majadc-style-block"></span></div>
            <div class="col-sm"><span class="majadc-js-output majadc-style-block"></span></div>
          </div>
          <pre class="mt-3"><code>&lt;div class="row"&gt;
    &lt;div class="col-sm"&gt;Column 1&lt;/div&gt;
    &lt;div class="col-sm"&gt;Column 2&lt;/div&gt;
    &lt;div class="col-sm"&gt;Column 3&lt;/div&gt;
    &lt;/div&gt;</code></pre>



          <h3 class="mt-5">Demo shows active classes.</h3>
          <div id="majadc-grid-example-3" class="row majadc-grid">
            <div class="col-sm-6 col-md-7 col-lg-8 col-xl-9"><span class="majadc-js-output majadc-style-block"></span>
            </div>
            <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3"><span class="majadc-js-output majadc-style-block"></span>
            </div>
          </div>
          <pre class="mt-3"><code>&lt;div class="row"&gt;
    &lt;div class="col-sm-6 col-md-7 col-lg-8 col-xl-9"&gt;Column&lt;/div&gt;
    &lt;div class="col-sm-6 col-md-5 col-lg-4 col-xl-3"&gt;Column&lt;/div&gt;
    &lt;/div&gt;</code></pre>
          <hr />
          <div id="majadc-grid-example-4" class="row majadc-grid">
            <div class="col-sm-4 col-md-3 col-lg-2 col-xl-1"><span class="majadc-js-output majadc-style-block"></span>
            </div>
            <div class="col-sm-4 col-md-6 col-lg-8 col-xl-10"><span class="majadc-js-output majadc-style-block"></span>
            </div>
            <div class="col-sm-4 col-md-3 col-lg-2 col-xl-1"><span class="majadc-js-output majadc-style-block"></span>
            </div>
          </div>
          <pre class="mt-3"><code>&lt;div class="row"&gt;
    &lt;div class="col-sm-4 col-md-3 col-lg-2 col-xl-1"&gt;Column&lt;/div&gt;
    &lt;div class="col-sm-4 col-md-6 col-lg-8 col-xl-10"&gt;Column&lt;/div&gt;
    &lt;div class="col-sm-4 col-md-3 col-lg-2 col-xl-1"&gt;Column&lt;/div&gt;
    &lt;/div&gt;</code></pre>
        </section>
      </div>
    </div>
  </div>
<?php require_once 'footer.php' ?>