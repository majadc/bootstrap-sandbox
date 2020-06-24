<?php require_once 'header.php' ?>
<div class="container">
      
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
                  <li class="nav-item"><a href="#top" class="nav-link">Top</a></li>
                  <li class="nav-item"><a href="#text-muted" class="nav-link">Text muted</a></li>
                  <li class="nav-item"><a href="#text-monospace" class="nav-link">Text monospace</a></li>
                  <li class="nav-item"><a href="#text-truncate" class="nav-link">Text truncate</a></li>
                  <li class="nav-item"><a href="#text-wrapping-overflow" class="nav-link">Text wrapping and overflow</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div><!--nav-main-->
        <div class="col-sm-8 ">
        <header class="row">
          <div class="col-sm">
            <h1 id="top" class="h1">Text</h1>
          </div>
          <div class="col-sm text-right align-self-end"><a class="btn btn-primary" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/utilities/text/" target="_blank">Bootstrap Text</a></div>
        </header>

        
        <section id="text-muted" class="my-5">
          <h2 class="h2 mb-3">Text muted</h2>
          <p class="text-muted">
            <code>class = text-muted</code> <br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            doloribus. Labore molestias, consectetur nesciunt error autem
            dolorum! Nihil eum suscipit nemo facere cum accusamus iste
            architecto, nesciunt rem eveniet! Sed.
          </p>
          <pre  class="mt-3"><code>.text-muted {
  color: #6c757d !important;
}</code></pre>      
        </section>

        <section id="text-monospace" class="my-5">
          <h2 class="h2 mb-3">Text monospace</h2>
          <p class="text-monospace">
            <code>class = text-monospace</code>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque illo
            impedit minima totam quaerat. Atque eos ex consectetur dolorum velit
            adipisci eligendi, odit commodi, neque rerum voluptatem architecto
            nam repellendus.
          </p>
<pre class="mt-3"><code>.text-monospace {
  font-family: SFMono-Regular,
              Menlo, Monaco, Consolas,
              "Liberation Mono",
              "Courier New",
              monospace !important;
}</code></pre>      
        </section>

        <section class="my-5" id="text-truncate">
          <h2  class="h2 mb-3">Text truncate</h2>
          <p class="text-truncate"><code>class = text-truncate </code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque neque facere dolor, ad quos aliquid quam id delectus repellendus dicta harum hic pariatur cum sint assumenda vel eveniet iusto.</p>
          <pre class="output-js">
            <code></code>
          </pre>
        </section>
        <section class="my-5" id="text-wrapping-overflow">
          <h2 class="h2 mb-3">Text wrapping and overflow</h2>
          <p class="text-nowrap bg-dark" style="width: 12rem;"><code>class = text-nowrap </code>Text overflows its parent.</p>
          <pre class="output-js">
            <code></code>
          </pre>
        </section>


       
      </div>
    </div>
  </div>
<?php require_once 'footer.php' ?>