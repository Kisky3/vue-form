<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
    @submit.prevent="goToNext()"
  >
    <div class="c-page-container">
      <div class="c-page-title">
        <p>商品１情報</p>
      </div>

      <div class="c-page-row">
        <div class="c-page-subtitle">
          <p>写真</p>
          <require-tag />
        </div>
        <div class="c-photo-row">
          <div v-for="(image, index) in imageList" :key="index">
            <image-upload :image="image" :index="index" />
          </div>
        </div>
      </div>

      <div class="c-page-row">
        <div class="c-page-subtitle">
          <p>商品名</p>
          <require-tag />
        </div>
        <input-model
          v-model="tile"
          type="text"
          placeholder="例）SHARP 40インチTV"
          value="value"
          name="item-name"
        />
      </div>

      <div class="c-page-row">
        <div class="c-page-subtitle">
          <p>カテゴリー</p>
          <require-tag />
        </div>
        <item-categories />
      </div>

      <div class="c-page-row up">
        <div class="c-page-subtitle">
          <p>付属品</p>
          <option-tag />
        </div>
        <textarea-model
          v-model="item_comment"
          placeholder="付属品の内容を記入ください"
          name="item-accessories"
          :rows="4"
          value="value"
        />
      </div>
      <next-btn @goToNext="goToNext" :class="invalid ? 'disabled' : ''" />
    </div>
  </validation-observer>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from 'vuex'
import ImageUpload from "./../components/molecules/ImageUpload";
import RequireTag from "./../components/atoms/RequireTag";
import OptionTag from "./../components/atoms/OptionTag";
import TextareaModel from "./../components/atoms/TextareaModel";
import InputModel from "./../components/atoms/InputModel";
import ItemCategories from "./../components/molecules/ItemCategories";
import NextBtn from "./../components/atoms/NextBtn";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";
import { required } from "vee-validate/dist/rules";

/* 必須項目のエラーメッセージ設定 */
required.message = "{_field_}を選択してください";
extend("required", required);

export default {
  name: "ItemInformation",
  components: {
    ImageUpload,
    InputModel,
    TextareaModel,
    ItemCategories,
    RequireTag,
    OptionTag,
    NextBtn,
    ValidationObserver
  },
  data() {
    return {
      itemData: {},
    };
  },
  computed: {
    ...mapGetters({
      imageList: "itemInformation/getImageList",
      itemList: "itemInformation/getItemList"
    })
  },
  methods: {
    ...mapActions({
      saveStoreItemData: 'itemInformation/saveItemList'
    }),
    async goToNext(str) {
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        // this.saveItemData();
        this.openItemsPreviewPage();
      }
    },
    saveItemData() {
      this.imageList.splice(index, 1, image);
      this.saveStoreItemData(this.itemData)
    },
    openItemsPreviewPage() {
      this.$router.push(
        "items_preview",
        () => {},
        () => {}
      );
    }
  }
};
</script>
<style>
.c-photo-row {
  display: flex;
  justify-content: start;
  width: 100%;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.c-page-row.up {
  margin-top: -10px;
}
</style>
