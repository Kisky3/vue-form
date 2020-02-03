<template>
  <div class="c-item-wrap">
    <div @click="addItem">
      <span class="iconfont icon-camera item-camera"></span>
    </div>
    <div class="c-item-add-panel">
      + 商品を追加する
    </div>
  </div>
</template>
<script>
export default {
  name: "AddItem",
  methods: {
    addItem: function() {
      this.$emit("addItem");
    }
  }
};
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

.c-item-add-panel {
  position: absolute;
  background: linear-gradient(#ff9b27, #fb7150);
  width: 100%;
  height: 80px;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  border-radius: 0 0 5px 5px;
}
/* sp */
@media only screen and (max-width: 767px) {
}
</style>
