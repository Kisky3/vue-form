// import Vue from 'vue'
import axios from "axios";

export default {
  getPrefecturesList() {
    return new Promise((resolve, reject) => {
      axios
        .get("http://geoapi.heartrails.com/api/json?method=getPrefectures")
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
  }
};
