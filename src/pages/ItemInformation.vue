<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
    @submit.prevent="goToNext()"
  >
    <div class="c-page-container">
      <div class="c-page-title">
        <p>商品 {{ itemIndex + 1 }} 情報</p>
      </div>
      <div class="c-page-row">
        <div class="c-page-subtitle">
          <p>写真</p>
          <require-tag />
        </div>
        <div class="c-photo-row">
          <div v-for="(image, index) in itemImage" :key="index">
            <image-upload
              :image="image"
              :index="index"
              :itemIndex="itemIndex"
            />
          </div>
        </div>
      </div>

      <div class="c-page-row">
        <div class="c-page-subtitle">
          <p>商品名</p>
          <require-tag />
        </div>
        <input-model
          v-model="itemData.title"
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
        <item-categories
          :itemData="itemData"
          @submitCatLvl0="changeCatLvl0"
          @submitCatLvl1="changeCatLvl1"
          @submitCatLvl2="changeCatLvl2"
        />
      </div>

      <div class="c-page-row up">
        <div class="c-page-subtitle">
          <p>付属品</p>
          <option-tag />
        </div>
        <textarea-model
          v-model="itemData.item_comment"
          placeholder="付属品の内容を記入ください"
          name="item-accessories"
          :rows="4"
          value="value"
        />
      </div>
      <next-btn @goToNext="goToNext()" :message="btnMessage" :class="invalid ? 'disabled' : ''" />
    </div>
  </validation-observer>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
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
  props: ["item_id"],
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
      itemIndex: this.$route.query.item_id ? this.$route.query.item_id : 0,
      btnMessage: '次へ',
      initialItemData: {
        title: null,
        cat_lvl0: null,
        cat_lvl1: null,
        cat_lvl2: null,
        item_comment: null
      }
    };
  },
  computed: {
    ...mapGetters({
      imageList: "itemInformation/getImageList",
      itemList: "itemInformation/getItemList"
    }),
    itemImage() {
      return this.imageList[this.itemIndex];
    },
    itemData() {
      if (this.itemList.length === 0) {
        return this.initialItemData;
      }
      return this.itemList[this.itemIndex];
    }
  },
  methods: {
    ...mapActions({
      saveStoreItemData: "itemInformation/saveItemList",
      saveStoreImageData: "itemInformation/saveImageList"
    }),
    async goToNext() {
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        await this.saveItemData();
        await this.openItemsListPage();
      }
    },
    saveItemData() {
      this.itemList.splice(this.itemIndex, 1, this.itemData);
      // 生成された商品データをstoreに保存する
      this.saveStoreItemData(this.itemList);
    },
    saveItemImage() {
      // 生成された商品データをstoreに保存する
      this.saveStoreImageData(
        this.imageList.splice(this.itemIndex, 1, this.itemImage)
      );
    },
    openItemsListPage() {
      this.$router.push(
        "items_list",
        () => {},
        () => {}
      );
    },
    changeCatLvl0(catLvl0) {
      this.itemData.cat_lvl0 = catLvl0;
    },
    changeCatLvl1(catLvl1) {
      this.itemData.cat_lvl1 = catLvl1;
    },
    changeCatLvl2(catLvl2) {
      this.itemData.cat_lvl2 = catLvl2;
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
