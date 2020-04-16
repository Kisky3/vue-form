<template>
  <div>
    <process-bar :step1="true" :step2="true" />
    <div class="c-page-container">
      <div class="c-page-title">
        <p>登録商品確認</p>
      </div>
      <div class="c-page-row row">
        <add-item @addItem="addItem()" />
        <div v-for="(item, index) in itemList" :key="index">
          <item-preview
            :item="item"
            :is-error="errorList.some(item => item.nullItemIndex === index)"
            :index="index"
            @onEdit="editItem(index)"
            @onDelete="deleteItem(index)"
          />
        </div>
      </div>
      <span v-show="itemList.length === 0" class="error-msg">
        商品を追加してください
      </span>
      <div
        v-for="errorMsg in errorList"
        v-show="errorList.length > 0"
        :key="errorMsg.nullItemIndex"
        class="error-msg-wrap"
      >
        <p class="error-msg">
          {{ errorMsg.text }}
        </p>
      </div>
      <arrow-btn
        :class="goToNext ? '' : 'disabled'"
        :disabled="!goToNext"
        @handleOnClick="openUserInformation()"
      >
        次へ
      </arrow-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

import { ItemData, ImageItem } from '../stores/types'

import ProcessBar from '../components/molecules/Processbar.vue'
import ItemPreview from '../components/molecules/ItemPreview.vue'
import ArrowBtn from '../components/molecules/ArrowBtn.vue'
import AddItem from '../components/molecules/ItemAdd.vue'

import { CategoryValue } from '../constants/types'
import categoryValueList from './../constants/categoryValueList'

import fieldItemList from './../constants/fieldItemList'
import { FieldItem } from '../constants/types'

type Data = {
  initialItemData: ItemData
  initialImageData: ImageItem[]
}
type ErrorItem = {
  text: string
  nullItemIndex: number
}

export default Vue.extend({
  name: 'ItemsList',
  components: {
    ProcessBar,
    ItemPreview,
    AddItem,
    ArrowBtn
  },
  data(): Data {
    return {
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
  computed: {
    ...mapState(['itemData', 'imageData', 'itemList', 'imageList']),
    goToNext(): boolean {
      return this.itemList.length > 0 && this.errorList.length === 0
    },
    /**
     * エラーメッセージの配列を返す
     * @return Array [{text: '商品1の商品名、カテゴリーは未入力です', nullItemIndex: 1}, {text: '商品2の{field names}は未入力です', nullItemIndex: 2}]
     */
    errorList(): ErrorItem[] {
      const errorMsgList: ErrorItem[] = []
      this.itemList.forEach((item: ItemData, index: number) => {
        const errorFields = []

        // カテゴリー必須チェック
        if (!item.cat_lvl0) {
          errorFields.push('カテゴリー 大項目')
        }
        if (!item.cat_lvl1) {
          errorFields.push('カテゴリー 中項目')
        }
        if (!item.cat_lvl2) {
          errorFields.push('カテゴリー 小項目')
        }

        // カテゴリー以外の項目の必須チェック
        if (
          item.cat_lvl0 !== null &&
          item.cat_lvl1 !== null &&
          item.cat_lvl2 !== null
        ) {
          const catObj: CategoryValue | undefined = categoryValueList.find(
            (cat: CategoryValue): boolean => cat.key === item.cat_lvl2
          )

          if (catObj === undefined) return

          const requiredFieldItem: FieldItem[] = fieldItemList.filter(
            (field: FieldItem): boolean =>
              field.category_id === catObj.value.cat2 && field.required
          )

          for (const field of requiredFieldItem) {
            if (!item[field.field_key]) {
              errorFields.push(field.field_name)
            }
          }
        }

        if (errorFields.length > 0) {
          errorMsgList.push({
            nullItemIndex: index,
            text: `商品${index + 1}の${errorFields.join('、')}が未入力です。`
          })
        }
      })

      return errorMsgList
    }
  },
  methods: {
    addItem(): void {
      /* 画像リストに空のデータを追加する */
      this.imageList.splice(this.itemList.length, 1, this.initialImageData)
      this.$store.commit('saveStoreImageList', this.imageList)

      /* 商品リストに空のデータを追加する */
      this.itemList.splice(this.itemList.length, 1, this.initialItemData)
      this.$store.commit('saveStoreItemList', this.itemList)

      this.$emit('routePush', {
        path: '/',
        query: {
          itemId: this.itemList.length - 1
        }
      })
    },
    editItem(itemId: number): void {
      this.$emit('routePush', {
        path: '/',
        query: { itemId }
      })
    },
    deleteItem(index: number): void {
      this.itemList.splice(index, 1)
      this.imageList.splice(index, 1)
      this.$store.commit('saveStoreImageList', this.imageList)
      this.$store.commit('saveStoreItemList', this.itemList)
    },
    openUserInformation(): void {
      if (this.goToNext) {
        this.$emit('routePush', 'user_information')
      }
    }
  }
})
</script>

<style scoped>
.error-msg-wrap {
  width: 90%;
}
</style>
