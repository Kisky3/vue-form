<template>
  <div class="input-container">
    <textarea :rows="rows" :placeholder="placeholder" @input="updateValue"></textarea>
  </div>
</template>

<script>
export default {
  name: "TextareaModel",
  props: {
    value: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String, required: false },
    rows: { type: Number, required: false },
    cols: { type: Number, required: false }
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
<style>
textarea {
  width: 100%;
  border: solid 1px #e1e1e1;
  padding: 5px;

}

textarea::placeholder {
  color: #7E7E7F;
}

.input-container {
  width: 100%;
  padding: 5px;
}
</style>
