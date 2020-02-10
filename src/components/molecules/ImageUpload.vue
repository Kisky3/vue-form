<template>
  <div class="c-upload-btn" @click="fileClick">
    <span
      v-show="!previewImage(image)"
      class="iconfont icon-camera c-upload-camera"
    ></span>
    <div v-if="previewImage(image)">
      <div class="c-upload-btn active">
        <img :src="image.thumnail" class="c-upload-img" />
      </div>
      <a class="c-close_button" @click="deleteImage"></a>
    </div>
    <input
      :id="'upload_' + index"
      type="file"
      accept="image/*"
      @change="onFileChange($event)"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import lambda from "../../api/lambda";
import axios from "axios";
export default {
  name: "ImageUpload",
  props: ["index", "image", "itemIndex"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      imageList: "itemInformation/getImageList",
      itemList: "itemInformation/getItemList"
    })
  },
  methods: {
    ...mapActions({
      saveStoreImageList: "itemInformation/saveImageList"
    }),
    fileClick: function() {
      $("#upload_" + this.index).click();
    },
    onFileChange: function(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = function(e) {
        vm.image.thumnail = e.target.result;
        vm.image.uploadFile = file;
        vm.image.name = file.name;
      };
      vm.previewImage(vm.image);
      reader.readAsDataURL(file);
      vm.submitImage(file);
      vm.saveImageStore(vm.image);
    },
    saveImageStore: function(image) {
      /* 各商品の画像オブジェクトに保存 */
      let obj = this.imageList[this.itemIndex];

      obj.splice(this.index, 1, image);
      this.imageList.splice(this.itemIndex, 1, obj);
      this.saveStoreImageList(this.imageList);
    },
    previewImage: function(image) {
      return !(
        image.thumnail === "" &&
        Object.keys(image.uploadFile).length === 0 &&
        image.name === ""
      );
    },
    deleteImage: function() {
      this.image = {
        thumnail: "",
        uploadFile: {},
        name: ""
      };

      event.stopPropagation();
      let obj = this.imageList[this.itemIndex];
      obj.splice(this.index, 1, this.image);
      this.image = obj;
      this.saveStoreImageList(this.imageList.splice(this.itemIndex, 1, obj));
    },
    async getPresignedUrl(file) {
      return await lambda
        .getSignedURL(file)
        .then(res => {
          return res.data.url;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async uploadS3(preSignedUrl, up_file) {
      try {
        const headers = {
          "content-type": "image/jpeg"
        };

        let response = await axios.put(preSignedUrl, up_file, {
          headers: headers
        });
        console.log("S3 アップロード response");
        console.log(response);
        console.log("S3 アップロード 成功");
        let imageKey;
        if (preSignedUrl && preSignedUrl.indexOf("?") != -1) {
          imageKey = preSignedUrl.split("?")[0];
          console.log("imageKey");
          console.log(imageKey);
        }
        return imageKey;
      } catch (error) {
        console.log(error);
        console.log("S3 アップロード エラー");
      }
    },
    async submitImage(upload_file) {
      let preSignedUrl = await this.getPresignedUrl(upload_file);
      console.log("preSignedUrl");
      console.log(preSignedUrl);
      let imageKey = await this.uploadS3(preSignedUrl, upload_file);
      console.log(imageKey)
      this.$emit('saveImageKey')
    }
  }
};
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
  border: 2px solid #b1b1b1;
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
  cursor: pointer;
  height: 100%;
}

.c-close_button::before {
  content: "\00D7";
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
