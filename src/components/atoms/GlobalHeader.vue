<template>
  <header>
    <span
      v-show="showBackArrow"
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
  props: {
    showBackArrow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack: function() {
      this.$emit('routeBack')
    }
  }
}
</script>
