<template>
  <div class="page u__container">
    <h1 class="overview__title">Blog</h1>
    <div class="overview__item u__flex" v-for="article in stories">
      <div>
        <a :href="'/' + article.full_slug">
          <img :src="article.content.image" />
        </a>
      </div>
      <div>
        <h2><a :href="'/' + article.full_slug">{{ article.content.title }}</a></h2>
        <p>{{ article.content.intro | truncate(250) }}</p>
        <p><a :href="'/' + article.full_slug">Read more</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],

  data () {
    return {
      stories: [],
      total: 0
    }
  },

  created () {
    this.loadData()
  },

  watch: {
    '$route': 'loadData'
  },

  methods: {
    loadData () {
      this.$storyblok.getAll({
        version: 'draft',
        starts_with: 'article/'
      }, (data, xhrResponse) => {
        this.total = xhrResponse.getResponseHeader('Total')
        this.stories = data.stories
      })
    }
  }
}
</script>
