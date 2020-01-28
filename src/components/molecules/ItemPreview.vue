<template>
  <div>
    <div class="c-page-subtitle wrap">
      <span>商品{{ index + 1 }}:</span> {{ item.title }}
    </div>
    <div class="c-item-container">
      <img :src="ItemPrevieimage" alt="" class="c-upload-img" />
      <span class="iconfont icon-check item-check"></span>
    </div>
    <div class="c-item-edit-panel">
      <span @click="editItem()">編集</span>
      <span @click="deleteItem()">削除</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import defaultImage from "../../assets/img/default.png";
export default {
  name: "ItemPreview",
  props: ["item", "index"],
  computed: {
    ...mapGetters({
      imageList: "itemInformation/getImageList",
      itemList: "itemInformation/getItemList"
    }),
    ItemPrevieimage() {
      if (this.imageList[this.index] !== undefined) {
        return this.imageList[this.index][0].thumnail;
      }
      return defaultImage;
    }
  },
  methods: {
    ...mapActions({
      saveStoreItemList: "itemInformation/saveItemList",
      saveStoreImageList: "itemInformation/saveImageList"
    }),
    editItem: function() {
      this.$router.push({
        path: "/item_information",
        query: {
          item_id: this.index
        }
      });
    },
    deleteItem: function() {
      this.saveStoreImageList(this.imageList.splice(this.index, 1));
      this.saveStoreItemList(this.itemList.splice(this.index, 1));
    }
  }
};
</script>
<style>
.item-check {
  position: absolute;
  bottom: 5px;
  right: 0px;
  font-size: 35px;
  color: #1dc050;
  background: #fff;
  border-radius: 20px;
}
</style>
