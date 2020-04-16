<template>
  <button type="button" class="c-arrow-btn" @click="submit">
    <slot />
  </button>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BasicBtn',
  methods: {
    submit(): void {
      this.$emit('handleOnClick')
    }
  }
})
</script>
<style></style>
