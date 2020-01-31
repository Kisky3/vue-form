<template>
  <div>
    <template v-for="(option, index) in options">
      <input
        :key="index"
        :id="option.label"
        :name="name"
        type="radio"
        :value="option.value"
        @change="updateValue"
      />
      <label :key="option.label" :for="option.label" class="radio">{{
        option.label
      }}</label>
    </template>
  </div>
</template>

<script>
export default {
  name: "InputRadio",
  props: {
    value: { type: String, required: false },
    options: { type: Array, required: true },
    name: { type: String, required: true }
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
