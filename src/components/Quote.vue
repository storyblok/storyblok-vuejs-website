<template>
  <blockquote class="quote" v-editable="blok">
    <p class="quote__text u__center u__lmt">{{ blok.text }}</p>
  </blockquote>
</template>

<script>
export default {
  props: ['blok']
}
</script>
