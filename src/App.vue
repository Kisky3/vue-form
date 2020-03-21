<template>
  <div id="app">
    <div id="wrapper">
      <global-header />
      <router-view />
    </div>
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from './components/atoms/GlobalHeader.vue'
import GlobalFooter from './components/atoms/GlobalFooter.vue'

export default {
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  mounted() {
    if (this.$route.path !== '/thanks' && this.$route.path !== '/') {
      this.$router.push('/')
    }
    window.addEventListener('beforeunload', this.handleBeforeUnload)
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload)
  },
  methods: {
    handleBeforeUnload(e) {
      if (this.$route.path !== '/thanks') {
        e.preventDefault()
        const message =
          'このサイトを離れますか？\n行った変更が保存されない可能性があります。'
        e.returnValue = message
        return message
      }
    }
  }
}
</script>

<style>
@import "../src/assets/style/global.scss";
</style>
