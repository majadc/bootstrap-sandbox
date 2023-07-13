<?php require_once 'header.php' ?>
<main class="container my-5">
  <header class="mb-5">
    <h1 class="h1 mb-4 text-center">Bootstrap sandbox</h1>
    <nav>
      <ul class="nav justify-content-center">
        <li class="nav-item"><a class="nav-link" href="https://majadc.com">majadc</a></li>
        <li class="nav-item"><a class="nav-link" href="#">github</a></li>
        <li class="nav-item"><a class="nav-link" href="https://getbootstrap.com/">bootstrap</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2 class="h2 mb-4">Bootstrap templates</h2>
    <div class="accordion" id="accordionBsTemplates">
      <div class="accordion-item">
        <h3 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent" aria-expanded="true" aria-controls="collapseContent">Layout</button>
        </h3>
        <div id="collapseContent" class="accordion-collapse collapse show" data-bs-parent="#accordionBsTemplates">
          <div class="accordion-body">
            <ul class="nav flex-column">
              <li class="nav-item"><a class="nav-link" href="layout-breakpoints.php">Breakpoints</a></li>
              <li class="nav-item"><a class="nav-link" href="layout-containers.php">Containers</a></li>
              <li class="nav-item"><a class="nav-link" href="">Grid</a></li>
            </ul>
          </div>
        </div>
      </div><!--accordion-item-->

      <div class="accordion-item">
        <h3 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUtilities" aria-expanded="false" aria-controls="collapseUtilities">Content</button>
        </h3>

        <div id="collapseUtilities" class="collapse" aria-labelledby="heading-utilities" data-bs-parent="#accordion-bs-templates">
          <div class="accordion-body">
            <ul class="nav flex-column">
              <li class="nav-item"><a class="nav-link" href="">Reboot</a></li>
              <li class="nav-item"><a class="nav-link" href="">Topography</a></li>
            </ul>
          </div>
        </div>
      </div><!--accordion-->
    </div><!--accordion-->
  </section>

</main>
<?php require_once 'footer.php' ?>