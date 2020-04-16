<template>
  <div>
    <process-bar :step1="true" />
    <loading v-show="showLoading" />
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
      @submit.prevent="goToNext()"
    >
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

        <div class="c-page-row underline">
          <div class="c-page-subtitle">
            <p>カテゴリー</p>
            <require-tag />
          </div>
          <item-categories
            :item-data="itemData"
            @submitCatLvl0="changeCatLvl0"
            @submitCatLvl1="changeCatLvl1"
            @submitCatLvl2="changeCatLvl2"
          />
        </div>

        <!--カテゴリー小項目の選択によって、追加項目を表示する-->
        <transition-wrapper :is-show="optionItems.length > 0">
          <div
            class="c-page-row"
            v-for="optionItem in optionItems"
            :key="optionItem.field_key"
          >
            <div class="c-page-subtitle">
              <p>{{ optionItem.field_name }}</p>
              <require-tag />
            </div>
            <template v-if="optionItem.type === 'text'">
              <input-text
                v-model="itemData[`${optionItem.field_key}`]"
                type="text"
                :placeholder="optionItem.hint"
                value="value"
                :name="optionItem.field_key"
                :label="optionItem.field_name"
                :rules="optionItem.rules"
              />
            </template>
            <template v-else-if="optionItem.type === 'select'">
              <div class="input-container">
                <validate-select
                  v-model="itemData[`${optionItem.field_key}`]"
                  :rules="optionItem.rules"
                  :name="optionItem.field_name"
                >
                  <option selected disabled="disabled" :value="null">
                    選択してください
                  </option>
                  <option
                    v-for="(item, index) in optionItem.options"
                    :key="`${optionItem.field_key}_${index}`"
                    :value="item"
                  >
                    {{ item }}
                  </option>
                </validate-select>
              </div>
            </template>
            <template v-else-if="optionItem.type === 'radio'">
              <input-radio
                v-model="itemData[`${optionItem.field_key}`]"
                :name="optionItem.field_name"
                :options="optionItem.options"
                :rules="optionItem.rules"
                :label="optionItem.field_name"
              />
            </template>
          </div>
        </transition-wrapper>

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>商品の状態</p>
            <option-tag />
          </div>
          <input-radio
            v-model="itemData.condition"
            name="condition"
            :options="condition_options"
          />
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
            value="value"
          />
        </div>
        <arrow-btn
          :class="invalid ? 'disabled' : ''"
          @handleOnClick="goToNext()"
        >
          次へ
        </arrow-btn>
      </div>
    </validation-observer>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { extend, ValidationObserver } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

/* 必須項目のエラーメッセージ設定 */
extend('required', { ...required, message: '{_field_}は必須項目です' })

import settings from './../constants/setting'
import fieldItemList from './../constants/fieldItemList'
import { SelectOption, FieldItem } from '../constants/types'
import ValidateSelect from '@/components/molecules/ValidateSelect.vue'
import { ImageItem, ItemData } from '../stores/types'

import ProcessBar from '../components/molecules/Processbar.vue'
import ItemCategories from './../components/molecules/ItemCategories.vue'
// import ImageUpload from './../components/molecules/ImageUpload.vue'
import TransitionWrapper from '@/components/molecules/TransitionWrapper.vue'

import Loading from '../components/atoms/Loading.vue'
import RequireTag from './../components/atoms/RequireTag.vue'
import OptionTag from './../components/atoms/OptionTag.vue'
import TextareaModel from './../components/atoms/TextareaModel.vue'
import InputText from './../components/atoms/InputText.vue'
import InputRadio from './../components/atoms/InputRadio.vue'
import ArrowBtn from './../components/molecules/ArrowBtn.vue'

import { CategoryValue } from '../constants/types'
import categoryValueList from './../constants/categoryValueList'

type Data = {
  showLoading: boolean
  itemIndex: number
  condition_options: SelectOption[]
  initialItemData: ItemData
  initialImageData: ImageItem[]
  optionItems: FieldItem[] | void | []
}

