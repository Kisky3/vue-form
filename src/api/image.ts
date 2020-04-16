import axios from 'axios'
import config from '../constants/config'

export default {
  /* 画像をアップロードした後返してくれた画像キーを取得する */
  async getImgKey(upload_file: File) {
    // imageKeyの取得
    const data = await this.getSignedURL(upload_file)

    // s3アップロード
    await this.uploadS3(data.uploadUrl, upload_file)

    return data.imageKey
  },

  getSignedURL(file: File) {
    const endpoint = config.AWS_LAMBDA_GETSIGNEDURL_ENDPOINT
    const payload = {
      contentType: file.type
    }
    return axios
      .post(endpoint, payload)
      .then(res => (res ? res.data : '/'))
      .catch(err => {
        console.error(err)
        return '/'
      })
  },

  async uploadS3(preSignedUrl: string, upload_file: File) {
    try {
      const headers = {
        'content-type': upload_file.type
      }
      await axios.put(preSignedUrl, upload_file, {
        headers
      })
    } catch (error) {
      console.error(error)
    }
  }
}
