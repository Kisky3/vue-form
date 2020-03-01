import axios from 'axios'
import config from '../settings/config'

export default {
    getSignedURL(file) {
        let endpoint = config.AWS_LAMBDA_GETSIGNEDURL_ENDPOINT
        let payload = {
            contentType: file.type
        }
        return axios.post(endpoint, payload)
            .then((res) => {
                console.log(res)
                return Promise.resolve(res || '/')
            })
            .catch((err) => {
                console.error(err)
                return Promise.reject('/')
            })
    }
}
