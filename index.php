<?php require_once 'header.php' ?>
<main class="container my-5">
      <header class="mb-5">
        <h1 class="h1 mb-4 text-center">Bootstrap sandbox</h1>
        <nav>
          <ul class="nav bg-primary justify-content-center">
            <li class="nav-item"><a class="nav-link btn-outline-light" href="https://majadc.com">majadc</a></li>
            <li class="nav-item"><a class="nav-link btn-outline-light" href="#">github</a></li>
            <li class="nav-item"><a class="nav-link btn-outline-light" href="https://getbootstrap.com/">bootstrap</a></li>
          </ul>
        </nav>
      </header>
      <section>
        <h2 class="h2 mb-4">Bootstrap templates</h2>
        <div class="accordion" id="accordion-bs-templates">


          <div class="card">
            <div class="card-header bg-dark" id="heading-content">
              <h3 class="h3"><button class="btn btn-dark w-100" type="button" data-toggle="collapse" data-target="#collapse-content" aria-expanded="true" aria-collapse="collapse-content">Content</button></h3>
            </div>
            <div id="collapse-content" class="collapse show" aria-labelledby="heading-content" data-parent="#accordion-bs-templates">
              <div class="card-body">
                <ul class="nav flex-column">
                <li class="nav-item"><a class="nav-link btn btn-light text-left" href="reboot.php">Reboot</a></li>
                  <li class="nav-item"><a class="nav-link btn btn-light text-left" href="typography.php">Typography</a></li>
                  <li class="nav-item"><a class="nav-link btn btn-light text-left" href="code.php">Code</a></li>
                  
                </ul>
              </div>
            </div>
          </div><!--card-->

          <div class="card">
            <div class="card-header bg-dark" id="heading-utilities">
              <h3 class="h3"><button class="btn btn-dark w-100" type="button" data-toggle="collapse" data-target="#collapse-utilities" aria-expanded="true" aria-collapse="collapse-utilities">Utilities</button></h3>
            </div>
            <div id="collapse-utilities" class="collapse" aria-labelledby="heading-utilities" data-parent="#accordion-bs-templates">
              <div class="card-body">
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link btn btn-light text-left" href="text.php">Text</a></li>
                  <li class="nav-item"><a class="nav-link btn btn-light text-left" href="spacing.php">Spacing</a></li>
                </ul>
              </div>
            </div>
          </div><!--card-->

          <div class="card">
            <div class="card-header bg-dark" id="heading-grid-system">
              <h3 class="h3"><button class="btn btn-dark w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapse-grid-system" aria-expanded="true" aria-collapse="collapse-grid-system">Layout</button></h3>
            </div>
            <div id="collapse-grid-system" class="collapse" aria-labelledby="heading-grid-system" data-parent="#accordion-bs-templates">
              <div class="card-body">
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link btn btn-light text-left" href="grid_system.php">Grid system</a></li>
                </ul>
              </div>
            </div>
          </div><!--card-->

          <div class="card">
            <div class="card-header bg-dark" id="heading-components-tooltips">
              <h3 class="h3"><button class="btn btn-dark w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapse-components-tooltips" aria-expanded="true" aria-collapse="collapse-components-tooltips">Components</button></h3>
            </div>
            <div id="collapse-components-tooltips" class="collapse" aria-labelledby="heading-components-tooltips" data-parent="#accordion-bs-templates">
              <div class="card-body">
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link btn btn-light text-left" href="components_tooltips.php">Tooltips</a></li>
                  <li class="nav-item"><a class="nav-link btn btn-light text-left" href="components_card.php">Card</a></li>
                </ul>
              </div>
            </div>
          </div><!--card-->
        </div><!--accordion-->
      </section>
    </main>

<?php require_once 'footer.php' ?>