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
                  <li class="nav-item"><a href="#inline-code" class="nav-link">Inline code</a></li>
                  <li class="nav-item"><a href="#block-code" class="nav-link">Code block</a></li>
                  <li class="nav-item"><a href="#user-input" class="nav-link">User input</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="col-sm-8 ">
        <header id="top" class="row">
          <div class="col-sm">
            <h1 class="h1">Code</h1>
          </div>
          <div class="col-sm text-right align-self-end"><a class="btn btn-primary" href="https://getbootstrap.com/docs/4.1/content/code/" target="_blank">Bootstrap Code</a></div>
          <div class="col-12 mt-5">
            <h3>The style rules for all HTML elements: code, kbd, pre, samp</h3>
            <pre class="mt-3"><code id="code-output-js"></code></pre>
          </div>
        </header>
      
      
        <section id="inline-code" class="my-5">
          <h2  class="mb-3">Inline Code</h2>
          <pre><code>&lt;code&gt;&lt;/code&gt;</code></pre>
          <div><code>code</code></div>
          <pre class="mt-3"><code class="output-js"></code></pre>
        </section>

        <section id="block-code" class="my-5">
          <h2  class="mb-3">Block Code</h2>
          <pre><code>&lt;pre&gt;&lt;code&gt;block code&lt;/code&gt;&lt;/pre&gt;</code></pre>
          <pre><code>block code</code></pre>
          <pre class="mt-3"><code class="output-js"></code></pre>
        </section>  

        <section id="user-input" class="my-5">
          <h2  class="mb-3">User input</h2>
          <pre><code>To edit settings, pres&lt;kbd&gt;ctrl +&lt;/kbd&gt;</code></pre>
          <p>To edit settings pres <kbd>ctrl +</kbd></p>
          <pre class="mt-3"><code class="output-js"></code></pre>
        </section>  

      </div>
    </div>
  </div>

  <?php require_once 'footer.php' ?>
  
