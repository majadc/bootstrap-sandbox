<?php require_once 'header.php' ?>
<div class="container my-5">
      
      <div class="row">
        <div class="col-sm-4 sticky-top nav-main">
          <nav class="navbar navbar-expand-sm navbar-light bg-light" id="nav-main">
            <div class="container flex-column">
              <a href="index.php" class="navbar-brand">Bootstrap Sandbox</a>
              <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto flex-column">
                  <li class="nav-item"><a href="#tooltips" class="nav-link">Top</a></li>
                  <li class="nav-item"><a href="#tooltips-element-markup" class="nav-link">Markup of the HTML element</a></li>
                  <li class="nav-item"><a href="#tooltips-activate" class="nav-link">Activate</a></li>
                  <li class="nav-item"><a href="#tooltips-markup" class="nav-link">Tooltip markup</a></li>
                  <li class="nav-item"><a href="#tooltips-positions" class="nav-link">Tooltip positions</a></li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="col-sm-8 ">
        <header class="row">
          <div class="col-sm">
            <h1 id="top" class="h1">Tooltips</h1>
          </div>
          <div class="col-sm text-right align-self-end"><a class="btn btn-primary" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/components/tooltips/" target="_blank">Bootstrap Tooltip</a></div>
        </header>
      
      
        <section class="my-5">
          <h2 id="tooltips-element-markup" class="h2 mt-3">Markup</h2>
          <pre><code>
&lt;button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top"&gt;
  Tooltip on top
&lt;/button&gt;
          </code></pre>
          <h2 id="tooltips-activate" class="h2 my-3">Activate</h2>
          <pre><code>
            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
            })
          </code></pre>
          <pre><code></code></pre>
          <h2 id="tooltips-markup" class="h2 mb-3"> Generated markup by the plugin</h2>
          <pre><code>
&lt;div class="tooltip bs-tooltip-top" role="tooltip"&gt;
  &lt;div class="arrow"&gt;&lt;/div&gt;
  &lt;div class="tooltip-inner"&gt;
    Some tooltip text!
  &lt;/div&gt;
&lt;/div&gt;
          </code></pre>

          <div id="tooltips-classes" class="btn-group mb-3" role="group" aria-label="Tooltip Classes" data-toggle="tooltip" data-placement="top" title="Styler rules for tooltips classes">
            <button type="button" class="btn btn-secondary">.tooltip</button>
            <button type="button" class="btn btn-secondary">.tooltip .arrow</button>
            <button type="button" class="btn btn-secondary">.tooltip .arrow::before</button>
            <button type="button" class="btn btn-secondary">.tooltip-inner</button>
          </div>

          <pre><code id="tooltips-output-js"></code></pre>

          <div id="tooltips-positions" class="mt-5">
            <h2 class="h2 mb-3">Tooltips postions</h2>
            <button class="btn btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
            <button class="btn btn-outline-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
            <button class="btn btn-outline-success" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
            <button class="btn btn-outline-danger" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
            <pre class="mt-3"><code id="tooltips-positions-output-js"></code></pre>
            
          </div>
         
        </section>

        

      </div>
    </div>
  </div>
<?php require_once 'footer.php' ?>