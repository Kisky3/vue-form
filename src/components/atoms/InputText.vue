<template>
  <div class="input-container">
    <validation-provider
      mode="lazy"
      :rules="rules"
      :name="label">
      <div slot-scope="ProviderProps">
        <input
          :type="type"
          :value="value"
          :name="name"
          :placeholder="placeholder"
          :class="ProviderProps.errors[0] ? 'error-active' : ''"
          @input="updateValue">
        <div class="error-message">
          <span
            v-show="ProviderProps.errors[0]"
            class="iconfont icon-warn" />
          {{ ProviderProps.errors[0] }}
        </div>
      </div>
    </validation-provider>
  </div>
</template>

<script>
import { extend, ValidationProvider } from 'vee-validate'
import { required, email, numeric, min, max } from 'vee-validate/dist/rules'

/* 必須項目のエラーメッセージ設定 */
extend('required', required)
extend('email', email)
extend('numeric', numeric)
extend('min', min)
extend('max', max)
required.message = '{_field_}は必須項目です'
email.message = '{_field_}を正しく入力してください'
numeric.message = '{_field_}を正しく入力してください'
min.message = '{_field_}を正しく入力してください'
max.message = '{_field_}を正しく入力してください'

export default {
  name: 'InputText',
  components: {
    ValidationProvider
  },
  props: {
    rules: {type: String, required: false},
    value: { type: String, required: false },
    type: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: false }
  },
  methods: {
    updateValue: function(e) {
      this.$emit('input', e.target.value)
      this.$emit('change')
    }
  }
}
</script>
<style></style>
