<template>
  <div>
    <div class="c-item-wrap">
      <div class="c-item-label">
        <span>商品名：</span>
        <br/>{{ item.title }}
      </div>

      <!--<div class="c-item-container">
        <img :src="ItemPrevieimage" alt="" class="c-upload-img" />
        <span class="iconfont icon-check item-check"></span>
      </div>-->
      <span class="iconfont icon-check item-check"></span>
      <div class="c-item-edit-panel">
        <a class="c-edit-button" @click="editItem()">編集</a>
        <a class="c-edit-button" @click="deleteItem()">削除</a>
      </div>
    </div>
    <confirm-dialog
      v-show="showDialog"
      @cancleDialog="cancleDialog()"
      @handleDialog="handleDialog()"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import defaultImage from "../../assets/img/default.png";
import ConfirmDialog from "../atoms/ConfirmDialog";
export default {
  name: "ItemPreview",
  props: ["item", "index"],
  data() {
    return {
      showDialog: false
    };
  },
  components: {
    ConfirmDialog
  },
  computed: {
    ...mapGetters({
      // imageList: "itemInformation/getImageList",
      itemList: "itemInformation/getItemList"
    }),
    /*ItemPrevieimage() {
      let imageExist = this.imageList[this.index].find(
        imageObj => imageObj.thumnail != ""
      );
      return this.imageList[this.index] !== undefined &&
        imageExist !== undefined
        ? imageExist.thumnail
        : defaultImage;
    }*/
  },
  methods: {
    ...mapActions({
      saveStoreItemList: "itemInformation/saveItemList",
      // saveStoreImageList: "itemInformation/saveImageList"
    }),
    editItem: function() {
      this.$router.push({
        path: "/item_information",
        query: {
          item_id: this.index
        }
      });
    },
    cancleDialog: function() {
      this.showDialog = false;
    },
    handleDialog: function() {
      this.showDialog = false;
      // this.saveStoreImageList(this.imageList.splice(this.index, 1));
      this.saveStoreItemList(this.itemList.splice(this.index, 1));
    },
    deleteItem: function() {
      this.showDialog = true;
    }
  }
};
</script>
<style></style>
