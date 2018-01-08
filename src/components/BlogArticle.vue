<template>
  <div class="page u__container blog-article" v-editable="blok">
    <div class="blog-article__back">
      <a href="/page/blog">Back to overview</a>
    </div>
    <h1>{{ blok.title }}</h1>
    <p>{{ blok.intro }}</p>
    <img class="blog-article__img" :src="blok.image" />
    <div v-html="htmlText"></div>
  </div>
</template>

<script>
import Marked from 'marked'

export default {
  computed: {
    htmlText () {
      return this.blok.longtext ? Marked(this.blok.longtext) : ''
    }
  },
  props: ['blok']
}
</script>
