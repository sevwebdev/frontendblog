<template>
    <section class="accessibility">
        <div class="container">

            <article class="wrapper">
                <h2 class="title">What is accessibility ?</h2>
                <p>Web accessibility means that people with disabilities can use the Web.</p>
                <p>More specifically, it means that people with disabilities can perceive,
                    understand, navigate, and interact with the Web, and that they can contribute to the Web.</p>
                <p>The UN Convention on the Rights of Persons with
                    Disabilities recognizes access to information and communications technologies, including the Web, as a basic human right.</p>
                <ul class="actions">
                    <li><a href="https://www.w3.org/WAI/" class="button scrolly">Learn more</a></li>
                </ul>
            </article>

            <article id="core" class="wrapper">
                <h2 class="title" id="#principles">Core Principles</h2>
                <p>4 ACCESSIBILITY PRINCIPLES</p>
                <ul>
                    <li><strong>Perceivable information and user interface.</strong>
                        (providing text alternative for images, providing captions or
                        transcripts for video and audio, and providing sufficient color contrast
                        between text and background)
                    </li>
                    <li><strong>Operable user interface and navigation.</strong>
                        (enabling navigation using only a keyboard, providing meaningful
                        hyperlinks, and allowing enough time for users to complete a task)
                    </li>
                    <li><strong>Understandable information and user interface.</strong>
                        (making content readable, providing predictable functionality, and
                        helping users avoid and correct mistakes)
                    </li>
                    <li><strong>Robust content and reliable interpretation.</strong>
                        (maximizing compatibility with current and future tools (web browsers, assistive technologies, etc.</li>
                </ul>
                <ul class="actions">
                    <li><a href="generic.html" class="button">Learn more</a></li>
                </ul>
            </article>

            <article id="audit" class="wrapper">
                <div class="inner">
                    <h2 class="title">Accessibility in practice</h2>
                    <div class="features">
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#1">Declare the language</a></h3>
                        </section>
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#2">Alternative text for images</a></h3>
                        </section>
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#3">Colour Contrast</a></h3>
                        </section>
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#4">DOM Structrure & semantics</a></h3>
                        </section>
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#5">Header Structure</a></h3>
                        </section>
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#6">Adjustable fontsize</a></h3>
                        </section>
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#7">Tables</a></h3>
                        </section>
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#8">Forms</a></h3>
                        </section>
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#9">Keyboard Accessible</a></h3>
                        </section>
                        <section>
                            <span class="icon major fa-code"></span>
                            <h3 class="title"><a href="#10">Separation HTML|CSS|JS</a></h3>
                        </section>
                    </div>
                    <ul class="actions">
                        <li><a href="generic.html" class="button">Learn more</a></li>
                    </ul>
                </div>

                <article class="inner">

                    <div class="language">
                        <h3 class="title" id="1">Declare the language</h3>
                        <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-meaning-doc-lang-id">See WCAG 3.1.1</a>
                        <p>Immediately following the doctype declaration should be the html tag with attributes declaring the language of the document.</p>
                        <p>Ex :</p>
                        <ul>
                        <li>HTML: <code>&lt;html lang="fr"&gt; &lt;/html&gt;</code></li>
                        <li>XHTML: <code>&lt;html lang="fr" xml:lang="fr" xmlns="http://www.w3.org/1999/xhtml"&gt; &lt;/html&gt; </code></li>
                        </ul>
                        Language declaration is important for accessibility because it allows braille translation software
                        to substitute control codes for accented characters.
                        If you are just indicating a language change on a phrase or word use a &lt;article&gt; or &lt;div&gt; tag with the lang attribute. <br />
          			        Ex : <code>&lt;span lang="es" xml:lang="es"&gt; Espanol &lt;span&gt; </code>
                    </div>

                    <div class="alt">
                      <h3 class="title" id="2">Alternative text for images</h3>
                      <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-meaning-doc-lang-id">See WCAG 2.1</a>
                      <br/>
                      <p>All <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">img</a> tags require an alt attribute, without exception.
                        <br>
                        If the image is important, because it is part of an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">a</a> tag,
                        for example, it has to have meaningful text.
                        It also implies:
                      </p>
                      <ul>
                        <li>SVG graphics</li>
                        <li>the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture">picture</a> element</li>
                      </ul>
                        <p>Also; avoid <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-meaning-doc-lang-id">images of text</a> as much as possible</p>
                      <p>Describe the image briefly, but avoid the phrase “image of” or “graphic of”.</p>
                    </div>

                    <div class="colour-contrast">
                      <h3 class="title" id="3">Colour Contrast</h3>
                      <a href="https://squizlabs.github.io/HTML_CodeSniffer/Standards/WCAG2/1_4_1">See WCAG 1.4.1</a>
                      <p>The visual presentation of text and images of text has a contrast ratio of at least 4.5:1,
                        except for the following:</p>
                      <ul>
                        <li><strong>Large Text:</strong> Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;</li>
                        <li> <strong>Incidental:</strong> Text or images of text that are part of an inactive user interface component,
                          that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
                        </li>
                        <li><strong>Logotypes:</strong> Text that is part of a logo or brand name has no minimum contrast requirement.</li>
                      </ul>
                     <p> Low contrast ratios lead to bad readability in bright light situations and for the aging or low-vision users.
                      Even if you’re not auditing for WCAG compliance, adhering to this rule of thumb is still a good idea for your own eyes as well as everyone else’s.
                        </p>
                    </div>

                    <div class="dom-structure">
                      <h3 class="title" id="4">DOM Structure & semantics - Use semantics !</h3>
                      <p>Most web content that doesn’t need special widgets will most probably be over 90% accessible by just using proper semantics.
                        Only if you need to use widgets that are not provided by HTML, will you really have to dig deeper and dive into standards like
                        <a href="https://www.marcozehe.de/2014/03/27/what-is-wai-aria-what-does-it-do-for-me-and-what-not/">WAI-ARIA</a>.
                        Give structure & meaning to your content using HTML5 markups.
                        <code>&lt;section&gt;&lt;/section&gt;, &lt;article&gt;&lt;/article&gt;, &lt;aside&gt;&lt;/aside&gt;, &lt;main&gt;&lt;/main&gt;, &lt;time&gt;&lt;/time&gt;, &lt;address&gt;&lt;/address&gt;</code>...
                        careful; elements hidden with a display:none or visibility:hidden are none included in the accessibility tree !
                      </p>
                    </div>

                    <div class="headers">
                      <h3 class="title" id="5">Headers Structure</h3>
                      <p>There is a six level heading structure, from h1 to h6, to denote a main heading, secondary sub headings,
                        and sub headings to those for sub sections. You need to use them correctly to give your document a logical,
                        easy to follow structure.The h1 through h6 elements are unambiguous in telling screen readers, search engines
                        and other technologies what the structure of your document is.DON'T USE A DIV WITH A CLASS OF HEADING
                        1 OR H1, screen readers, search engines, and other technologies won't know what to do with these.</p>
                    </div>

                    <div class="fontsize">
                      <h3 class="title" id="6">Adjustable fontsize</h3>
                      <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#resize-text">See WCAG 1.4.4</a>
                      <p>Except for <a href="https://www.w3.org/TR/WCAG21/#dfn-captions">captions</a> and
                        <a href="https://www.w3.org/TR/WCAG21/#dfn-images-of-text">images of text</a>,
                        text can be resized without <a href="https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies">assistive technology</a>
                        up to 200 percent without loss of content or functionality.</p>
                    </div>

                    <div class="tables">
                      <h3 class="title" id="7">Tables</h3>
                      <p>First, it is about time to stop using tables for layout ! I still see it at work and
                      it drives me nuts. We have wonderful tools today, such as flexbox and css grids, so
                      why ?The table element is a very useful element for creating data representations.
                      Product detail listings, price lists etc. Also, shopping carts with quantities, sub
                      totals and totals, and many other structured data collections can, and should, be put
                      into data tables.But you need to think about the people with disabilities, especially
                      for complex tables.So here's what you need to do - Use scope="row" or scope="column"
                      in your th- Add a caption element to give the table a proper heading or summary-
                      If a table gets too complex or has multiple sections that don’t necessarily have
                      to be in one table, split them up into several data tables.</p>
                    </div>

                      <div class="forms">
                        <h3 class="title" id="8">Forms & Labels</h3>
                        <p>Most  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">inputs</a> elements,
                        as well as the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select">select</a>
                        and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea">textarea</a> elements, need an associated
                        label element that states the purpose.The one exception are those that produce a button,
                        like the types of button, reset, and submit do. But every other, be it text, checkbox,
                        password, radio (button), search etc. require a label element to be present.</p>
                    </div>

                    <div class="keybord-accessible">
                      <h3 class="title" id="9">Keyboard Accessible</h3>
                      <p><a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard-accessible">See WCAG 2.1.1</a>
                      All functionality of the content is operable through a keyboard interface without requiring
                      specific timings for individual keystrokes, except where the underlying function requires input
                      that depends on the path of the user's movement and not just the endpoints.
                      This is the strict minimum (level A).</p>
                    </div>

                    <div class="code-separation">
                      <h3 class="title" id="10">Separation HTML|CSS|JS</h3>
                      <p>HTML defines your content structure. It is what screen readers and other assistive technologies
                      use to represent your content to their users.
                      <br/>
                      CSS defines how that content looks visually. Its
                      positioning, indentation, padding, margins usually have no bearing on what screen readers render
                      to the user, with one exception: If display: none; or visibility: hidden; styles are used, that
                      content will also not be available to assistive technologies. Put CSS in their own files, don’t
                      embed it in the HTML.
                      <br/>
                      JavaScript adds dynamic functionality. Its output must be proper HTML and CSS, too, if it manipulates the DOM.
                      JavaScript dynamics in itself are no problem to accessibility, only some specific behaviors can be,
                      like losing keyboard focus.Put JS modules in their files and don’t embed JS code in your HTML, either.
                      The clearer you separate the three, the more maintainable your code will be. </p>
                    </div>
                    </article>
            </article>

            <article id="tools" class="wrapper">
                <div class="inner">
                    <h2 class="title">Accessibility Tools</h2>
                    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
                    <div class="split style1">
                        <section>
                            <div class="tools">
                                <h3 class="title" id="10">Accessibility Tools</h3>
                                <ul>
                                    <li>Accessibility inspector in Chrome (F12 then  you click audits and can run an accessibility test on your website.)</li>
                                    <li>Chrome Extensions:
                                        <ul>
                                            <li><a href=https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia?hl=en-GB">I want to see like the colour blind</a></li>
                                            <li><a href="https://chrome.google.com/webstore/detail/color-enhancer/ipkjmjaledkapilfdigkgfmpekpfnkih?hl=en">Colour Enhancer</a></li>
                                        </ul>
                                    </li>
                                    <li>Evaluation Tools:
                                        <ul>
                                            <li><a href="http://wave.webaim.org">http://wave.webaim.org</a></li>
                                            <li><a href="http://www.checkmycolours.com/">http://www.checkmycolours.com/</a></li>
                                            <li><a href="https://webaim.org/resources/contrastchecker/">https://webaim.org/resources/contrastchecker/</a></li>
                                            <li><a href="screen reader simulator">screen reader simulator</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div class="easy-checks">
                                <h3 class="title" id="10">Easy Checks</h3>
                                <ul>
                                    <li>Test the keyboard navigation</li>
                                    <li>Test your website on a <a href="https://webaim.org/simulations/screenreader-sim.html">Screen Reader Simulator</a></li>
                                    <li>Audit your website on Chrome inspector (audits) or <a href="http://wave.webaim.org/">here</a></li>
                                </ul>
                            </div>
                            <div class="resources">
                                <h3  class="title" id="10">Accessibility Resources</h3>
                                <ul>
                                    <li><a href="https://www.w3.org/TR/WCAG21/">WCAG GUidelines</a> (the Web Content Accessibity Guidelines by the W3C)</li>
                                    <li><a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#resize-text">How to meet WCAG 2 ?</a></li>
                                    <li>In french : <a href="https://references.modernisation.gouv.fr/rgaa-accessibilite/">Référentiel RGAA</a></li>
                                    <li>You should watch <a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g">all A11ycasts with Rob Dodson videos</a> on
                                        Youtube !- Take a Google Free Course on accessibility </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

        </div>
    </section>
</template>

<script>
  export default {
    name: 'Accessibility',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h2 {
        margin-bottom: 2em;
    }
    .container {
        padding: 5em 0 10em;
        & > div:not(.box) {
            margin-right: 6em;
        }
    }
    .wrapper {
        margin: 6em 0;

    }
    .title {
        text-align: left;
    }
</style>
