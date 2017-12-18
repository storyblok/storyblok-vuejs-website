<template>
  <li class="js_slide teaser__slide" v-editable="blok">
    <section class="teaser__inner uk-grid">
      <div class="teaser__img uk-width-1-2@s uk-width-2-3@m">
        <a class="u__block u__ratio" href="/shop" style="padding-bottom: 60.5%">
          <img :src="blok.image">
        </a>
      </div>
      <div class="teaser__text uk-width-1-2@s uk-width-1-3@m">
        <h1>
          <a :href="blok.link | url">{{ blok.headline }}</a>
        </h1>
        <p>{{ blok.subheadline }}</p>
        <a class="teaser__link" :href="blok.link | url">Read more</a>
      </div>
    </section>
  </li>
</template>

<script>
export default {
  props: ['blok']
}
</script>
