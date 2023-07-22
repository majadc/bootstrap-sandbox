<?php require_once 'header.php' ?>
<header class="mb-5">
  <nav class="navbar navbar-expand-md bg-body-tertiary fixed-top" data-bs-theme="dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="container">
          <div class="row">
            <div class="col">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="index.php">home</a></li>
                <li class="nav-item"><a class="nav-link" href="https://majadc.com">majadc.com</a></li>
                <li class="nav-item"><a href="https://github.com/majadc/bootstrap-sandbox" class="nav-link">github</a></li>
                <li class="nav-item"><a class="nav-link" class="btn btn-primary" href="https://getbootstrap.com/" target="_blank" title="Bootstrap">Bootstrap</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </nav>
  <h1 class="display-3 text-center mt-5">Bootstrap Sandbox</h1>
</header>
<section class="container">
  <h2 class="display-6 bg-light mb-4 text-center py-3 border-top border-dark"">Bootstrap Templates</h2>
    <div class=" accordion" id="accordionBsTemplates"> <!--ul-->
    <div class="accordion-item">
      <h3 class="accordion-header">
        <a class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseContent" aria-expanded="true" aria-controls="collapseContent">Layout</a>
      </h3>
      <div id="collapseContent" class="accordion-collapse collapse show" data-bs-parent="#accordionBsTemplates">
        <div class="accordion-body">
          <ul class="nav flex-column">
            <li class="nav-item"><a class="nav-link" href="layout-breakpoints.php">Breakpoints</a></li>
            <li class="nav-item"><a class="nav-link" href="layout-containers.php">Containers</a></li>
            <li class="nav-item"><a class="nav-link" href="layout-grid.php">Grid</a></li>
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

<?php require_once 'footer.php' ?>