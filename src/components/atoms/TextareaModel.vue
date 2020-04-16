<template>
  <div class="input-container">
    <textarea
      :rows="rows"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TextareaModel',
  props: {
    value: { type: String, required: false },
    name: { type: String, required: true },
    placeholder: { type: String, required: false },
    rows: { type: Number, required: false },
    cols: { type: Number, required: false }
  },
  methods: {
    updateValue(e: VueEvent<HTMLInputElement>): void {
      this.$emit('input', e.target.value)
    }
  }
})
</script>
<style>
textarea {
  width: 100%;
  border: solid 1px #e1e1e1;
  padding: 5px 15px;
}

textarea::placeholder {
  color: #7e7e7f;
}
</style>
