<template>
  <div class="input-container">
    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>県名</p>
        <require-tag />
      </div>
      <div class="input-container">
        <div class="select-wrap">
          <i class="iconfont icon-pulldown"></i>
          <select
            v-model="user.prefectures"
            @change="changeCityList(user.prefectures)"
          >
            <option disabled="disabled" :value="null">
              都道府県を選択してください</option
            >
            <option
              v-for="(pref, index) in prefectureList"
              :value="pref.prefCode"
              :key="index"
              >{{ pref.prefName }}</option
            >
          </select>
        </div>
      </div>
    </div>

    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>市区町村</p>{{cityList}}
        <require-tag />
      </div>
      <div class="input-container">
        <div class="select-wrap">
          <i class="iconfont icon-pulldown"></i>
          <select
            v-model="user.cities"
            @change="(townsList = null), submitCities(user.cities)"
          >
            <option disabled="disabled" :value="null">
              市区町村を選択してください</option
            >
            <option
              v-for="(city, index) in cityList"
              :value="city.prefCode"
              :key="index"
              >{{ city.prefName }}</option
            >
          </select>
        </div>
      </div>
    </div>

    <!-- 商用の適切のAPIはまだ決めてないため、実装は一旦止まる
    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>町域名</p>
        <require-tag />
      </div>
      <div class="input-container">
        <div class="select-wrap">
          <i class="iconfont icon-pulldown"></i>
          <select id="geoapi-towns" name="geoapi-towns">
            <option value="町域を選択してください">選択してください</option>
          </select>
        </div>
      </div>
    </div>-->
  </div>
</template>
<style>
.select-wrap {
  margin: 0 0 10px 0;
  position: relative;
}
.icon-pulldown {
  position: absolute;
  right: 5px;
  top: 50%;
  z-index: 2;
  color: #999;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
/* カテゴリーアニメーション */
.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.5s;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}
</style>

<script>
// import { ValidationProvider, extend } from "vee-validate";
import RequireTag from "./../atoms/RequireTag";
import api from "@/api/info";
import settings from "./../../settings/setting";

export default {
  name: "UserCities",
  props: ["itemData"],
  components: {
    // ValidationProvider
    RequireTag
  },
  data() {
    return {
      user: {
        prefectures: null,
        cities: null,
        town: null
      },
      cityList: []
    };
  },
  computed: {
    prefectureList: function() {
      return settings.prefectureList;
    }
  },
  methods: {
    changeCityList: function(prefCode) {
      const qs = require("qs");
      return new Promise((resolve, reject) => {
        api
          .getCityList(prefCode)
          .then(data => {
            resolve(data, data);
            this.cityList = data;
          })
          .catch(error => reject(error));
      });
    }
  }
};
</script>
