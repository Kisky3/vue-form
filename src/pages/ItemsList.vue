<template>
  <div class="c-page-container">
    <div class="c-page-title">
      <p>登録商品一覧</p>
    </div>
    <div class="c-page-row row">
      <add-item @addItem="addItem()" />
      <div v-for="(item, index) in itemList" :key="index">
        <item-preview :item="item" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import ItemPreview from "../components/molecules/ItemPreview";
import AddItem from "../components/molecules/ItemAdd";

export default {
  name: "ItemsList",
  props: {},
  data() {
    return {
      initialImageData: [
        {
          thumnail: "",
          uploadFile: {},
          name: ""
        },
        {
          thumnail: "",
          uploadFile: {},
          name: ""
        },
        {
          thumnail: "",
          uploadFile: {},
          name: ""
        }
      ]
    };
  },
  components: {
    ItemPreview,
    AddItem
  },
  computed: {
    ...mapGetters({
      itemList: "itemInformation/getItemList",
      imageList: "itemInformation/getImageList"
    })
  },
  methods: {
    ...mapActions({
      saveStoreImagList: "itemInformation/saveImageList"
    }),
    addItem: function() {
      this.$router.push({
        path: "/item_information",
        query: {
          item_id: this.itemList.length
        }
      });
      this.imageList.splice(this.itemList.length, 1, this.initialImageData);
      console.log("imageList length");
      console.log(this.imageList.length);
      this.saveStoreImageList(this.imageList);
    }
  }
};
</script>

<style scoped></style>
