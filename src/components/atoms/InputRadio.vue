<template>
  <div>
    <template v-for="(option, index) in options">
      <input
        :id="option.label"
        :key="index"
        :name="name"
        type="radio"
        :checked="handleCheck(index)"
        :value="option.value"
        @change="updateValue">
      <label
        :key="option.label"
        :for="option.label"
        class="radio">{{
          option.label
        }}</label>
    </template>
  </div>
</template>

<script>
export default {
  name: 'InputRadio',
  props: {
    checkedIndex: {type: [Number, null], required: false},
    value: { type: String, required: false },
    options: { type: Array, required: true },
    name: { type: String, required: true }
  },
  methods: {
    handleCheck: function(index) {
      return this.checkedIndex === index ? 'checked' : ''
    },
    updateValue: function(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
