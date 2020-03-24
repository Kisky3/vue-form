// import Vue from 'vue'
import axios from 'axios'
import imageApi from '../api/image'

export default {
  /* 画像をアップロードした後返してくれた画像キーを取得する */
  async getImgKey(upload_file) {
    return await this.getImageUploadResponse(upload_file).then((data) => {
      this.uploadS3(data.uploadUrl, upload_file)
      return data.imageKey
    })
  },

  async getImageUploadResponse(upload_file) {
    return await imageApi
      .getSignedURL(upload_file)
      .then(res => {
        return res.data
      })
      .catch(err => {
        this.setErrorMsg('upload-fail')
        console.error(err)
      })
  },

  async uploadS3(preSignedUrl, upload_file) {
    try {
      const headers = {
        'content-type': upload_file.type
      }
      await axios.put(preSignedUrl, upload_file, {
        headers: headers
      })
    } catch (error) {
      this.setErrorMsg('upload-fail')
      console.error(error)
    }
  },
}
