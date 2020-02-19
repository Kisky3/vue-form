// import Vue from 'vue'
import axios from "axios";

export default {
  // TODO: API化する API未定、現状はsettingsの中のリストを利用している
  getPrefectures(prefCode) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://www.land.mlit.go.jp/webland/api/CitySearch",
          {params: { area: prefCode }}
        )
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  },

  getCityList(prefCode) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://www.land.mlit.go.jp/webland/api/CitySearch", {
          params: { area: prefCode }
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  },

  // TODO: API化する API未定、現状は未実装
  getTownList(cityCode) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://www.land.mlit.go.jp/webland/api/CitySearch", {
          params: { area: cityCode }
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  },

  /* 最後のフォーム送信 */
  submitFromData(formData) {
    console.log('form data')
    console.log(formData)
    return new Promise((resolve, reject) => {
      /* API未定 */
      axios
        .post("/submit", formData)
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  },
};
