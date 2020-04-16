<template>
  <validation-provider
    :name="label"
    :rules="{ required: { allowFalse: false } }"
  >
    <div slot-scope="ProviderProps">
      <div
        :class="
          ProviderProps.errors[0]
            ? 'c-check-container error-active'
            : 'c-check-container'
        "
      >
        <input :id="label" v-model="checked" :name="name" type="checkbox" />
        <label :for="label" :class="{ checkbox: true, checked: checked }">
          <slot />
        </label>
      </div>
      <div class="error-message up">
        <span v-show="ProviderProps.errors[0]" class="iconfont icon-warn up" />
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
extend('required', {
  ...required,
  message: '{_field_}は必須項目です'
})

export default Vue.extend({
  name: 'InputCheckbox',
  components: {
    ValidationProvider
  },
  computed: {
    checked: {
      set(newValue: boolean): void {
        this.$emit('input', newValue)
      },
      get(): boolean {
        return this.value
      }
    }
  },
  props: {
    rules: { type: String, required: false },
    value: { type: Boolean, required: false },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: false }
  }
})
</script>

<style scoped lang="scss">
.c-check-container {
  margin: 0;
  border-radius: 5px;
  padding: 12px 0;
  width: 100%;
}

.icon-warn.up {
  margin: -3px 0 0 5px;
}

[type='checkbox'] {
  display: none;
}

.checkbox {
  margin: 20px 0 5px 10px;
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;

  &:focus {
    &:before {
      border: 2px solid #4eb5ac;
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border: 2px solid #bbb;
    background: #fff;
    border-radius: 6px;
  }

  &:after {
    content: '\2713\0020';
    position: absolute;
    top: 0.15em;
    left: 0.22em;
    font-size: 1.3em;
    line-height: 0.8;
    color: #09ad7e;
    transition: all 0.2s;
    font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
    opacity: 0;
    transform: scale(0);
  }

  &.checked {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &.disabled {
    color: #aaa;
    &:before {
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }

    &.checked {
      label:after {
        color: #999;
      }
    }
  }
}
</style>
