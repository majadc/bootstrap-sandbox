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
                  <li class="nav-item"><a href="#heading" class="nav-link">Headings</a></li>
                  <li class="nav-item"><a href="#display" class="nav-link">Display</a></li>
                  <li class="nav-item"><a href="#paragraph" class="nav-link">Paragraphs</a></li>
                  <li class="nav-item"><a href="#inline-elements" class="nav-link">Inline elements</a></li>
                  <li class="nav-item"><a href="#abbreviation" class="nav-link">Abbrevations</a></li>
                  <li class="nav-item"><a href="#blockquote" class="nav-link">Blockquotes</a></li>
                  <li class="nav-item"><a href="#list" class="nav-link">Lists</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="col-sm-8 ">
        <header id="top" class="row">
          <div class="col-sm">
            <h1 class="h1">Typography</h1>pp
          </div>
          <div class="col-sm text-right align-self-end"><a class="btn btn-primary" href="https://getbootstrap.com/docs/<?php echo $MAJADC_BOOTSTRAP_VERSION; ?>/content/typography/" target="_blank">Bootstrap Typography</a></div>
        </header>
      
      
        <section class="my-5">
          <h2 id="heading" class="h2 mb-3">Headings</h2>
<pre class="mt-3"><code>.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}</code></pre>
          <h1 class="h1">Header <code>h1</code> class = h1</h1>
          <pre><code>.h1 { font-size: 2.5rem; }</code></pre>
          <h2 class="h2">Header <code>h2</code> class = h2</h2>
          <pre><code>.h2 { font-size: 2rem; }</code></pre>
          <h3 class="h3">Header <code>h3</code> class = h3</h3>
          <pre><code>.h3 { font-size: 1.75rem; }</code></pre>
          <h4 class="h4">Header <code>h4</code> class = h4</h4>
          <pre><code>.h4 { font-size: 1.5rem; }</code></pre>
          <h5 class="h5">Header <code>h5</code> class = h5</h5>
          <pre><code>.h5 { font-size: 1.25rem; }</code></pre>
          <h6 class="h6">Header <code>h6</code> class = h6</h6>
          <pre class="code">.h6 { font-size: 1rem; }</pre>
        </section>

        <section class="my-5">
          <h2 id="display" class="h2 mb-3">Display heading</h2>
          <h3 class="display-1">Display 1 class = display-1</h3>
          <pre><code>.display-1 { font-size: 6rem }</code></pre>
          <h3 class="display-2">Display 2 class = display-2</h3>
          <pre><code>font-size: 5.5rem;</code></pre>
          <h3 class="display-3">Display 3 class = display-3</h3>
          <pre><code>font-size: 4.5rem;</code></pre>
          <h3 class="display-4">Display 4 class = display-4</h3>
          <pre><code>font-size: 3.5rem;</code></pre>
        </section>

        <section class="my-5">
          <h2 id="paragraph" class="mb-3">Paragraphs</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            dolorum ut voluptates possimus necessitatibus ipsa? Facilis,
            delectus sit vero dolor saepe laborum doloribus ut error asperiores
            animi quidem incidunt quos.
          </p>
<pre class="mt-3"><code> p {
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 1rem;
}</code></pre>
          <hr />
          <p class="lead">
            <code>class = lead</code><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            delectus facilis eaque in, debitis mollitia qui blanditiis, sequi
            veniam quod corrupti magni rerum? Expedita cumque at unde eos quasi
            animi.
          </p>
<pre><code>.lead {
  font-size: 1.25rem;
  font-weight: 300;
}</code></pre>
        </section>
        

       

        <section class="my-5" id="inline-elements">
          <h2 class="h2 mb-3">Inline text elements</h2>
          <p>You can use the <code>mark</code> tag to <mark>highlight</mark> text.</p>
