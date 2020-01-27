<template>
  <div class="c-page-container">
    <div>Items List Preview</div>
    <div class="c-page-row row">
      <div v-for="(item, index) in itemList" :key="index">
        <item-preview :item="item" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemPreview from "../components/molecules/ItemPreview";
import { mapGetters } from "vuex";

export default {
  name: "ItemsList",
  props: {},
  components: {
    ItemPreview
  },
  computed: {
    ...mapGetters({
      itemList: "itemInformation/getItemList"
    })
  }
};
</script>

<style scoped></style>
