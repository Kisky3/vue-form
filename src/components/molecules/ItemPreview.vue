<template>
  <div>
    <div class="c-page-subtitle">
      <p>商品{{ index + 1 }}</p>
    </div>
    <div class="c-item-container">
      <span class="iconfont icon-camera item-camera"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemPreview",
  props: ["item", "index"],
  methods: {}
};
</script>
<style>
.c-item-container {
  width: 200px;
  height: 200px;
  margin: 5px 10px 10px;
  border: 2px solid #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.item-camera {
  color: #dedede;
  font-size: 80px;
  font-weight: bold;
}

/* sp */
@media only screen and (max-width: 767px) {
  .c-item-container {
    width: 35vw;
    height: 35vw;
  }

  .item-camera {
    color: #dedede;
    font-size: 60px;
    font-weight: bold;
  }
}

/* ipad */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .c-item-container {
    width: 200px;
    height: 200px;
  }
}
</style>
