<?php require_once 'header.php' ?>
<?php require_once 'menu.php' ?>

<nav class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasPageMenu" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">On this page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="nav flex-column nav-pills" id="pageMenu">
      <li class=" nav-item"><a href="#name" class="nav-link">Name</a></li>
      <li class="nav-item"><a href="" class="nav-link"></a></li>
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

  <!-- CONTENT -->

</section>
<?php require_once 'footer.php' ?>