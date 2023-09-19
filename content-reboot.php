<?php require_once 'header.php' ?>
<?php require_once 'menu.php' ?>

<nav class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasPageMenu" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">On this page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="nav flex-column nav-pills" id="pageMenu">
      <li class=" nav-item"><a href="#reboot" class="nav-link">Reboot</a></li>
      <li class="nav-item"><a href="" class="nav-link"></a></li>
    </ul>
  </div>
</nav>

<article class="mt-4" data-bs-spy="scroll" data-bs-target="#pageMenu" data-bs-smooth-scroll="true">

  <header class="container mb-5">
    <div class="row">
      <div class="col">
        <h1 id="reboot" class="h1">Reboot <a class="btn btn-sm text-bg-dark btn-bs-version" href="https://getbootstrap.com/docs/5.3/content/reboot/" target="_blank" title="Bootstrap reboot - Documentation">Doc</a></h1>
      </div>
    </div>

  </header>

  <section class="container">
    <p>Bootstrap's reboot is a CSS reset or normalization file that helps ensure consistent and cross-browser rendering of HTML elements. It provides a baseline for styles that helps mitigate some of the default styling differences between various web browsers.</p>
    <h2 class="h2 mb-3">List of Selectors Contained in the Bootstrap Reboot File</h2>
    <p>Choose the selectors you'd like to inspect for their styles.</p>
    <div id="mdSSExtractorReboot" class="md-selectors-style-extractor">
      <div class="d-grid gap-2 d-md-flex mb-4">
        <button class="btn btn-danger md-sse-show-style-btn" disabled type="button"><span id="bsRebootSpinner" class="spinner-border spinner-border-sm d-none md-sse-wait-spinner" aria-hidden="true"></span> Show
          style</button>

      </div>
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="bs-sse-selectors-reboot-tab" data-bs-toggle="tab" data-bs-target="#bs-sse-selectors-reboot-tab-pane" type="button" role="tab" aria-controls="bs-sse-selectors-reboot-tab-pane" aria-selected="true">Selectors</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link md-sse-style-tab-btn" id="bs-sse-style-reboot-tab" data-bs-toggle="tab" data-bs-target="#bs-sse-style-reboot-tab-pane" type="button" role="tab" aria-controls="bs-sse-style-reboot-tab-pane" aria-selected="false">Style <span class="spinner-grow spinner-grow-sm md-sse-spinner-ready d-none" aria-hidden="true"></span>
            <span class="visually-hidden" role="status">Loading...</span></button>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade show active" id="bs-sse-selectors-reboot-tab-pane" role="tabpanel" aria-labelledby="bs-sse-selectors-reboot-tab" tabindex="0">
          <div class="d-flex my-3 align-items-center flex-column flex-md-row">
            <p class="fst-italic my-2 me-1 order-last md-sse-selectors-state invisible">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-square text-warning" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg> <span class="md-sse-selectors-state-info">You have changed the selectors list</span>
            </p>
            <div class="d-flex ms-md-auto my-2 me-2 order-md-last">
              <button class="btn btn-primary ms-1 md-sse-select-selectors-btn" type="button">Select
                All</button>
              <button class="btn btn-primary ms-1 md-sse-selectors-btn-reset" disabled type="button">Clear
                selection</button>
            </div>
          </div>
          <div class="my-3 text-danger md-sse-state-info"></div>
          <div id="mdSSESelectorListReboot" class="my-3 md-sse-selector-list"></div>
        </div>
        <div class="tab-pane fade" id="bs-sse-style-reboot-tab-pane" role="tabpanel" aria-labelledby="bs-sse-style-reboot-tab" tabindex="0">
          <h2 class="display-6 my-3">Style</h2>
          <div class="md-sse-extracted-style"></div>
        </div>
      </div>
    </div><!--md-selectors-style-extractor-->


  </section>

</article>
<?php require_once 'footer.php' ?>