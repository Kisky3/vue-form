<template>
  <div>
    <div :class="{ 'c-item-wrap': true, error: isError }">
      <div class="c-item-label">
        <span>商品{{ index + 1 }}</span>
        <br />
        {{ item.title }}
      </div>
      <!--ABテストのため、画像componentを外す
      <div class="c-item-container">
        <img
          :src="ItemPrevieimage"
          alt=""
          class="c-upload-img">
        <span class="iconfont icon-check item-check" />
      </div>-->
      <span v-show="!isError" class="iconfont icon-check item-check" />
      <div class="c-item-edit-panel">
        <a class="c-edit-button" @click="editItem()">編集</a>
        <a class="c-edit-button" @click="deleteItem()">削除</a>
      </div>
    </div>
    <confirm-dialog
      v-show="showDialog"
      @cancleDialog="cancleDialog()"
      @handleDialog="handleDialog()"
    />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { ItemData } from '@/stores/types'
// import defaultImage from '../../assets/img/default.png'
import ConfirmDialog from '@/components/atoms/ConfirmDialog.vue'

type Data = {
  showDialog: boolean
}

export default Vue.extend({
  name: 'ItemPreview',
  components: {
    ConfirmDialog
  },
  props: {
    item: Object as PropType<ItemData>,
    index: [Number, Object],
    isError: Boolean
  },
  data(): Data {
    return {
      showDialog: false
    }
  },
  computed: {
    /*ItemPrevieimage() {
      let imageExist = this.imageList[this.index].find(
        imageObj => imageObj.thumnail != ''
      )
      return this.imageList[this.index] !== undefined &&
        imageExist !== undefined
        ? imageExist.thumnail
        : defaultImage
    }*/
  },
  methods: {
    editItem(): void {
      this.$emit('onEdit')
    },
    cancleDialog(): void {
      this.showDialog = false
    },
    handleDialog(): void {
      this.showDialog = false
      this.$emit('onDelete')
    },
    deleteItem(): void {
      this.showDialog = true
    }
  }
})
</script>
<style></style>
