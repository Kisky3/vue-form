<template>
  <div>
    <process-bar :step1="step1" />
    <loading v-show="showLoading"></loading>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
      @submit.prevent="goToNext()">
      <div class="c-page-container">
        <div class="c-page-title">
          <p>商品{{ itemIndex + 1 }} 情報</p>
        </div>
        <!--ABテストのため、画像componentを外す
        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>写真</p>
            <option-tag />
            <span class="warn-message">写真をアップしましょう</span>
          </div>
          <div class="c-photo-row">
            <div
              v-for="(image, index) in itemImage"
              :key="index">
              <image-upload
                :image="image"
                :index="index"
                :item-index="itemIndex"
                @saveImgKey="saveImgKey"
                @delImgKey="delImgKey" />
            </div>
          </div>
        </div>-->

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>カテゴリー</p>
            <require-tag />
          </div>
          <item-categories
            :item-data="itemData"
            @submitCatLvl0="changeCatLvl0"
            @submitCatLvl1="changeCatLvl1"
            @submitCatLvl2="changeCatLvl2" />
        </div>

        <div class="c-page-row up">
          <div class="c-page-subtitle">
            <p>商品名</p>
            <require-tag />
          </div>
          <input-text
            v-model="itemData.title"
            type="text"
            placeholder="例）SHARP 40インチTV"
            value="value"
            name="item-name"
            label="商品名"
            rules="required" />
        </div>

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>商品の状態</p>
            <option-tag />
          </div>
          <div class="c-item-selectbtn">
            <input-radio
              v-model="itemData.condition"
              :value="itemData.condition"
              :checked-index="checkedIndex"
              name="condition"
              :options="condition_options" />
          </div>
        </div>

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>補足事項</p>
            <option-tag />
          </div>
          <textarea-model
            v-model="itemData.item_comment"
            placeholder="例）付属品：リモコンあり"
            name="item-accessories"
            :rows="3"
            value="value" />
        </div>
        <arrow-btn
          :class="invalid ? 'disabled' : ''"
          @handleOnClick="goToNext()">
          次へ
        </arrow-btn>
      </div>
    </validation-observer>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import settings from './../constants/setting'
import ProcessBar from '../components/molecules/Processbar'
import Loading from '../components/atoms/Loading'
// import ImageUpload from './../components/molecules/ImageUpload'
import RequireTag from './../components/atoms/RequireTag'
import OptionTag from './../components/atoms/OptionTag'
import TextareaModel from './../components/atoms/TextareaModel'
import InputText from './../components/atoms/InputText'
import InputRadio from './../components/atoms/InputRadio'
import ItemCategories from './../components/molecules/ItemCategories'
import ArrowBtn from './../components/molecules/ArrowBtn'
import { extend, ValidationObserver } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

/* 必須項目のエラーメッセージ設定 */
required.message = '{_field_}は必須項目です'
extend('required', required)

export default {
  name: 'ItemInformation',
  components: {
    ProcessBar,
    // ImageUpload,
    InputRadio,
    InputText,
    Loading,
    TextareaModel,
    ItemCategories,
    RequireTag,
    OptionTag,
    ArrowBtn,
    ValidationObserver
  },
  props: {
    itemId: { type: Number, required: false }
  },
  data() {
    return {
      showLoading: true,
      itemIndex: this.$route.query.itemId ? Number(this.$route.query.itemId) : 0,
      condition_options: settings.itemConditionLabel,
      step1: 'active',
      initialItemData: {
        title: null,
        condition: '中古',
        images: {},
        cat_lvl0: null,
        cat_lvl1: null,
        cat_lvl2: null,
        item_comment: ''
      },
      initialImageData: [
        {
          thumnail: '',
          uploadFile: {},
          name: ''
        },
        {
          thumnail: '',
          uploadFile: {},
          name: ''
        },
        {
          thumnail: '',
          uploadFile: {},
          name: ''
        }
      ]
    }
  },
  mounted() {
    this.showLoading = false
  },
  computed: {
    ...mapState(['itemList', 'imageList']),
    itemImage() {
      return this.imageList[this.itemIndex]
        ? this.imageList[this.itemIndex]
        : this.initialImageData
    },
    itemData() {
      return this.itemList.length === 0
        ? this.initialItemData
        : this.itemList[this.itemIndex]
    },
    checkedIndex() {
      let checkedIndex
      if (this.itemList.length === 0) {
        return 0
      }

      if (
        this.itemList.length !== 0 &&
        this.itemList[this.itemIndex].condition === '中古'
      ) {
        return 0
      }

      this.condition_options.forEach((element, index) => {
        if (element.value === this.itemList[this.itemIndex].condition) {
          checkedIndex = index
        }
      })
      return checkedIndex
    }
  },
  methods: {
    async goToNext() {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.saveItemData()
        this.openItemsListPage()
      }
    },
    delImgKey(index) {
      this.$delete(this.itemData.images, index)
      this.saveItemData()
    },
    saveImgKey(index, imageKey) {
      this.itemData.images[index] = imageKey
      this.saveItemData()
    },
    saveItemData() {
      this.itemList.splice(this.itemIndex, 1, this.itemData)
      // 生成された商品データをstoreに保存する
      this.$store.commit('saveStoreItemList', this.itemList)
    },
    saveItemImage() {
      // 生成された商品データをstoreに保存する
      this.$store.commit(
        'saveStoreImageList',
        this.imageList.splice(this.itemIndex, 1, this.itemImage)
      )
    },
    openItemsListPage() {
      this.$router.push(
        'items_list'
      )
    },
    changeCatLvl0(catLvl0) {
      this.itemData.cat_lvl0 = catLvl0
    },
    changeCatLvl1(catLvl1) {
      this.itemData.cat_lvl1 = catLvl1
    },
    changeCatLvl2(catLvl2) {
      this.itemData.cat_lvl2 = catLvl2
    }
  }
}
</script>
<style></style>
