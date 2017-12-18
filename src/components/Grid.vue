<template>
  <div class="u__flex u__grid" v-editable="blok">
    <component :key="column._uid" :blok="column" :is="column.component" v-for="column in blok.columns"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
