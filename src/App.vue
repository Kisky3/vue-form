<template>
  <div id="app">
    <div id="wrapper">
      <global-header
        :show-back-arrow="showBackArrow"
        @routeBack="handleRouteBack"
      />
      <router-view @routePush="handleRoutePush" @routeBack="handleRouteBack" />
    </div>
    <global-footer />
  </div>
</template>

<script>
import Vue from 'vue'
import VueHead from 'vue-head'
import GlobalHeader from './components/atoms/GlobalHeader.vue'
import GlobalFooter from './components/atoms/GlobalFooter.vue'

Vue.use(VueHead)

export default {
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  data() {
    let baseUrl = '/'

    if (process.env.NODE_ENV === 'production') {
      baseUrl = '/fotc/'
    }

    if (process.env.NODE_ENV === 'staging') {
      baseUrl = '/fotc-d/'
    }

    return {
      // 高く売れるフォームをURL直叩きで表示した時は出さない
      showBackArrow: false,
      callPushFromApp: false,
      baseUrl
    }
  },
  watch: {
    $route(to, from) {
      // App内呼び出しじゃない場合はTOPページへ強制遷移
      if (!this.callPushFromApp) {
        window.location.href = this.baseUrl
      }
      this.callPushFromApp = false

      // ThanksページからTOPページに戻る時、Thanksページは”戻るボタン”を表示しない
      if (
        (from.path === '/thanks' && to.path === '/') ||
        to.path === '/thanks'
      ) {
        this.showBackArrow = false
      } else {
        this.showBackArrow = true
      }
    }
  },
  mounted() {
    if (this.$route.path !== '/thanks' && this.$route.path !== '/') {
      window.location.href = this.baseUrl
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
    },
    handleRoutePush(to, opt = {}) {
      opt = { useRouter: true, ...opt }

      let path, query
      if (typeof to === 'object') {
        path = to.path
        query = to.query
      } else {
        path = to
      }

      let params = ''
      if (query) {
        params = Object.keys(query)
          .map(key => `${key}=${query[key]}`)
          .join('&')
        params = `?${params}`
      }
      const url = `${this.baseUrl}${path.replace(/^\//, '')}${params}`

      if (opt.useRouter) {
        this.callPushFromApp = true
        this.$router.push({ path, query: query || {} })
      } else {
        window.location.href = url
        return
      }

      if (process.env.NODE_ENV === 'production') {
        // Google Analytics
        ga('send', 'pageview', { page: url })

        // GoogleTagManager
        dataLayer.push({ event: 'pageview', virtualUrl: url })
      }
    },
    handleRouteBack() {
      this.callPushFromApp = true
      this.$router.back()
    }
  },
  head: {
    script: [
      {
        type: 'text/javascript',
        inner: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-18053543-1', 'auto', {'useAmpClientId': true});
          ga('send', 'pageview');
          ga(function(tracker) {
          /* read utmz from tracker */
          make_call(tracker.get('_utmz'));
          });
        `,
        async: true
      },
      {
        type: 'text/javascript',
        inner: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TTQ5BP');
        `,
        async: true
      }
    ]
  }
}
</script>

<style>
@import '../src/assets/style/global.scss';
</style>
