// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import Offcanvas from '@/components/Offcanvas'
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'
import Grid from '@/components/Grid'
import Slide from '@/components/Slide'
import BlogArticle from '@/components/BlogArticle'
import BlogOverview from '@/components/BlogOverview'
import ProductList from '@/components/ProductList'
import ImageBlock from '@/components/ImageBlock'
import TextBlock from '@/components/TextBlock'
import Quote from '@/components/Quote'

Vue.component('offcanvas', Offcanvas)
Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('slide', Slide)
Vue.component('blog-article', BlogArticle)
Vue.component('blog-overview', BlogOverview)
Vue.component('product-list', ProductList)
Vue.component('image-block', ImageBlock)
Vue.component('text-block', TextBlock)
Vue.component('quote', Quote)

Vue.filter('url', (value) => {
  if (!value) {
    return ''
  }
  if (value.linktype === 'story') {
    return '/' + value.cached_url
  } else {
    return '/' + value.url
  }
})

Vue.filter('truncate', (value, length) => {
  return value.substr(0, length) + '...'
})

Vue.use(StoryblokVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
