<template>
  <div>
    <div class="c-page-subtitle">
      <p>商品{{ index + 1 }}</p>
    </div>
    <div class="c-item-container">
      <img :src="ItemPrevieimage" class="c-item-img" alt="" />
      <div class="c-item-label">商品名： {{ item.title }}</div>
      <div class="c-item-edit-panel">
        <span @click="editItem()">編集</span>
        <span @click="deleteItem()">削除</span>
      </div>
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
  methods: {
    editItem: function() {
       this.$router.push({
        path: "/item_information",
        query: {
          item_id: this.index
        }
      });
    },
    deleteItem: function() {
      alert("delete");
    },
    saveItem: function() {
      alert("save");
    }
  }
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

.c-item-label {
  font-size: 14px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.c-item-edit-panel {
  width: 200px;
  height: 60px;
  padding: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* sp */
@media only screen and (max-width: 767px) {
  .c-item-container {
    width: 35vw;
  }

  .c-item-edit-panel {
    width: 35vw;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
