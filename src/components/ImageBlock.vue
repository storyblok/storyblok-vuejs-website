<template>
  <div class="image-block" v-editable="blok">
    <img :src="blok.image" />
    <h1 class="image-block__overlay" v-if="blok.overlay_text">
      {{ blok.overlay_text }}
    </h1>
    <figcaption v-if="blok.caption" v-html="captionHtml">
    </figcaption>
  </div>
</template>

<script>
import Marked from 'marked'

export default {
  computed: {
    captionHtml () {
      return this.blok.caption ? Marked(this.blok.caption) : ''
    }
  },
  props: ['blok']
}
</script>
