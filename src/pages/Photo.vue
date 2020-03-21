<template>
  <div>
    <process-bar :step="step" />
    <div class="c-page-container">
      <div class="c-page-title">
        <p>商品写真登録</p>
      </div>
      <div
        class="c-page-row center"
        @click="fileClick()">
        <label class="c-photo-label"> 60秒で簡単査定!</label>
        <div class="c-photo-wrap">
          <img
            class="c-photo-mark"
            src="../assets/img/image-upload.png"
            alt="">
          <div class="c-photo-btn">
            <span class="iconfont icon-camera" />
          </div>
          <div class="c-photo-add-btn">
            + 商品を追加する
          </div>
        </div>
        <span
          v-show="showErrorMsg"
          class="error-msg">{{ errorMsg }}</span>
        <input
          id="upload_file"
          multiple="multiple"
          type="file"
          accept="image/*"
          @change="onFileChange($event)">
      </div>
    </div>
  </div>
</template>

<script>
import common from '../js/common'
import { mapState } from 'vuex'
import ProcessBar from '../components/molecules/Processbar'

export default {
  name: 'Photo',
  components: {
    ProcessBar
  },
  data() {
    return {
      errorMsg: '',
      showErrorMsg: false,
      step: 0,
      imageKey: null
    }
  },
  computed: {
    ...mapState(['itemData', 'imageData', 'itemList', 'imageList']),
  },
  methods: {
    fileClick: function() {
      document.getElementById('#upload_file').click()
    },
    onFileChange: function(e) {
      let files = e.target.files || e.dataTransfer.files
      if (files.length > 0 && files.length <= 3) {
        files.forEach((file, index) => {
          this.createImage(file, index)
        })
      } else {
        this.setErrorMsg('exceed-image')
      }
    },
    async createImage(file, index) {
      let reader = new FileReader()
      let vm = this
      let obj = {}
      reader.onload = function(e) {
        obj.thumnail = e.target.result
        obj.uploadFile = file
        obj.name = file.name

        // アップロード成功すれば保存する
        if (vm.checkEmptyImage(obj)) {
          vm.setErrorMsg('no-image')
        } else {
          common.getImgKey(file).then(imageKey => {
            vm.saveImageData(obj, index)
            vm.saveImgKey(index, imageKey)
          })
        }
      }
      reader.readAsDataURL(file)
    },
    saveImgKey(index, imageKey) {
      this.itemData.images[index] = imageKey
      this.saveItemData()
    },
    saveItemData() {
      this.itemList.splice(0, 1, this.itemData)
      // 生成された商品データをstoreに保存する
      this.$store.commit('saveStoreItemList', this.itemList)
    },
    saveImageData(image, index) {
      this.imageData.splice(index, 1, image)
      this.imageList.splice(0, 1, this.imageData)
      // 生成された画像データをstoreに保存する
      this.$store.commit('saveStoreImageList', this.imageList)
      this.openItemInformationPage()
    },
    checkEmptyImage: function(image) {
      return (
        image.thumnail === '' &&
        Object.keys(image.uploadFile).length === 0 &&
        image.name === ''
      )
    },
    openItemInformationPage() {
      this.$router.push(
        '/'
      )
    },
    setErrorMsg: function(errType) {
      switch (errType) {
      case 'no-image':
        this.errorMsg = 'クリックして写真を登録してください'
        break
      case 'exceed-image':
        this.errorMsg = '画像3枚まで登録してください'
        break
      case 'upload-fail':
        this.errorMsg =
            '画像アップロード失敗しました、もう一回試してください'
        break
      }
      this.showErrorMsg = true
    }
  }
}
</script>
<style></style>
