<template>
  <button class="c-next-btn" @click="submit">
    <span class="iconfont icon-next"></span>
     {{message}}
  </button>
</template>
<script>
export default {
  name: 'NextBtn',
  props:['message'],
  methods: {
    submit: function () {
      this.$emit('goToNext')
    }
  }
}
</script>
<style>
</style>
