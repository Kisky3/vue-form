<template>
  <transition name="expand">
    <div v-show="isShow">
      <slot />
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: opacity 1s;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}

div {
  width: 100%;
}
</style>
