<template>
  <div class="input-container">
    <validation-provider mode="lazy" :rules="rules" :name="label">
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
          <span v-show="ProviderProps.errors[0]" class="iconfont icon-warn" />
          {{ ProviderProps.errors[0] }}
        </div>
      </div>
    </validation-provider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { extend, ValidationProvider } from 'vee-validate'
import { required, email, numeric, min, max } from 'vee-validate/dist/rules'

/* 必須項目のエラーメッセージ設定 */
extend('required', { ...required, message: '{_field_}は必須項目です' })
extend('email', { ...email, message: '{_field_}を正しく入力してください' })
extend('numeric', { ...numeric, message: '{_field_}を正しく入力してください' })
extend('min', {
  ...min,
  message: '{length}文字以上で入力してください'
})
extend('max', {
  ...max,
  message: '{length}文字以内で入力してください'
})

export default Vue.extend({
  name: 'InputText',
  components: {
    ValidationProvider
  },
  props: {
    rules: { type: String, required: false },
    value: { type: String, required: false },
    type: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: false }
  },
  methods: {
    updateValue(e: VueEvent<HTMLInputElement>): void {
      this.$emit('input', e.target.value)
      this.$emit('change')
    }
  }
})
</script>
