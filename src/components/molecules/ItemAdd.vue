<template>
  <div class="c-item-wrap add" @click="addItem">
    <!--ABテストのため画像componentを外す
    <div>
      <span class="iconfont icon-camera item-camera" />
    </div>-->
    <div class="c-add-item-wrap">
      <img src="../../assets/img/item.svg" />
    </div>
    <div class="c-item-add-panel">
      + 商品を追加する
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AddItem',
  methods: {
    addItem(): void {
      this.$emit('addItem')
    }
  }
})
</script>
<style>
.item-camera {
  font-size: 60px;
  font-weight: bold;
  color: #dedede;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-add-item-wrap {
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-add-item-wrap img {
  width: 38px;
}

.c-item-add-panel {
  position: absolute;
  background: #18c4af;
  width: 100%;
  height: 60px;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  border-radius: 0 0 5px 5px;
}
</style>
