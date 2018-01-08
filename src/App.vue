<template>
  <div>
    <header class="header">
      <div class="u__show--m">
        <a href="#" @click.prevent="showOffcanvas = !showOffcanvas" class="header__icon menu">
          MENU
          <svg class="icon"><use xlink:href="#icon-navi"></use></svg>
        </a>
      </div>
      <nav class="header__col u__hide--m" role="navigation" data-vue="Navigation">
        <ul class="nav">
          <li>
            <router-link class="nav__item" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="nav__item" to="/page/about">About</router-link>
          </li>
          <li>
            <router-link class="nav__item" to="/page/products">Products</router-link>
          </li>
          <li>
            <router-link class="nav__item" to="/page/blog">Blog</router-link>
          </li>
        </ul>
      </nav>
      <a href="/" class="header__col header__logo">
        <img src="//a.storyblok.com/f/42016/1096x313/0353bf6654/logo2.png">
      </a>
      <nav class="header__col header__second-navi u__hide--m">
        <ul class="nav">
          <li>
            <a class="nav__item" href="/cart">
              Cart (<span data-vue="Minicart">0</span>)
            </a>
          </li>
        </ul>
      </nav>
      <div class="u__show--m">
        <a href="/cart" class="header__icon">
          <svg class="icon"><use xlink:href="#icon-cart"></use></svg>
        </a>
      </div>
    </header>

    <div data-vue="Errors"></div>

    <main id="main" role="main">
      <router-view/>
    </main>

    <div class="spacer spacer--xlarge"></div>

    <footer class="footer">
      <div class="footer__wrap u__sperator">
        <div class="uk-width-1-2@m newsletter">
          <div class="uk-grid">
            <div class="uk-width-1-3@m">
              <h6>Sign Up for Emails</h6>
              <p>Mostly good stuff, <br>promise.</p>
            </div>
            <div class="uk-width-2-3@m">
              <form id="footer-mailing-list" class="mailing-list u__flex" method="get" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
                <label for="newsletter-input" class="u__vis-hidden">Email</label>
                <input id="newsletter-input" class="mailing-list-email u__flex-input" name="EMAIL" type="email" placeholder="handsome-guy@email.com" value="">
                <button class="button u__flex-col" type="submit" name="subscribe">OK</button>
                <div class="mc-field-group" style="display: none;">
                  <input id="mce-ORIGIN" name="ORIGIN" type="hidden" value="Footer">

                </div>
              </form>
              <p class="form-response"></p>
            </div>
          </div>
        </div>
        <div class="footer__contact">
          <div class="uk-grid">
            <div class="uk-width-1-4@m">
              <div>
                <h3 id="get-to-know-us">Get to Know Us</h3>
                <ul>
                  <li><a href="/page/about">About</a></li>
                  <li><a href="/page/products">Products</a></li>
                  <li><a href="/page/blog">Blog</a></li>
                </ul>
              </div>
            </div>
            <div class="uk-width-1-4@m">
              <div>
                <h3 id="get-in-touch">Get In Touch</h3>
                <p>E: noreply@storyblok.com<br>
                T: +43 664 03333333</p>
              </div>
            </div>
            <div class="uk-width-1-4@m">
              <div>
                <h3 id="showroom">Showroom</h3>
                <p>Tabakfabrik<br>
                4020 Linz</p>
              </div>
            </div>

            <div class="uk-width-1-4@m">
              <div>
                <ul class="footer__icons">
                  <li>
                    <a href="https://www.facebook.com/storyblok" title="Follow us on Facebook" target="_blank" rel="noopener" class="footer__social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="246.1 65.9 48 48">
                        <title>Follow us on Facebook</title>
                        <path d="M263.8 75.5V82h-4.7v7.9h4.7v23.5h9.7V89.9h6.5s.6-3.8.9-7.9h-7.4v-5.4c0-.8 1.1-1.9 2.1-1.9h5.3v-8.2h-7.2c-10.1-.1-9.9 7.9-9.9 9z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/storyblok" title="Follow us on Twitter" target="_blank" rel="noopener" class="footer__social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-135 67 48 48">
                        <title>Follow us on Twitter</title>
                        <path d="M-87 75.7c-1.8.8-3.7 1.3-5.7 1.6 2-1.2 3.6-3.2 4.3-5.6-1.9 1.2-4 2-6.3 2.4-1.8-2-4.4-3.2-7.2-3.2-5.4 0-9.8 4.5-9.8 10.1 0 .8.1 1.6.3 2.3-8.2-.4-15.4-4.4-20.3-10.6-.8 1.5-1.3 3.2-1.3 5.1 0 3.5 1.7 6.6 4.4 8.4-1.6 0-3.1-.5-4.5-1.3v.1c0 4.9 3.4 9 7.9 9.9-.8.2-1.7.4-2.6.4-.6 0-1.3-.1-1.9-.2 1.3 4 4.9 6.9 9.2 7-3.4 2.7-7.6 4.3-12.2 4.3-.8 0-1.6 0-2.3-.1 4.4 2.9 9.5 4.5 15.1 4.5 18.1 0 28-15.4 28-28.7v-1.3c1.9-1.3 3.6-3 4.9-5.1"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/storyblok/" title="Follow us on Instagram" target="_blank" rel="noopener" class="footer__social-icon">
                      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <title>Follow us on Instagram</title>
                        <path d="M24 0c-6.518 0-7.335.028-9.895.144-2.555.117-4.3.523-5.826 1.116-1.578.613-2.917 1.434-4.25 2.768C2.693 5.362 1.872 6.701 1.26 8.28.667 9.806.26 11.55.144 14.105.028 16.665 0 17.482 0 24s.028 7.335.144 9.895c.117 2.555.523 4.3 1.116 5.826.613 1.578 1.434 2.917 2.768 4.25 1.334 1.335 2.673 2.156 4.251 2.77 1.527.592 3.271.998 5.826 1.115 2.56.116 3.377.144 9.895.144s7.335-.028 9.895-.144c2.555-.117 4.3-.523 5.826-1.116 1.578-.613 2.917-1.434 4.25-2.768 1.335-1.334 2.156-2.673 2.77-4.251.592-1.527.998-3.271 1.115-5.826.116-2.56.144-3.377.144-9.895s-.028-7.335-.144-9.895c-.117-2.555-.523-4.3-1.116-5.826-.613-1.578-1.434-2.917-2.768-4.25-1.334-1.335-2.673-2.156-4.251-2.769-1.527-.593-3.271-1-5.826-1.116C31.335.028 30.518 0 24 0zm0 4.324c6.408 0 7.167.025 9.698.14 2.34.107 3.61.498 4.457.827 1.12.435 1.92.955 2.759 1.795.84.84 1.36 1.64 1.795 2.76.33.845.72 2.116.827 4.456.115 2.53.14 3.29.14 9.698s-.025 7.167-.14 9.698c-.107 2.34-.498 3.61-.827 4.457-.435 1.12-.955 1.92-1.795 2.76-.84.839-1.64 1.359-2.76 1.794-.845.33-2.116.72-4.456.827-2.53.115-3.29.14-9.698.14-6.409 0-7.168-.025-9.698-.14-2.34-.107-3.61-.498-4.457-.827-1.12-.435-1.92-.955-2.759-1.795-.84-.84-1.36-1.64-1.795-2.76-.33-.845-.72-2.116-.827-4.456-.115-2.53-.14-3.29-.14-9.698s.025-7.167.14-9.698c.107-2.34.498-3.61.827-4.457.435-1.12.955-1.92 1.795-2.76.84-.839 1.64-1.359 2.76-1.794.845-.33 2.116-.72 4.456-.827 2.53-.115 3.29-.14 9.698-.14zm0 7.352c-6.807 0-12.324 5.517-12.324 12.324 0 6.807 5.517 12.324 12.324 12.324 6.807 0 12.324-5.517 12.324-12.324 0-6.807-5.517-12.324-12.324-12.324zM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm15.691-20.811a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.76 0z" fill-rule="evenodd"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__nav">
        <div class="footer__wrap">
          <div class="uk-grid">
            <div class="uk-width-1-4@m">
              <div>
                <h3 id="collections">Collections</h3>
                <ul>
                  <li>Winter collection</li>
                  <li>Summer collection</li>
                  <li>60s</li>
                  <li>70s</li>
                  <li>Vintage</li>
                </ul>
              </div>
            </div>
            <div class="uk-width-1-4@m">
              <div>
                <h3 id="shop-by-color">Shop by color</h3>
                <ul>
                  <li>Blue</li>
                  <li>Red</li>
                  <li>White</li>
                </ul>
              </div>
            </div>
            <div class="uk-width-1-4@m">
              <div>
                <h3 id="bestsellers">Bestsellers</h3>
                <ul>
                  <li>Strawberry</li>
                  <li>Bomb</li>
                  <li>Pineapple</li>
                </ul>
              </div>
            </div>
            <div class="uk-width-1-4@m">
              <div>
                <h3>Imprint</h3>
                <p>Coming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <offcanvas v-model="showOffcanvas" :width="300" :duration=".5" effect="ease-in-out" @sidebarWasClosed="showOffcanvas = $event">
      <nav class="sidebar">
        <ul class="u__unstyled-li">
          <li>
            <li>
              <a class="sidebar__item" href="/">Home</a>
            </li>
            <li>
              <a class="sidebar__item" href="/page/about">About</a>
            </li>
            <li>
              <a class="sidebar__item" href="/page/products">Products</a>
            </li>
            <li>
              <a class="sidebar__item" href="/page/blog">Blog</a>
            </li>
          </li>
        </ul>
      </nav>
    </offcanvas>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      showOffcanvas: false
    }
  }
}
</script>

<style lang="scss">
@import './scss/styles.scss';
</style>
