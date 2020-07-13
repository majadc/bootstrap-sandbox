<?php require_once 'header.php' ?>
  <div class="container">
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
                <li class="nav-item"><a href="#universalSelector" class="nav-link">&#42;</a></li>
                <li class="nav-item"><a href="#html" class="nav-link">html</a></li>
                <li class="nav-item"><a href="#body" class="nav-link">body</a></li>
                
              </ul>
            </div>

          </div>
        </nav>
      </div>

      <div class="col-sm-8 ">

        <header id="top" class="row">
          <div class="col-sm">
            <h1 class="h1">Reebot</h1>
          </div>
          <div class="col-sm text-right align-self-end"><a class="btn btn-primary" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/content/reboot/" target="_blank">Bootstrap Reboot</a></div>
        </header>
    

        <div id="bsReboot">
        <section id="universalSelector" class="my-5">
          <h2 class="mb-3">Universal selector &#42;</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        <section id="html" class="my-5">
          <h2 class="mb-3">html</h2>
          <pre><code class="output-js"></code></pre>
        </section>

        <section id="body" class="my-5">
          <h2 class="mb-3">body</h2>
          <pre><code class="output-js"></code></pre>
        </section>
        </div>

      </div>

    </div>
  </div>
<?php require_once 'footer.php' ?>
