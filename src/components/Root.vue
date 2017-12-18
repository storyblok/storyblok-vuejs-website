<template>
  <div>
    <component :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>
export default {
  name: 'Root',
  data () {
    return {
      version: 'draft',
      story: {
        content: {
          body: []
        }
      }
    }
  },
  created () {
    this.$storyblok.on('change', () => { this.loadStory('draft') })
    this.$storyblok.on('published', () => { this.loadStory('draft') })

    this.$storyblok.pingEditor(() => {
      this.version = this.$storyblok.inEditor || window.location.host.indexOf('localhost:') > -1 ? 'draft' : 'published'
      this.loadStory(this.version)
    })
  },
  watch: {
    '$route' (to, from) {
      this.loadStory(this.version)
    }
  },
  methods: {
    loadStory (version) {
      let path = this.$route.path === '/' ? 'home' : this.$route.path

      this.$storyblok.get({
        slug: path,
        version: version
      }, (data) => {
        this.story = {
          content: {
            body: []
          }
        }

        if (data.story) {
          this.$nextTick(() => {
            this.story = data.story
          })
        }
      }, () => {
        this.story = {
          content: {
            body: []
          }
        }
      })
    }
  }
}
</script>
