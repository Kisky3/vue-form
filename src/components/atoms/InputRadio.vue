<template>
  <validation-provider
    :name="name"
    :rules="{ required: { allowFalse: false } }"
  >
    <div slot-scope="ProviderProps">
      <div
        :class="
          ProviderProps.errors[0]
            ? 'c-radio-container error-active'
            : 'c-radio-container'
        "
      >
        <template v-for="(option, index) in options">
          <input
            :id="option.label"
            :key="index"
            :name="name"
            type="radio"
            v-model="selected"
            :value="option.value"
          />
          <label :key="option.label" :for="option.label" class="radio">
            {{ option.label }}
          </label>
        </template>
      </div>
      <div class="error-message radio-error">
        <span v-show="ProviderProps.errors[0]" class="iconfont icon-warn" />
        {{ ProviderProps.errors[0] }}
      </div>
    </div>
  </validation-provider>
</template>

<script lang="ts">
import Vue from 'vue'
import { extend, ValidationProvider } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

/* 必須項目のエラーメッセージ設定 */
extend('required', { ...required, message: '{_field_}は必須項目です' })

export default Vue.extend({
  name: 'InputRadio',
  components: {
    ValidationProvider
  },
  props: {
    rules: { type: String, required: false },
    value: { type: [String, Number], required: false },
    options: { type: Array, required: true },
    name: { type: String, required: true }
  },
  computed: {
    selected: {
      get(): string | number {
        return this.value
      },
      set(newValue: string | number): void {
        this.$emit('input', newValue)
      }
    }
  }
})
</script>
<style>
.c-radio-container {
  display: flex;
  border-radius: 5px;
  margin: 0 15px 0;
}
.radio-error {
  margin: 0 15px 15px;
}
</style>
