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
import ItemPreview from "../components/molecules/ItemPreview";
import AddItem from "../components/molecules/ItemAdd";
import { mapGetters } from "vuex";

export default {
  name: "ItemsList",
  props: {},
  components: {
    ItemPreview,
    AddItem
  },
  computed: {
    ...mapGetters({
      itemList: "itemInformation/getItemList",
      imageData: "itemInformation/getImageData"
    })
  },
  methods: {
    addItem: function() {
      this.$router.push({
        path: "/item_information",
        query: {
          item_id: this.itemList.length
        }
      });
    }
  }
};
</script>

<style scoped></style>
