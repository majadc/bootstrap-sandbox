<?php require_once 'header.php' ?>
  <div class="container majadc-components-card">
    <div class="row">

      <div class="col-sm-4 sticky-top nav-main">
        <nav class="navbar navbar-expand-sm navbar-light bg-light" id="nav-main">
          <div class="flex-column">
            <a href="index" class="navbar-brand">Bootstrap Sandbox</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto flex-column">
                <li class="nav-item"><a href="#top" class="nav-link">Top</a></li>
                <li class="nav-item"><a href="#bs-card" class="nav-link">Card</a></li>
                <li class="nav-item"><a href="#bs-card-body" class="nav-link">card-body</a></li>
                <li class="nav-item"><a href="#bs-card-title" class="nav-link">card-title</a></li>
                <li class="nav-item"><a href="#bs-card-subtitle" class="nav-link">card-subtitle</a></li>
                <li class="nav-item"><a href="#bs-card-text" class="nav-link">card-text</a></li>
                <li class="nav-item"><a href="#bs-card-link" class="nav-link">card-link</a></li>
                <li class="nav-item"><a href="#bs-card-header" class="nav-link">card-header</a></li>
                <li class="nav-item"><a href="#bs-card-footer" class="nav-link">card-footer</a></li>
                <li class="nav-item"><a href="#bs-card-list-group" class="nav-link">card list-group</a></li>
                <li class="nav-item"><a href="#bs-card-header-tabs" class="nav-link">card-header-tabs</a></li>
                <li class="nav-item"><a href="#bs-card-header-pills" class="nav-link">card-header-pills</a></li>
                <li class="nav-item"><a href="#bs-card-img" class="nav-link">card-img</a></li>
                <li class="nav-item"><a href="#bs-card-img-top" class="nav-link">card-img-top</a></li>
                <li class="nav-item"><a href="#bs-card-img-bottom" class="nav-link">card-img-bottom</a></li>
                <li class="nav-item"><a href="#bs-card-img-overlay" class="nav-link">card-img-overlay</a></li>

              </ul>
            </div>

          </div>
        </nav>
      </div>

      <div class="col-sm-8 ">

        <header id="top" class="row">
          <div class="col-sm">
            <h1 class="h1">Card</h1>
          </div>
          <div class="col-sm text-right align-self-end"><a class="btn btn-primary" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/components/card/" target="_blank">Card</a></div>
        </header>
        
        <?php require_once 'search_in_stylerules.php' ?>
        
       <div>
         

        <section id="bs-card" class="my-5">
          <h2 class="mb-3">Card</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        <section id="bs-card-body" class="my-5">
          <h2 class="mb-3">Card-body</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        <section id="bs-card-title" class="my-5">
          <h2 class="mb-3">card-title</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        <section id="bs-card-subtitle" class="my-5">
          <h2 class="mb-3">card-subtitle</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        <section id="bs-card-text" class="my-5">
          <h2 class="mb-3">card-text</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        <section id="bs-card-link" class="my-5">
          <h2 class="mb-3">card-link</h2>
          <pre><code class="output-js"></code></pre>
          <pre><code class="output-js-1"></code></pre>
        </section>

        <section id="bs-card-header" class="my-5">
          <h2 class="mb-3">card-header</h2>
          <pre><code class="output-js"></code></pre>
          <pre><code class="output-js-1"></code></pre>
        </section>

        <section id="bs-card-footer" class="my-5">
          <h2 class="mb-3">card-footer</h2>
          <pre><code class="output-js"></code></pre>
          <pre><code class="output-js-1"></code></pre>
        </section>

        <section id="bs-card-list-group" class="my-5">
          <h2 class="mb-3">card list-group</h2>
          <pre><code class="output-js"></code></pre>
          <pre><code class="output-js-1"></code></pre>
          <pre><code class="output-js-2"></code></pre>
        </section>


        <section id="bs-card-header-tabs" class="my-5">
          <h2 class="mb-3">card-header-tabs</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        <section id="bs-card-header-pills" class="my-5">
          <h2 class="mb-3">card-header-pills</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        <section id="bs-card-img" class="my-5">
          <h2 class="mb-3">card-img</h2>
          <pre><code class="output-js"></code></pre>
          
        </section>
        
        <section id="bs-card-img-top" class="my-5">
          <h2 class="mb-3">card-img-top</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        
        <section id="bs-card-img-bottom" class="my-5">
          <h2 class="mb-3">card-img-bottom</h2>
          <pre><code class="output-js"></code></pre>
        </section>


        <section id="bs-card-img-overlay" class="my-5">
          <h2 class="mb-3">card-img-overlay</h2>
          <pre><code class="output-js"></code></pre>
          
        </section>

       </div>


      </div>

    </div>
  </div>
<?php require_once 'footer.php' ?>