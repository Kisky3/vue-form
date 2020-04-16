<template>
  <div class="c-upload-btn" @click="fileClick">
    <span
      v-show="!previewImage(image)"
      class="iconfont icon-camera c-upload-camera"
    />
    <div v-if="previewImage(image)">
      <div class="c-upload-btn active">
        <img :src="image.thumnail" class="c-upload-img" />
      </div>
      <a class="c-close_button" @click="deleteImage" />
    </div>
    <input
      :id="'upload_' + index"
      type="file"
      accept="image/*"
      @change="onFileChange($event)"
    />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { ItemData, ImageItem } from '@/stores/types'
import { mapState } from 'vuex'
import imageApi from '@/api/image'

type Data = {
  imageKey: number | null
}

export default Vue.extend({
  name: 'ImageUpload',
  props: {
    index: Number,
    image: Object as PropType<ImageItem>,
    itemIndex: Number
  },
  data(): Data {
    return {
      imageKey: null
    }
  },
  computed: {
    ...mapState(['itemList', 'imageList']),
    itemData(): ItemData {
      return this.itemList[this.itemIndex]
    }
  },
  methods: {
    fileClick(): void {
      const file: HTMLElement | null = document.getElementById(
        'upload_' + this.index
      )
      if (file === null) return
      file.click()
    },
    onFileChange(e: VueEvent<HTMLInputElement> | DragEvent): void {
      const target = e instanceof DragEvent ? e.dataTransfer : e.target
      if (!target || !target.files) return
      this.createImage(target.files[0], this.index)
    },
    async createImage(file: File, index: number) {
      const reader: FileReader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (!e.target) return

        const obj: ImageItem = {
          thumnail: e.target.result,
          uploadFile: file,
          name: file.name
        }

        // アップロード成功すれば保存する
        if (this.checkEmptyImage(obj)) {
          // this.setErrorMsg('no-image')
        } else {
          imageApi.getImgKey(file).then(imageKey => {
            this.saveImgKey(index, imageKey)
            this.saveImageData(obj)
          })
        }
      }
      reader.readAsDataURL(file)
    },
    checkEmptyImage(image: ImageItem): boolean {
      return (
        image.thumnail === '' &&
        (image.uploadFile === null ||
          Object.keys(image.uploadFile).length === 0) &&
        image.name === ''
      )
    },
    saveImgKey(index: number, imageKey: string): void {
      this.itemData.images[index] = imageKey
      this.saveItemData()
    },
    saveImageData(image: ImageItem): void {
      /* 各商品の画像オブジェクトに保存 */
      const obj = this.imageList[this.itemIndex]
      obj.splice(this.index, 1, image)

      this.imageList.splice(this.itemIndex, 1, obj)
      this.$store.commit('saveStoreImageList', this.imageList)
    },
    saveItemData(): void {
      this.itemList.splice(this.itemIndex, 1, this.itemData)
      // 生成された商品データをstoreに保存する
      this.$store.commit('saveStoreItemList', this.itemList)
    },
    previewImage(image: ImageItem): boolean {
      return !(
        image.thumnail === '' &&
        (image.uploadFile === null ||
          Object.keys(image.uploadFile).length === 0) &&
        image.name === ''
      )
    },
    deleteImage(event: VueEvent<HTMLAnchorElement>): void {
      event.stopPropagation()
      const obj = this.imageList[this.itemIndex]
      obj.splice(this.index, 1, this.image)
      /* 画像プレビュー用 */
      this.$store.commit(
        'saveStoreImageList',
        this.imageList.splice(this.itemIndex, 1, obj)
      )
      /* 画像送信用 */
      this.$emit('delImgKey', this.index, this.imageKey)
    }
  }
})
</script>
<style>
.c-upload-btn {
  width: 180px;
  height: 180px;
  border: 1px dashed #dedede;
  margin: 15px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
}

.c-upload-btn.active {
  border: solid 1px #e1e1e1;
}

.c-upload-camera {
  font-size: 60px;
  color: #dedede;
  font-weight: bold;
}

.upload_warp {
  height: 20vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.c-upload-img {
  max-width: 100%;
  float: left;
  line-height: 100px;
  display: table-cell;
  text-align: center;
  background-color: #fff;
  height: 100%;
}

.c-close_button::before {
  content: '\00D7';
}

.c-close_button {
  position: absolute;
  width: 100%;
  height: 30%;
  left: 0;
  bottom: 0;
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* sp レスポンス対応 */
@media only screen and (max-width: 767px) {
  .c-upload-btn {
    width: 25vw;
    height: 25vw;
  }

  .c-upload-camera {
    font-size: 40px;
  }
}
</style>
