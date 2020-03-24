<template>
  <validation-provider
    :name="label"
    :rules="{ required: { allowFalse: false } }">
    <div slot-scope="ProviderProps">
      <input
        :id="label"
        v-model="model"
        :name="name"
        type="checkbox"
        true-value="on"
        false-value=""
        @change="updateValue(model)">

      <label
        :for="label"
        class="checkbox">{{ check_label }}</label>

      <div class="error-message up">
        <span
          v-show="ProviderProps.errors[0]"
          class="iconfont icon-warn up" />
        {{ ProviderProps.errors[0] }}
      </div>
    </div>
  </validation-provider>
</template>

<script>
import { extend, ValidationProvider } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

/* 必須項目のエラーメッセージ設定 */
extend('required', required)
required.message = '{_field_}は必須項目です'

export default {
  name: 'InputCheckbox',
  components: {
    ValidationProvider
  },
  props: {
    options: { type: Array, required: true },
    rules: {type: String, required: false},
    value: { type: String, required: false },
    check_label: { type: String, required: false },
    type: { type: String, required: false },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: false }
  },
  data() {
    return {
      model: null,
    }
  },
  methods: {
    updateValue: function(model) {
      this.$emit('updateValue', model)
    }
  }
}
</script>

<style scoped>
 .icon-warn.up {
   margin: -3px 0 0 5px;
 }

 .checkbox {
    margin: 20px 0 5px 15px;
 }

[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}

[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 16px;
  height: 16px;
  border: 2px solid #bbb;
  background: #fff;
  border-radius: 6px;
}

[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: '\2713\0020';
  position: absolute;
  top: .15em; left: .22em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #09ad7e;
  transition: all .2s;
  font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
}

[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}

[type="checkbox"]:disabled:not(:checked) + label:before,
[type="checkbox"]:disabled:checked + label:before {
  box-shadow: none;
  border-color: #bbb;
  background-color: #ddd;
}
[type="checkbox"]:disabled:checked + label:after {
  color: #999;
}
[type="checkbox"]:disabled + label {
  color: #aaa;
}

[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px solid #4eb5ac;
}
</style>