<pre class="mt-3"><code>.mark, mark {
  padding: .2em;
  background-color: #fcf8e3;
}</code></pre>
          <p><code>del </code><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><code>s </code><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><code>ins </code><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><code>u </code><u>This line of text will render as underlined</u></p>
          <p><code>small </code><small>This line of text is meant to be treated as fine print.</small></p>
<pre class="mt-3"><code>.small, small {
  font-size: 80%;
  font-weight: 400;
}</code></pre>
         <p><code>strong </code><strong>This line rendered as bold text.</strong></p>
<pre class="mt-3"><code>b, strong {
  font-weight: bolder;
}</code></pre>
          <p><code>em </code><em>This line rendered as italicized text.</em></p>      
        </section>

        <section class="my-5">
          <h2 id="abbreviation" class="h2 mb-3">Abbreviations</h2>
          <p><abbr title="attribute">attr</abbr></p>
<pre class="mt-3"><code>&lt;abbr title="attribute"&gt;attr&lt;/attr&gt;</code></pre>
<pre class="mt-3"><code>abbr[data-original-title],
abbr[title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}</code></pre>
          <hr/>
          <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
<pre><code>&lt;abbr title="HyperText Markup Language" class="initialism"&gt;
  HTML
&lt;/abbr&gt;</code></pre>
<pre class="mt-3"><code>.initialism {
  font-size: 90%;
  text-transform: uppercase;
}</code></pre>
        </section>
        
        <section class="my-5">
            <h2 id="blockquote" class="h2 mb-3">Blockquotes</h2>
<pre  class="mt-3"><code>&lt;blockquote class="blockquote"&gt;
  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
&lt;/blockquote&gt;</code></pre>
          <blockquote class="blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </blockquote>
<pre class="mt-3"><code>.blockquote {
  margin: 0 0 1rem;
  font-size: 1.25rem;
}</code></pre>

          <h2 class="h2 mb-3">Blockquote with footer</h2>
          <blockquote class="blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
<pre class="mt-3"><code>&lt;blockquote class="blockquote"&gt;
  &lt;p class="mb-0"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
  &lt;footer class="blockquote-footer"&gt;
    Someone famous in &lt;cite title="Source Title"&gt;Source Title&lt;/cite&gt;
  &lt;/footer&gt;
&lt;/blockquote&gt;</code></pre>
<pre class="mt-3"><code>.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "\2014\00A0";
}</code></pre>        
        </section>

        <section class="my-5">
          <h2 id="list" class="h2 mb-3">Lists</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Eget porttitor lorem</li>
          </ul>
<pre class="mt-3"><code>dl, ol, ul {
  margin-top: 0;
  margin-bottom: 1rem;
}</code></pre>
          <h3 class="h3 mb-3">List unstyled</h2>
          <pre class="mt-3"><code>&lt;ul class="list-unstyled"&gt;&lt;/ul&gt;</code></pre>
          <ul class="list-unstyled">
            <li>This list</li>
            <li>is</li>
            <li>unstyled list (level 1)</li>
            <li>It has only</li>
            <li>margin bottom</li>
            <li>Next list is styled
              <ul>
                <li>If you want it</li>
                <li>also unstyled.</li>
                <li>Add class list-unstyled</li>
                <li>to ul element in this level.</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Eget porttitor lorem</li>
          </ul>

          <h3 class="h3 mb-3 mt-5">List inline</h3>
          <ul class="list-inline">
            <li class="list-inline-item">Inline item</li>
            <li class="list-inline-item">Inline item</li>
          </ul>
<pre class="mt-3"><code>&lt;ul class="list-inline"&gt;&lt;/ul&gt;
  &lt;li class="list-inline-item"&gt;Inline item&lt;li&gt;
  &lt;li class="list-inline-item"&gt;Inline item&lt;li&gt;
&lt;/ul&gt;
</code></pre>
<pre  class="mt-3"><code>.list-inline-item {
  display: inline-block;
}</code></pre>      
        </section>

      </div>
    </div>
  </div>

<?php require_once 'footer.php' ?>