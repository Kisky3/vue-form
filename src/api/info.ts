import axios, { AxiosPromise } from 'axios'
import { CityListResponseData } from './typs'

export default {
  // TODO: API化する API未定、現状はsettingsの中のリストを利用している
  getPrefectures(prefCode: string): AxiosPromise<CityListResponseData[]> {
    return axios
      .get<CityListResponseData[]>(
        'https://www.land.mlit.go.jp/webland/api/CitySearch',
        { params: { area: prefCode } }
      )
      .then(res => res.data)
      .catch(error => error)
  },

  getCityList(prefCode: string): AxiosPromise<CityListResponseData[]> {
    return axios
      .get<CityListResponseData[]>(
        'https://www.land.mlit.go.jp/webland/api/CitySearch',
        { params: { area: prefCode } }
      )
      .then(res => res.data)
      .catch(error => error)
  },

  // TODO: API化する API未定、現状は未実装
  getTownList(cityCode: string): AxiosPromise<CityListResponseData[]> {
    return axios
      .get<CityListResponseData[]>(
        'https://www.land.mlit.go.jp/webland/api/CitySearch',
        { params: { area: cityCode } }
      )
      .then(res => res.data)
      .catch(error => error)
  },

  /* 最後のフォーム送信 */
  submitFromData(formData: FormData): AxiosPromise {
    return axios.post('/_v2f2_dev/post', formData).then(res => res.data)
  }
}
