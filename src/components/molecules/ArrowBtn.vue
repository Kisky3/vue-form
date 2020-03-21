<template>
  <basic-btn @handleOnClick="handleOnClick">
    <span class="iconfont icon-next" />
    <slot />
  </basic-btn>
</template>
<script>
import BasicBtn from '../atoms/BasicBtn.vue'
export default {
  name: 'ArrowBtn',
  components: {
    BasicBtn
  },
  methods: {
    handleOnClick: function() {
      this.$emit('handleOnClick')
    }
  }
}
</script>
<style>
</style>
