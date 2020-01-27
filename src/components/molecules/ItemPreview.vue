<template>
  <div>
    <div class="c-page-subtitle">
      <p>商品{{ index + 1 }}</p>
    </div>
    <div class="c-item-container">
      <img :src="ItemPrevieimage" class="c-item-img" alt="" />
      <div><span>商品名：</span>{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import defaultImage from "../../assets/img/default.png";
export default {
  name: "ItemPreview",
  props: ["item", "index"],
  computed: {
    ...mapGetters({
      imageList: "itemInformation/getImageList"
    }),
    ItemPrevieimage() {
      if (this.imageList[this.index] !== undefined) {
        return this.imageList[this.index][0].thumnail;
      }
      return defaultImage;
    }
  },
  methods: {}
};
</script>
<style>
.c-item-container {
  width: 200px;
  margin: 5px 10px 10px;
  border: 2px solid #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  background: #fff;
  padding: 5px;
}
.c-item-img {
  width: 90%;
}

/* sp */
@media only screen and (max-width: 767px) {
  .c-item-container {
    width: 35vw;
    height: 35vw;
  }
}
</style>
