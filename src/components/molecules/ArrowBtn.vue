<template>
  <basic-btn @handleOnClick="handleOnClick">
    <span class="iconfont icon-next" />
    <slot />
  </basic-btn>
</template>
<script lang="ts">
import Vue from 'vue'
import BasicBtn from '@/components/atoms/BasicBtn.vue'
export default Vue.extend({
  name: 'ArrowBtn',
  components: {
    BasicBtn
  },
  methods: {
    handleOnClick(): void {
      this.$emit('handleOnClick')
    }
  }
})
</script>
<style></style>
