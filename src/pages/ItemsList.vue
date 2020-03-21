<template>
  <div>
    <process-bar
      :step1="active"
      :step2="active" />
    <div class="c-page-container">
      <div class="c-page-title">
        <p>登録商品確認</p>
      </div>
      <div class="c-page-row row">
        <add-item @addItem="addItem()" />
        <div
          v-for="(item, index) in itemList"
          :key="index">
          <item-preview
            :item="item"
            :isError="errorList.some(item => item.nullItemIndex === index)"
            :index="index" />
        </div>
      </div>
      <span v-show="itemList.length === 0" class="error-msg">商品を追加してください</span>
      <div class="error-msg-wrap" v-show="errorList.length > 0" v-for="errorMsg in errorList" :key="errorMsg">
        <p class="error-msg">{{errorMsg.text}}</p>
      </div>
      <arrow-btn
        :class="goToNext ? '' : 'disabled'"
        :disabled="!goToNext"
        @handleOnClick="openUserInformation()">
        次へ
      </arrow-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProcessBar from '../components/molecules/Processbar'
import ItemPreview from '../components/molecules/ItemPreview'
import ArrowBtn from '../components/molecules/ArrowBtn'
import AddItem from '../components/molecules/ItemAdd'
import setting from '../constants/setting'

export default {
  name: 'ItemsList',
  components: {
    ProcessBar,
    ItemPreview,
    AddItem,
    ArrowBtn
  },
  data() {
    return {
      active: 'active',
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
  computed: {
    ...mapState(['itemData', 'imageData', 'itemList', 'imageList']),
    goToNext() {
      return this.itemList.length > 0 && this.errorList.length === 0
    },
    /**
     * エラーメッセージの配列を返す
     * @return Array [{text: '商品1の商品名、カテゴリーは未入力です', nullItemIndex: 1}, {text: '商品2の{field names}は未入力です', nullItemIndex: 2}]
     */
    errorList() {
      let errorMsgList = []
      this.itemList.forEach((item, index) => {
        let errorFields = []
        for (const label of Object.keys(item)) {
          if (
            label in setting.requireItemLabel &&
            (item[label] === '' || item[label] === null)
          ) {
            errorFields.push(setting.requireItemLabel[label])
          }
        }
        if (errorFields.length > 0) {
          errorMsgList.push({
            nullItemIndex: index,
            text: `商品${index+1}の${errorFields.join('、')}が未入力です。`
          })
        }
      })

      return errorMsgList
    }
  },
  methods: {
    addItem: function() {
      this.$router.push({
        path: '/',
        query: {
          itemId: this.itemList.length
        }
      })

      /* 画像リストに空のデータを追加する */
      this.imageList.splice(this.itemList.length, 1, this.initialImageData)
      this.$store.commit('saveStoreImageList', this.imageList)

      /* 商品リストに空のデータを追加する */
      this.itemList.splice(this.itemList.length, 1, this.initialItemData)
      this.$store.commit('saveStoreItemList', this.itemList)
    },
    openUserInformation: function() {
      if (this.goToNext) {
        this.$router.push('user_information')
      }
    }
  }
}
</script>

<style scoped>
.error-msg-wrap {
  width: 90%
}
</style>
