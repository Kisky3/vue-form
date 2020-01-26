<template>
  <div class="c-item-container">
    <span class="iconfont icon-camera"></span>
  </div>
</template>
<script>
export default {
  name: "ItemPreview"
};
</script>
<style>
.c-item-container {
  width: 200px;
  height: 200px;
  margin: 5px 10px 10px;
  background: pink;
  border: 1px dashed #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* sp */
@media only screen and (max-width: 767px) {
  .c-item-container {
    width: 35vw;
    height: 35vw;
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
