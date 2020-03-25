<template>
  <validation-provider
    :rules="rules"
    :name="name">
    <div slot-scope="ProviderProps">
      <basic-select
        :value="value"
        :is-error="!!ProviderProps.errors[0]"
        @input="(val, $e) => $emit('input', val, $e)"
        @change="$emit('change', $event)"
        @blur="$emit('blur', $event)">
        <slot />
      </basic-select>
      <div class="error-message">
        <span
          v-show="ProviderProps.errors[0]"
          class="iconfont icon-warn" />
        {{ ProviderProps.errors[0] }}
      </div>
    </div>
  </validation-provider>
</template>

<script>
import BasicSelect from '../atoms/BasicSelect'

import { extend, ValidationProvider } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
extend('required', required)

export default {
  components: { BasicSelect, ValidationProvider },
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    rules: {
      type: [String, Object],
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    }
  }
}
</script>