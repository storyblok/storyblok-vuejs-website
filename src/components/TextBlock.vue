<template>
  <div class="text-block" v-editable="blok">
    <div v-html="htmlText"></div>
  </div>
</template>

<script>
import Marked from 'marked'

export default {
  computed: {
    htmlText () {
      return this.blok.text ? Marked(this.blok.text) : ''
    }
  },
  props: ['blok']
}
</script>
