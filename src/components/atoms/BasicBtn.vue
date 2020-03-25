<template>
  <button
    type="button"
    class="c-arrow-btn"
    @click="submit">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'BasicBtn',
  methods: {
    submit: function () {
      this.$emit('handleOnClick')
    }
  }
}
</script>
<style>
</style>
