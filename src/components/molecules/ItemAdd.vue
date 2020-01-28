<template>
  <div>
    <div class="c-item-container top" @click="addItem">
      <span class="iconfont icon-camera item-camera"></span>
    </div>
    <div class="c-item-add-panel">
      商品を追加
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
  height: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-item-add-panel {
  background: #1dc050;
  width: 100%;
  height: 65px;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* sp */
@media only screen and (max-width: 767px) {
}
</style>
