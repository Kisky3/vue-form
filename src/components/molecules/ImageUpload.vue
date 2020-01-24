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
export default {
  name: "ImageUpload",
  props: ["index", "image"],
  data() {
    return {
      imageList: this.$store.getters["itemInformation/getImageList"]
    };
  },
  methods: {
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
      vm.saveImageStore(vm.image);
      reader.readAsDataURL(file);
    },
    saveImageStore: function(image) {
      // this.$emit("saveImage", index, image);
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
    },
    submitImage: function(e) {
      var formData = new FormData();
      formData.append("number", "123456");
      for (var i = 0; i < this.images.length; i++) {
        formData.append("yourimg" + i, this.images[i].uploadFile);
      }
      var config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      axios
        .post("post.php", formData, config)
        .then(function(response) {
          // response 処理
          console.log(response);
        })
        .catch(function(error) {
          // error 処理
        });
    }
  }
};
</script>
<style>
.c-upload-btn {
  width: 150px;
  height: 150px;
  border: 1px dashed #dedede;
  margin: 15px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
}

.c-upload-btn.active {
  border: 2px solid #b1b1b1;
  box-shadow: 0px 0px 5px 3px rgb(232, 232, 232);
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
  background-color: #eee;
  cursor: pointer;
  height: 100%;
}

.c-close_button::before {
  content: "\00D7";
}

.c-close_button {
  position: absolute;
  width: 100%;
  height:30%;
  left: 0;
  bottom: 0;
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;
}

/* sp レスポンス対応 */
@media only screen and (max-width: 767px) {
  .c-upload-btn {
    width: 25vw;
    height: 25vw;
    margin: 5px 5px 5px 0;
  }

  .c-close_button {
    left:-2px;
    bottom: 2px;
  }

  .c-upload-camera {
    font-size: 40px;
  }
}
</style>
