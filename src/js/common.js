// import Vue from 'vue'
import axios from "axios";
import lambda from "../api/lambda"

export default {
  /* 画像をアップロードした後返してくれた画像キーを取得する */
  async getImgKey(upload_file) {
    let imageUploadResponse = await this.getImageUploadResponse(upload_file);
    let preSignedUrl = imageUploadResponse.uploadUrl;
    let imageKey = imageUploadResponse.imageKey;
    /* 画像をアップロード */
    this.uploadS3(preSignedUrl, upload_file);
    return imageKey
  },

  async getImageUploadResponse(upload_file) {
    return await lambda
      .getSignedURL(upload_file)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        this.setErrorMsg("upload-fail");
        console.log(err);
      });
  },

  async uploadS3(preSignedUrl, upload_file) {
    try {
      const headers = {
        "content-type": upload_file.type
      };
      await axios.put(preSignedUrl, upload_file, {
        headers: headers
      });
    } catch (error) {
      this.setErrorMsg("upload-fail");
      console.log(error);
    }
  },
};
