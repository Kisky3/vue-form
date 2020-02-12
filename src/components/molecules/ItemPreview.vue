<template>
  <div class="c-item-wrap">
    <div class="c-item-label">
      {{ item.title }}
    </div>
    <div class="c-item-container">
      <img :src="ItemPrevieimage" alt="" class="c-upload-img" />
      <span class="iconfont icon-check item-check"></span>
    </div>
    <div class="c-item-edit-panel">
      <a class="c-edit-button" @click="editItem()">編集</a>
      <a class="c-edit-button" @click="deleteItem()">削除</a>
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
      this.$emit("showDialog");
      this.saveStoreImageList(this.imageList.splice(this.index, 1));
      this.saveStoreItemList(this.itemList.splice(this.index, 1));
    }
  }
};
</script>
<style></style>
