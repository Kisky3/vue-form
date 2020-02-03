// import Vue from 'vue'
import axios from "axios";

export default {
  // API未定、現状はsettingsの中のリストを利用している
  getPrefectures(areaCode) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://www.land.mlit.go.jp/webland/api/CitySearch",
          {params: { area: areaCode }}
        )
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  },

  getCityList(areaCode) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://www.land.mlit.go.jp/webland/api/CitySearch", {
          params: { area: areaCode }
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  }
};
