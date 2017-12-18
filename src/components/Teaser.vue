<template>
  <div v-editable="blok">
    <div class="teaser">
      <div class="slider js_slider">
        <div class="slider__frame js_frame">
          <ul class="slider__slides js_slides">
            <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>
          </ul>
        </div>
        <div class="pag js_dots">
          <button @click="handleDotClick(index)" v-for="(blok, index) in blok.body" :class="{'pag__dot--current': index == currentSlide}" class="pag__dot"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { lory } from 'lory.js'

export default {
  props: ['blok'],

  data () {
    return {
      slider: null,
      currentSlide: 0
    }
  },

  mounted () {
    let sliderEl = this.$el.querySelector('.js_slider')

    this.slider = lory(sliderEl, {
      enableMouseEvents: true
    })

    sliderEl.addEventListener('after.lory.slide', this.handleSlide)
  },

  beforeDestroy () {
    this.slider.destroy()
  },

  methods: {
    handleDotClick (index) {
      this.slider.slideTo(index)
    },

    handleSlide (e) {
      this.currentSlide = e.detail.currentSlide
    }
  }
}
</script>
