// import Vue from 'vue'
import axios from "axios";

export default {
  getCityList(areaCode) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://www.land.mlit.go.jp/webland/api/CitySearch",
          {params: { area: areaCode }}
        )
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  }
};
