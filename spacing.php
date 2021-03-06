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
                  <li class="nav-item"><a href="#spacing-margin" class="nav-link utilities-spacing-reset">Margin</a></li>
                  <li class="nav-item"><a href="#spacing-margin-horizontal" class="nav-link utilities-spacing-reset">Horizontal margin</a></li>
                  <li class="nav-item"><a href="#spacing-margin-vertical" class="nav-link utilities-spacing-reset">Horizontal margin</a></li>
                  <li class="nav-item"><a href="#spacing-padding" class="nav-link utilities-spacing-reset">Padding</a></li>
                  <li class="nav-item"><a href="#spacing-padding-horizontal" class="nav-link utilities-spacing-reset">Horizontal padding</a></li>
                  <li class="nav-item"><a href="#spacing-padding-vertical" class="nav-link utilities-spacing-reset">Vertical padding</a></li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="col-sm-8 ">
        <header id="top" class="row">
          <div class="col-sm">
            <h1 class="h1">Spacing</h1>
          </div>
          <div class="col-sm text-right align-self-end"><a class="btn btn-primary" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/utilities/spacing/" target="_blank">Bootstrap Spacing</a></div>
        </header>

        <section id="utilities-spacing">
          <div class="btn-group my-1" role="group" aria-label="Buttons showing classes for margin and pading">
            <button id="us-margin" class="us-selected-classes btn btn-danger">classes for margin</button>
            <button id="us-padding" class="us-selected-classes btn btn-danger">classes for padding</button>
          </div>
          <div class="btn-group my-1" role="group" aria-label="Buttons showing spacing classes on top, right, bottom, left">
            <button id="us-top" class="us-selected-classes btn btn-info">classes for top margin and padding</button>
            <button id="us-right" class="us-selected-classes btn btn-info">classes for right margin and padding</button>
            <button id="us-bottom" class="us-selected-classes btn btn-info">classes for bottom margin and padding</button>
            <button id="us-left" class="us-selected-classes btn btn-info">classes for left margin and padding</button>
          </div>
          <div class="btn-group my-1" role="group" aria-label="Buttons showing spacing vertical and horizontal">
            <button id="us-horizontal" class="us-selected-classes btn btn-success">classes for horizontal's spacings</button>
            <button id="us-vertical" class="us-selected-classes btn btn-success">classes for vertical's spacings</button>
          </div>
          <div class="btn-group my-1" role="group">
            <button id="us-spacing-0" class="us-selected-classes btn btn-warning">$spacer * 0</button>
            <button id="us-spacing-1" class="us-selected-classes btn btn-warning">$spacer * .25</button>
            <button id="us-spacing-2" class="us-selected-classes btn btn-warning">$spacer * .5</button>
            <button id="us-spacing-3" class="us-selected-classes btn btn-warning">$spacer</button>
            <button id="us-spacing-4" class="us-selected-classes btn btn-warning">$spacer * 1.5</button>
            <button id="us-spacing-5" class="us-selected-classes btn btn-warning">$spacer * 3</button>
          </div>

          <h3 id="spacing-margin" class="h3 mt-3 mb-2 us-title">Classes for margin: top, right, bottom, left</h3>

          <ul  class="list-unstyled">
            <li id="m_t-0" class="my-0 item-us">
              <h3 class="h5 mb-3">mt-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_t-1" class="my-0 item-us">
              <h3 class="h5 mb-3">mt-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_t-2" class="my-0 item-us">
              <h3 class="h5 mb-3">mt-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_t-3" class="my-0 item-us">
              <h3 class="h5 mb-3">mt-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_t-4" class="my-0 item-us">
              <h3 class="h5 mb-3">mt-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_t-5" class="my-0 item-us">
              <h3 class="h5 mb-3">mt-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <ul  class="list-unstyled">
            <li id="m_r-0" class="my-0 item-us">
              <h3 class="h5 mb-3">mr-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_r-1" class="my-0 item-us">
              <h3 class="h5 mb-3">mr-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_r-2" class="my-0 item-us">
              <h3 class="h5 mb-3">mr-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_r-3" class="my-0 item-us">
              <h3 class="h5 mb-3">mr-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_r-4" class="my-0 item-us">
              <h3 class="h5 mb-3">mr-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_r-5" class="my-0 item-us">
              <h3 class="h5 mb-3">mr-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <ul  class="list-unstyled">
            <li id="m_b-0" class="my-0 item-us">
              <h3 class="h5 mb-3">mb-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_b-1" class="my-0 item-us">
              <h3 class="h5 mb-3">mb-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_b-2" class="my-0 item-us">
              <h3 class="h5 mb-3">mb-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_b-3" class="my-0 item-us">
              <h3 class="h5 mb-3">mb-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_b-4" class="my-0 item-us">
              <h3 class="h5 mb-3">mb-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_b-5" class="my-0 item-us">
              <h3 class="h5 mb-3">mb-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <ul  class="list-unstyled">
            <li id="m_l-0" class="my-0 item-us">
              <h3 class="h5 mb-3">ml-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_l-1" class="my-0 item-us">
              <h3 class="h5 mb-3">ml-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_l-2" class="my-0 item-us">
              <h3 class="h5 mb-3">ml-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_l-3" class="my-0 item-us">
              <h3 class="h5 mb-3">ml-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_l-4" class="my-0 item-us">
              <h3 class="h5 mb-3">ml-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_l-5" class="my-0 item-us">
              <h3 class="h5 mb-3">ml-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>


          <h3 id="spacing-margin-horizontal" class="h3 mt-3 mb-2  us-title">Classes for horizontal margin</h3>
          <ul  class="list-unstyled">
            <li id="m_x-0" class="my-0 item-us">
              <h3 class="h5 mb-3">mx-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_x-1" class="my-0 item-us">
              <h3 class="h5 mb-3">mx-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_x-2" class="my-0 item-us">
              <h3 class="h5 mb-3">mx-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_x-3" class="my-0 item-us">
              <h3 class="h5 mb-3">mx-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_x-4" class="my-0 item-us">
              <h3 class="h5 mb-3">mx-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_x-5" class="my-0 item-us">
              <h3 class="h5 mb-3">mx-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <h3 id="spacing-margin-vertical" class="h3 mt-3 mb-2  us-title">Classes for vertical margin</h3>
          <ul  class="list-unstyled">
            <li id="m_y-0" class="my-0 item-us">
              <h3 class="h5 mb-3">my-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_y-1" class="my-0 item-us">
              <h3 class="h5 mb-3">my-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_y-2" class="my-0 item-us">
              <h3 class="h5 mb-3">my-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_y-3" class="my-0 item-us">
              <h3 class="h5 mb-3">my-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_y-4" class="my-0 item-us">
              <h3 class="h5 mb-3">my-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="m_y-5" class="my-0 item-us">
              <h3 class="h5 mb-3">my-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <!--paddings-->
          <h3 id="spacing-padding" class="h3 mt-3 mb-2  us-title">Classes for padding: top, right, bottom, left</h3>
          <ul  class="list-unstyled">
            <li id="p_t-0" class="my-0 item-us">
              <h3 class="h5 mb-3">pt-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_t-1" class="my-0 item-us">
              <h3 class="h5 mb-3">pt-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_t-2" class="my-0 item-us">
              <h3 class="h5 mb-3">pt-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_t-3" class="my-0 item-us">
              <h3 class="h5 mb-3">pt-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_t-4" class="my-0 item-us">
              <h3 class="h5 mb-3">pt-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_t-5" class="my-0 item-us">
              <h3 class="h5 mb-3">pt-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <ul  class="list-unstyled">
            <li id="p_r-0" class="my-0 item-us">
              <h3 class="h5 mb-3">pr-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_r-1" class="my-0 item-us">
              <h3 class="h5 mb-3">pr-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_r-2" class="my-0 item-us">
              <h3 class="h5 mb-3">pr-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_r-3" class="my-0 item-us">
              <h3 class="h5 mb-3">pr-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_r-4" class="my-0 item-us">
              <h3 class="h5 mb-3">pr-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_r-5" class="my-0 item-us">
              <h3 class="h5 mb-3">pr-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <ul  class="list-unstyled">
            <li id="p_b-0" class="my-0 item-us">
              <h3 class="h5 mb-3">pb-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_b-1" class="my-0 item-us">
              <h3 class="h5 mb-3">pb-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_b-2" class="my-0 item-us">
              <h3 class="h5 mb-3">pb-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_b-3" class="my-0 item-us">
              <h3 class="h5 mb-3">pb-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_b-4" class="my-0 item-us">
              <h3 class="h5 mb-3">pb-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_b-5" class="my-0 item-us">
              <h3 class="h5 mb-3">pb-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <ul  class="list-unstyled">
            <li id="p_l-0" class="my-0 item-us">
              <h3 class="h5 mb-3">pl-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_l-1" class="my-0 item-us">
              <h3 class="h5 mb-3">pl-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_l-2" class="my-0 item-us">
              <h3 class="h5 mb-3">pl-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_l-3" class="my-0 item-us">
              <h3 class="h5 mb-3">pl-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_l-4" class="my-0 item-us">
              <h3 class="h5 mb-3">pl-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_l-5" class="my-0 item-us">
              <h3 class="h5 mb-3">pl-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <h3 id="spacing-padding-horizontal" class="h3 mt-3 mb-2  us-title">Classes for horizontal padding</h3>
          <ul  class="list-unstyled">
            <li id="p_x-0" class="my-0 item-us">
              <h3 class="h5 mb-3">px-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_x-1" class="my-0 item-us">
              <h3 class="h5 mb-3">px-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_x-2" class="my-0 item-us">
              <h3 class="h5 mb-3">px-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_x-3" class="my-0 item-us">
              <h3 class="h5 mb-3">px-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_x-4" class="my-0 item-us">
              <h3 class="h5 mb-3">px-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_x-5" class="my-0 item-us">
              <h3 class="h5 mb-3">px-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>

          <h3 id="spacing-padding-vertical" class="h3 mt-3 mb-2  us-title">Classes for vertical paddings</h3>
          <ul  class="list-unstyled">
            <li id="p_y-0" class="my-0 item-us">
              <h3 class="h5 mb-3">py-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_y-1" class="my-0 item-us">
              <h3 class="h5 mb-3">py-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_y-2" class="my-0 item-us">
              <h3 class="h5 mb-3">py-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_y-3" class="my-0 item-us">
              <h3 class="h5 mb-3">py-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_y-4" class="my-0 item-us">
              <h3 class="h5 mb-3">py-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_y-5" class="my-0 item-us">
              <h3 class="h5 mb-3">py-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul>


          <!-- <h3 id="spacing-0" class="h3 mt-3 mb-2  us-title">Classes for spacing with size 0</h3>
          <ul  class="list-unstyled">
            <li id="p_t-0" class="my-0 item-us">
              <h3 class="h5 mb-3">py-0</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_r-0" class="my-0 item-us">
              <h3 class="h5 mb-3">py-1</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_b-r" class="my-0 item-us">
              <h3 class="h5 mb-3">py-2</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_b-0" class="my-0 item-us">
              <h3 class="h5 mb-3">py-3</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_l-0" class="my-0 item-us">
              <h3 class="h5 mb-3">py-4</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
            <li id="p_y-5" class="my-0 item-us">
              <h3 class="h5 mb-3">py-5</h3>
              <pre><code h3 class="output-js"></code></pre>
            </li>
          </ul> -->
          
          
         
        </section>
        


      </div>
    </div>
  </div>
<?php require_once 'footer.php' ?>