export default Vue.extend({
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
    ValidationObserver,
    ValidateSelect,
    TransitionWrapper
  },
  data(): Data {
    return {
      showLoading: true,
      itemIndex: this.$route.query.itemId
        ? Number(this.$route.query.itemId)
        : 0,
      condition_options: settings.itemConditionLabel,
      optionItems: [],
      initialItemData: {
        images: [],
        cat_lvl0: null,
        cat_lvl1: null,
        cat_lvl2: null,
        condition: '中古',
        item_comment: ''
      },
      initialImageData: [
        {
          thumnail: '',
          uploadFile: null,
          name: ''
        },
        {
          thumnail: '',
          uploadFile: null,
          name: ''
        },
        {
          thumnail: '',
          uploadFile: null,
          name: ''
        }
      ]
    }
  },
  mounted() {
    this.showLoading = false
    // itemIdが存在する場合かつ存在しないitemIndexの時はTOPページに戻す
    if (this.$route.query.itemId && !this.itemList[this.itemIndex]) {
      if (this.itemList.length > 0) {
        this.$emit('routePush', 'items_list')
      } else {
        this.$emit('routePush', '/', { useRouter: false })
      }
    }

    if (this.itemList.length > 0 && this.itemList[this.itemIndex].cat_lvl2) {
      this.optionItems =
        this.getOptionItemList(this.itemList[this.itemIndex].cat_lvl2) || []
    }
  },
  computed: {
    ...mapState(['itemList', 'imageList']),
    itemImage(): ImageItem[] {
      return this.itemList[this.itemIndex].images || this.initialImageData
    },
    itemData(): ItemData {
      return this.itemList[this.itemIndex] || this.initialItemData
    }
  },
  methods: {
    async goToNext() {
      const isValid = await (this.$refs
        .observer as ValidateObserverType).validate()
      if (isValid) {
        this.saveItemData()
        this.$emit('routePush', 'items_list')
      }
    },
    delImgKey(index: number): void {
      this.$delete(this.itemData.images, index)
      this.saveItemData()
    },
    saveImgKey(index: number, imageKey: string): void {
      this.itemData.images[index] = imageKey
      this.saveItemData()
    },
    saveItemData(): void {
      this.itemList.splice(this.itemIndex, 1, this.itemData)

      // 生成された商品データをstoreに保存する
      this.$store.commit('saveStoreItemList', this.itemList)
    },
    saveItemImage(): void {
      // 生成された商品データをstoreに保存する
      this.$store.commit(
        'saveStoreImageList',
        this.imageList.splice(this.itemIndex, 1, this.itemImage)
      )
    },
    changeCatLvl0(catLvl0: string): void {
      this.itemData.cat_lvl0 = catLvl0
      this.clearItemData()
    },
    changeCatLvl1(catLvl1: string): void {
      this.itemData.cat_lvl1 = catLvl1
      this.clearItemData()
    },
    changeCatLvl2(catLvl2: string): void {
      this.optionItems = this.getOptionItemList(catLvl2)
        ? this.getOptionItemList(catLvl2)
        : []
      this.clearItemData()

      this.itemData.cat_lvl2 = catLvl2
    },
    clearItemData() {
      for (const key of Object.keys(this.itemData)) {
        if (
          key === 'cat_lvl0' ||
          key === 'cat_lvl1' ||
          key === 'cat_lvl2' ||
          key === 'condition' ||
          key === 'item_comment'
        ) {
          continue
        }
        delete this.itemData[key]
      }
      this.saveItemData()
    },
    getOptionItemList(catLvl2: string): FieldItem[] | void {
      const catObj: CategoryValue | undefined = categoryValueList.find(
        cat => cat.key === catLvl2
      )

      if (catObj === undefined) {
        return
      }

      return fieldItemList.filter((field: FieldItem) => {
        return field.category_id === catObj.value.cat2
      })
    }
  }
})
</script>
<style></style>
