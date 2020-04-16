<template>
  <div class="select-wrap">
    <i class="iconfont icon-pulldown" />
    <select
      :value="value"
      :class="{ 'error-active': isError }"
      v-on="listeners"
    >
      <slot />
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isError: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    /**
     * this.$listeners = change, blurなどのデフォルトイベントグループ
     * inputだけはIEの場合は発火されないが、vee-validateでは必須なので
     * オリジナルのinputは削除して、change経由で発火する
     */
    listeners(): Record<string, Function | Function[]> {
      delete this.$listeners.input
      return {
        ...this.$listeners,
        change: (event: VueEvent<HTMLSelectElement>) => {
          // vee-validate用
          this.$emit('input', event.target.value, event)
          // v-model用
          this.$emit('change', event.target.value, event)
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.select-wrap {
  margin: 0 0 10px 0;
  position: relative;
  .icon-pulldown {
    position: absolute;
    right: 5px;
    top: 50%;
    z-index: 2;
    color: #999;
    transform: translate(0, -50%);
  }
  select {
    width: 100%;
    border: solid 1px #e1e1e1;
    height: 50px;
    padding: 10px 15px;
    background: #fff;
    outline: none;

    &:focus {
      border: solid 1px #4eb5ac;
      box-shadow: 0 0 3px 0 #4eb5ac inset;
    }

    &.error-active {
      border: solid 1px #ff6a71 !important;
      box-shadow: 0 0 3px 0 #ff6a71 inset !important;
    }
    &::-ms-expand {
      display: none;
    }
  }
}
</style>
