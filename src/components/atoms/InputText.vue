<template>
  <div class="input-container">
    <validation-provider rules="required" :name="label">
      <div slot-scope="ProviderProps">
        <input
          :type="type"
          :value="value"
          :name="name"
          :placeholder="placeholder"
          :class="ProviderProps.errors[0] ? 'error-active' : ''"
          @input="updateValue"
        />
        <div class="error-message">
          <span
            v-show="ProviderProps.errors[0]"
            class="iconfont icon-warn"
          ></span>
          {{ ProviderProps.errors[0] }}
        </div>
      </div>
    </validation-provider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  name: "InputText",
  components: {
    ValidationProvider
  },
  props: {
    value: { type: String, required: false },
    type: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: false }
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
<style></style>
