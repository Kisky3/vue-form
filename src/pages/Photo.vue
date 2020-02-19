<template>
  <div>
    <process-bar :step="step" />
    <div class="c-page-container">
      <div class="c-page-title">
        <p>商品写真登録</p>
      </div>
      <div class="c-page-row center" @click="fileClick()">
        <label class="c-photo-label"> 60秒で簡単査定!</label>
        <div class="c-photo-wrap">
          <img
            class="c-photo-mark"
            src="../assets/img/image-upload.png"
            alt=""
          />
          <div class="c-photo-btn">
            <span class="iconfont icon-camera"></span>
          </div>
          <div class="c-photo-add-btn">
            + 商品を追加する
          </div>
        </div>
        <span class="error-msg" v-show="showErrorMsg">{{ errorMsg }}</span>
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

<script>
import axios from "axios";
import common from "../js/common";
import { mapState } from "vuex";
import lambda from "../api/lambda";
import ProcessBar from "../components/molecules/Processbar";

export default {
  name: "Photo",
  data() {
    return {
      errorMsg: "",
      showErrorMsg: false,
      step: 0,
      imageKey: null
    };
  },
  components: {
    ProcessBar
  },
  computed: {
    ...mapState(["itemData","imageData","itemList","imageList"]),
  },
  methods: {
    fileClick: function() {
      $("#upload_file").click();
    },
    onFileChange: function(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (files.length > 0 && files.length <= 3) {
        files.forEach((file, index) => {
          this.createImage(file, index);
        });
      } else {
        this.setErrorMsg("exceed-image");
      }
    },
    async createImage(file, index) {
      var reader = new FileReader();
      var vm = this;
      var obj = {};
      reader.onload = function(e) {
        obj.thumnail = e.target.result;
        obj.uploadFile = file;
        obj.name = file.name;

        // アップロード成功すれば保存する
        if (vm.checkEmptyImage(obj)) {
          vm.setErrorMsg("no-image");
        } else {
          let imageKey = common.getImgKey(file);
          vm.saveImageData(obj, index);
          vm.saveImgKey(index, imageKey)
        }
      };
      reader.readAsDataURL(file);
    },
    saveImgKey(index, imageKey) {
      this.itemData.images[index] = imageKey;
      this.saveItemData();
    },
    saveItemData() {
      this.itemList.splice(0, 1, this.itemData);
      // 生成された商品データをstoreに保存する
      this.$store.commit('saveStoreItemList', this.itemList)
    },
    saveImageData(image, index) {
      this.imageData.splice(index, 1, image);
      this.imageList.splice(0, 1, this.imageData);
      // 生成された画像データをstoreに保存する
      this.$store.commit('saveStoreImageList', this.imageList)
      this.openItemInformationPage();
    },
    checkEmptyImage: function(image) {
      return (
        image.thumnail === "" &&
        Object.keys(image.uploadFile).length === 0 &&
        image.name === ""
      );
    },
    openItemInformationPage() {
      this.$router.push(
        "item_information",
        () => {},
        () => {}
      );
    },
    setErrorMsg: function(errType) {
      switch (errType) {
        case "no-image":
          this.errorMsg = "クリックして写真を登録してください";
          break;
        case "exceed-image":
          this.errorMsg = "画像3枚まで登録してください";
          break;
        case "upload-fail":
          this.errorMsg =
            "画像アップロード失敗しました、もう一回試してください";
          break;
      }
      this.showErrorMsg = true;
    }
  }
};
</script>
<style></style>
