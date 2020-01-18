<template>
  <div class="c-page-container">
    <div class="c-page-title">
      <p>商品１情報</p>
    </div>
    <div class="c-page-subtitle">
      <p>写真</p>
      <require-tag />
    </div>
    <div class="c-photo-container row">
      <div v-for="(image, index) in imageList" :key="index">
          <image-upload :image="image" :index="index"/>
      </div>
    </div>

    <div class="c-page-subtitle">
      <p>商品名</p>
      <require-tag />
    </div>
    <div class="c-photo-container">
      <input-model
        v-model="itemForm.name"
        type="text"
        placeholder="例）SHARP 40インチTV"
        value="value"
        name="item-name"
      />
    </div>

    <div class="c-page-subtitle">
      <p>カテゴリー</p>
      <require-tag />
    </div>
    <div class="c-photo-container">
      <item-categories />
    </div>

    <div class="c-page-subtitle">
      <p>付属品</p>
      <option-tag />
    </div>
    <div class="c-photo-container">
      <textarea-model
        v-model="itemForm.accessories"
        placeholder="付属品の内容を記入ください"
        name="item-accessories"
        :rows="3"
        value="value"
      />
    </div>
    <next-btn @goToNext="goToNext" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ImageUpload from "./../components/molecules/ImageUpload";
import RequireTag from "./../components/atoms/RequireTag";
import OptionTag from "./../components/atoms/OptionTag";
import TextareaModel from "./../components/atoms/TextareaModel";
import InputModel from "./../components/atoms/InputModel";
import ItemCategories from "./../components/molecules/ItemCategories";
import NextBtn from "./../components/atoms/NextBtn";
export default {
  name: "ItemInformation",
  components: {
    ImageUpload,
    InputModel,
    TextareaModel,
    ItemCategories,
    RequireTag,
    OptionTag,
    NextBtn
  },
  data() {
    return {
      itemForm: {
        accessories: ""
      },
      imageList: this.$store.getters["itemInformation/getImageList"]
    };
  },
  methods: {
    goToNext: function(str) {
      alert(str);
    },
    saveImage: function(index, image) {
      this.$store.dispatch("saveImageList", index, image);
    }
  }
};
</script>
<style></style>
