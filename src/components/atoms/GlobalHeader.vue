<template>
  <header>
    <span
      v-show="showBackArrow"
      class="iconfont icon-return"
      @click="goBack()"
    />
    <a href="https://www.takakuureru.com/">
      <img src="./../../assets/img/logo.png" alt="" />
    </a>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'GlobalHeader',
  props: {
    showBackArrow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack(): void {
      this.$emit('routeBack')
    }
  }
})
</script>
