<template>
  <div class="c-page-container">
    <div class="c-page-title">
      <p>商品１情報</p>
    </div>
    <div class="c-page-row center" @click="fileClick()">
      <p>スマホで簡単査定</p>
      <button class="c-photo-btn">
        <span class="iconfont icon-camera"></span>
      </button>
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
</template>

<script>
export default {
  name: "Photo",
  data() {
    return {
      errorMsg: "",
      showErrorMsg: false,
      imageList: this.$store.getters["itemInformation/getImageList"]
    };
  },
  methods: {
    saveImageList(image, index) {
      this.imageList.splice(index, 1, image);
      this.$store.dispatch("itemInformation/saveImageList", this.imageList);
      this.openItemInformationPage();
    },
    fileClick: function() {
      $("#upload_file").click();
    },
    onFileChange: function(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (files.length > 0) {
        files.forEach((file, index) => {
          this.createImage(file, index);
        });
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
          vm.setErrorMsg();
        } else {
          vm.saveImageList(obj, index);
        }
      };
      reader.readAsDataURL(file);
    },
    checkEmptyImage: function(image) {
      return (
        image.thumnail === "" && Object.keys(image.uploadFile).length === 0 && image.name === ""
      );
    },
    openItemInformationPage() {
      this.$router.push(
        "item_information",
        () => {},
        () => {}
      );
    },
    setErrorMsg: function() {
      this.errorMsg = "クリックして写真を登録してください";
      this.showErrorMsg = true;
    }
  }
};
</script>
<style>
.error-msg {
  color: red;
  font-size: 16px;
  margin-top: 10px;
}
</style>
