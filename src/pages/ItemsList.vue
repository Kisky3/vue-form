<template>
  <div class="c-page-container">
    <div>Items List Preview</div>
    <div class="c-page-row row">
    <item-preview />
    <item-preview />
    </div>
    </div>
</template>

<script>
import ItemPreview from "../components/molecules/ItemPreview";
export default {
  name: "ItemsList",
  props: {},
  components: {
    ItemPreview
  }
};
</script>

<style scoped>

</style>
