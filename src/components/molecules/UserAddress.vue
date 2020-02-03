<template>
  <div>
    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>都道府県</p>
        <require-tag />
      </div>
      <div class="input-container">
        <div class="select-wrap">
          <i class="iconfont icon-pulldown"></i>
          <validation-provider rules="required" name="都道府県">
            <div slot-scope="ProviderProps">
              <select
                v-model="user.prefectures"
                @change="changeCityList(user.prefectures)"
                :class="ProviderProps.errors[0] ? 'error-active' : ''"
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
              <div class="error-message">
                <span
                  v-show="ProviderProps.errors[0]"
                  class="iconfont icon-warn"
                ></span>
                {{ ProviderProps.errors[0] }}
              </div>
            </div>
          </validation-provider>
        </div>
      </div>
    </div>

    <transition name="expand">
      <div class="input-container" v-show="user.prefectures !== null">
        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>市区町村</p>
            <require-tag />
          </div>
          <div class="input-container">
            <div class="select-wrap">
              <i class="iconfont icon-pulldown"></i>
              <validation-provider rules="required" name="市区町村">
                <div slot-scope="ProviderProps">
                  <select
                    v-model="user.cities"
                    @change="townsList = null"
                    :class="ProviderProps.errors[0] ? 'error-active' : ''"
                  >
                    <option disabled="disabled" :value="null">
                      市区町村を選択してください</option
                    >
                    <option
                      v-for="(city, index) in cityList"
                      :value="city.id"
                      :key="index"
                      >{{ city.name }}</option
                    >
                  </select>
                  <div class="error-message">
                    <span
                      v-show="ProviderProps.errors[0]"
                      class="iconfont icon-warn"
                    ></span>
                    {{ ProviderProps.errors[0] }}
                  </div>
                </div>
              </validation-provider>
            </div>
          </div>
        </div>
      </div>
    </transition>

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
  transition: opacity 1s;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}
</style>

<script>
import { ValidationProvider, extend } from "vee-validate";
import RequireTag from "./../atoms/RequireTag";
import api from "@/api/info";
import settings from "./../../settings/setting";

export default {
  name: "UserCities",
  components: {
    ValidationProvider,
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
      return new Promise((resolve, reject) => {
        api
          .getCityList(prefCode)
          .then(data => {
            resolve(data, data);
            this.cityList = data.data;
          })
          .catch(error => reject(error));
      });
    }
  }
};
</script>
