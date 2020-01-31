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
          <select id="geoapi-prefectures" name="geoapi-prefectures">
            <option value="都道府県を選択してください">選択してください</option>
          </select>
        </div>
      </div>
    </div>

    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>市区町村</p>
        <require-tag />
      </div>
      <div class="input-container">
        <div class="select-wrap">
          <i class="iconfont icon-pulldown"></i>
          <select id="geoapi-cities" name="geoapi-cities">
            <option value="市区町村名を選択してください"
              >選択してください</option
            >
          </select>
        </div>
      </div>
    </div>

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
    </div>
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

var geoapi_url = "http://geoapi.heartrails.com/api/json?jsonp=?";
var geoapi_area_selected;
var geoapi_prefecture_selected;
var geoapi_city_selected;
var geoapi_town_selected;
var geoapi_towns = null;

export default {
  name: "UserCities",
  props: ["itemData"],
  components: {
    // ValidationProvider
    RequireTag
  },
  data() {
    return {};
  },
  mounted: function() {
    this.geoApiInitialize();
  },
  methods: {
    geoApiInitialize: function() {
      if ($("#geoapi-prefectures").length > 0) {
        this.geoApiInitializePrefectures();
      }
      this.geoApiInitializeCities();
      this.geoApiInitializeTowns();
      $("#geoapi-address").attr("disabled", true);
      $("#geoapi-areas").change(this.geoApiChangeArea);
      $("#geoapi-prefectures").change(this.geoApiChangePrefecture);
      $("#geoapi-cities").change(this.geoApiChangeCity);
      $("#geoapi-towns").change(this.geoApiChangeTown);
      $("#geoapi-postal-4").keyup(this.geoApiSearchByPostal);
    },
    geoApiInitializePrefectures: function() {
      $("#geoapi-prefectures").html(
        '<option value="県名を選択してください">県名を選択してください</option>'
      );
      $.getJSON(
        geoapi_url,
        { method: "getPrefectures" },
        this.geoApiSetPrefectures
      );
    },
    geoApiInitializeCities: function() {
      $("#geoapi-cities").html(
        '<option value="市区町村を選択してください">市区町村を選択してください&nbsp;&nbsp;</option>'
      );
    },
    geoApiInitializeTowns: function() {
      $("#geoapi-towns").html(
        '<option value="町域名を選択してください">町域名を選択してください&nbsp;&nbsp;</option>'
      );
    },
    geoApiChangeArea: function() {
      geoapi_area_selected = $("#geoapi-areas option:selected");
      this.geoApiInitializeCities();
      this.geoApiInitializeTowns();
      if (geoapi_area_selected.val() == "繧ｨ繝ｪ繧｢繧帝∈謚槭＠縺ｦ縺上□縺輔＞") {
        return;
      }
      $.getJSON(
        geoapi_url,
        { method: "getCities", area: geoapi_area_selected.text() },
        this.setCities
      );
    },
    geoApiChangePrefecture: function() {
      geoapi_prefecture_selected = $("#geoapi-prefectures option:selected");
      this.geoApiInitializeCities();
      this.geoApiInitializeTowns();
      if (geoapi_prefecture_selected.val() == "県名を選択してください") {
        return;
      }
      $.getJSON(
        geoapi_url,
        { method: "getCities", prefecture: geoapi_prefecture_selected.text() },
        this.setCities
      );
    },
    geoApiSetAreas: function(json) {
      var areas = json.response.area;
      for (var index = 0; index < areas.length; index++) {
        var option = $(document.createElement("option"));
        option.text(areas[index]);
        option.val(areas[index]);
        $("#geoapi-areas").append(option);
      }
    },
    geoApiSetPrefectures: function(json) {
      var prefectures = json.response.prefecture;
      for (var index = 0; index < prefectures.length; index++) {
        var option = $(document.createElement("option"));
        option.text(prefectures[index]);
        option.val(prefectures[index]);
        $("#geoapi-prefectures").append(option);
      }
    },

    setCities: function(json) {
      var cities = json.response["location"];
      for (var index = 0; index < cities.length; index++) {
        var option = $(document.createElement("option"));
        option.text(cities[index].city);
        option.val(cities[index].city);
        $("#geoapi-cities").append(option);
      }
    },
    geoApiChangeCity: function() {
      geoapi_city_selected = $("#geoapi-cities option:selected");
      this.geoApiInitializeTowns();
      if (geoapi_city_selected.val() == "都市") {
        return;
      }
      $.getJSON(
        geoapi_url,
        { method: "getTowns", city: geoapi_city_selected.text() },
        this.geoApiSetTowns
      );
    },
    geoApiSetTowns: function(json) {
      geoapi_towns = json.response["location"];
      var cities = json.response["location"];
      for (var index = 0; index < cities.length; index++) {
        var option = $(document.createElement("option"));
        option.text(cities[index].town);
        option.val(cities[index].town);
        $("#geoapi-towns").append(option);
      }
    },
    geoApiChangeTown: function() {
      geoapi_town_selected = $("#geoapi-towns option:selected");
      if (geoapi_town_selected.val() == "町域名を選択してください") {
        return;
      }
      var town = this.geoApiGetTownObject(geoapi_town_selected.text());
    },

    geoApiGetTownObject: function(name) {
      var town = null;
      for (var index = 0; index < geoapi_towns.length; index++) {
        if (name == geoapi_towns[index].town) {
          town = geoapi_towns[index];
          break;
        }
      }
      return town;
    },
    geoApiSearchByPostal: function(e) {
      var key_code = e.keyCode || event.keyCode;
      if (
        key_code != 9 &&
        key_code != 37 &&
        key_code != 38 &&
        key_code != 39 &&
        key_code != 40 &&
        $("#geoapi-postal-4").val().length == 4
      ) {
        var geoapi_postal_3 = $("input#geoapi-postal-3");
        var geoapi_postal_4 = $("input#geoapi-postal-4");
        if (!geoapi_postal_3.val() || !geoapi_postal_4.val()) {
          return false;
        }
        $.getJSON(
          geoapi_url,
          {
            method: "searchByPostal",
            postal: geoapi_postal_3.val() + geoapi_postal_4.val()
          },
          geoapiSearchByPostalAfter
        );
      }
    },
    geoapiSearchByPostalAfter: function(json) {
      if (json.response.error) {
        alert(json.response.error);
        return false;
      }
      var addresses = json.response["location"];
      this.geiApiGetAddress(addresses);
    }
  }
};
</script>
