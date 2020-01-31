// import Vue from 'vue'
import axios from "axios";

export default {
  getPrefecturesList() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://www.land.mlit.go.jp/webland/api/CitySearch?area=13")
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  }
};
