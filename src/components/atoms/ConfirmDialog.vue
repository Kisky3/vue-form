<template>
  <div id="modal-template">
    <transition name="modal">
      <div class="modal-mask" @click="cancleDialog()">
        <div class="modal-wrapper">
          <div class="modal-container" @click="stopPropagation">
            <span class="c-modal-close_button" @click="cancleDialog()" />
            <div class="modal-header">
              <slot name="header">
                <h3>商品を削除する</h3>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                この商品を本当に削除しますか？削除後は元に戻すことはできません。
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="cancleDialog()">
                  キャンセル
                </button>
                <button
                  class="modal-default-button warn"
                  @click="handleDialog()"
                >
                  削除する
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ConfirmDialog',
  methods: {
    cancleDialog(): void {
      this.$emit('cancleDialog')
    },
    stopPropagation(event: VueEvent<HTMLDivElement>): void {
      event.stopPropagation()
    },
    handleDialog(): void {
      this.$emit('handleDialog')
    }
  }
})
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  overflow-y: hidden;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.c-modal-close_button::before {
  content: '\00D7';
}

.c-modal-close_button {
  position: absolute;
  top: 8px;
  right: 15px;
  font-size: 25px;
  color: black;
}

.modal-container {
  position: relative;
  width: 300px;
  margin: 0px auto;
  padding: 30px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #4eb5ac;
  font-weight: bold;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  margin-left: 20px;
  border: 0;
  border-radius: 3px;
  font-weight: bold;
}

.modal-default-button.warn {
  color: #ff6a71;
}

.modal-default-button:hover {
  opacity: 0.8;
  background: #f5f4f4;
}

.modal-footer {
  height: 20px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
