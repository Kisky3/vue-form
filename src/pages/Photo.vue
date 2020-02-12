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
          <img class="c-photo-mark" src="../assets/img/image-upload.png" alt="">
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
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import ProcessBar from "../components/molecules/Processbar";
export default {
  name: "Photo",
  data() {
    return {
      errorMsg: "",
      showErrorMsg: false,
      step: 0,
    };
  },
  components: {
    ProcessBar
  },
  computed: {
    ...mapGetters({
      imageData: "itemInformation/getImageData",
      imageList: "itemInformation/getImageList"
    })
  },
  methods: {
    ...mapActions({
      saveStoreImageData: "itemInformation/saveImageData",
      saveStoreImageList: "itemInformation/saveImageList"
    }),
    saveImageData(image, index) {
      /* 各商品の画像オブジェクトに保存 */
      this.imageData.splice(index, 1, image);
      this.saveStoreImageData(this.imageData);

      /* 全体の商品イメージリストに保存する */
      this.imageList.splice(0, 1, this.imageData);
      this.saveStoreImageList(this.imageList);
      this.submitImage
      /* 商品情報ページに遷移 */
      this.openItemInformationPage();
      
    },
    async submitImage(upload_file) {
      let preSignedUrl = await this.getPresignedUrl(upload_file);

      this.imageKey = await this.uploadS3(preSignedUrl, upload_file);
      this.$emit("saveImgKey", this.index, this.imageKey);
    },
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
    createImage: function(file, index) {
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
          vm.saveImageData(obj, index);
        }
      };
      reader.readAsDataURL(file);
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
      }
      this.showErrorMsg = true;
    }
  }
};
</script>
<style></style>
