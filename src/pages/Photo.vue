<template>
  <div>
    <process-bar :step="true" />
    <div class="c-page-container">
      <div class="c-page-title">
        <p>商品写真登録</p>
      </div>
      <div class="c-page-row center" @click="fileClick()">
        <label class="c-photo-label">60秒で簡単査定!</label>
        <div class="c-photo-wrap">
          <img
            class="c-photo-mark"
            src="../assets/img/image-upload.png"
            alt=""
          />
          <div class="c-photo-btn">
            <span class="iconfont icon-camera" />
          </div>
          <div class="c-photo-add-btn">
            + 商品を追加する
          </div>
        </div>
        <span v-show="showErrorMsg" class="error-msg">{{ errorMsg }}</span>
        <input
          id="upload_file"
          multiple="multiple"
          type="file"
          accept="image/*"
          @change="onFileChange($event)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import imageApi from '@/api/image'
import { ImageItem } from '@/stores/types'
import { mapState } from 'vuex'
import ProcessBar from '../components/molecules/Processbar.vue'

type Data = {
  errorMsg: string | null
  showErrorMsg: boolean
  imageKey: number | null
}

export default Vue.extend({
  name: 'Photo',
  components: {
    ProcessBar
  },
  data(): Data {
    return {
      errorMsg: '',
      showErrorMsg: false,
      imageKey: null
    }
  },
  computed: {
    ...mapState(['itemData', 'imageData', 'itemList', 'imageList'])
  },
  methods: {
    fileClick(): void {
      const file: HTMLElement | null = document.getElementById('upload_file')
      if (file === null) return
      file.click()
    },
    onFileChange(e: VueEvent<HTMLInputElement> | DragEvent): void {
      const target = e instanceof DragEvent ? e.dataTransfer : e.target

      if (!target || !target.files) return

      const files: FileList = target.files

      if (files.length > 0 && files.length <= 3) {
        for (let index = 0; index < files.length; index++) {
          const file: File = files[index]
          this.createImage(file, index)
        }
      } else {
        this.setErrorMsg('exceed-image')
      }
    },

    createImage(file: File, index: number): void {
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
          this.setErrorMsg('no-image')
        } else {
          imageApi.getImgKey(file).then(imageKey => {
            this.saveImgKey(index, imageKey)
            this.saveImageData(obj, index)
          })
        }
      }
      reader.readAsDataURL(file)
    },
    saveImgKey(index: number, imageKey: string): void {
      this.itemData.images[index] = imageKey
      this.saveItemData()
    },
    saveItemData(): void {
      this.itemList.splice(0, 1, this.itemData)
      // 生成された商品データをstoreに保存する
      this.$store.commit('saveStoreItemList', this.itemList)
    },
    saveImageData(image: ImageItem, index: number) {
      this.imageData.splice(index, 1, image)
      this.imageList.splice(0, 1, this.imageData)
      // 生成された画像データをstoreに保存する
      this.$store.commit('saveStoreImageList', this.imageList)
      this.$emit('routePush', '/')
    },
    checkEmptyImage(image: ImageItem): boolean {
      return (
        image.thumnail === '' &&
        (image.uploadFile === null ||
          Object.keys(image.uploadFile).length === 0) &&
        image.name === ''
      )
    },
    setErrorMsg(errType: string): void {
      switch (errType) {
        case 'no-image':
          this.errorMsg = 'クリックして写真を登録してください'
          break
        case 'exceed-image':
          this.errorMsg = '画像3枚まで登録してください'
          break
        case 'upload-fail':
          this.errorMsg = '画像アップロード失敗しました、もう一回試してください'
          break
      }
      this.showErrorMsg = true
    }
  }
})
</script>
<style></style>
