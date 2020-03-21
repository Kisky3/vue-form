<template>
  <header>
    <span
      class="iconfont icon-return"
      @click="goBack()" />
    <a href="https://www.takakuureru.com/"><img
      src="./../../assets/img/logo.png"
      alt=""></a>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader',
  methods: {
    goBack: function() {
      this.$router.go(-1)
      window.scrollTo(0, 0)
    }
  }
}
</script>
