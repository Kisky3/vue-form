<template>
  <div class="c-page-container">
    <div class="c-page-title">
      <p>お客様情報</p>
    </div>
    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>お名前（漢字）</p>
        <require-tag />
      </div>
      <input-model
        v-model="userData.name"
        type="text"
        placeholder="例）買取  太郎"
        value="value"
        name="name"
      />
    </div>
    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>お名前（カナ）</p>
        <require-tag />
      </div>
      <input-model
        v-model="userData.kana"
        type="text"
        placeholder="例）カイトリ  タロウ"
        value="value"
        name="kana"
      />
    </div>
    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>県名</p>
        <require-tag />
      </div>
      <div class="select-wrap">
        <i class="iconfont icon-pulldown"></i>
      <select id="geoapi-prefectures" name="geoapi-prefectures">
        <option value="都道府県を選択してください">選択してください</option>
      </select>
      </div>
    </div>

    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>市区町村</p>
        <require-tag />
      </div>
      <div class="select-wrap">
        <i class="iconfont icon-pulldown"></i>
        <select id="geoapi-cities" name="geoapi-cities">
          <option value="市区町村名を選択してください">選択してください</option>
        </select>
      </div>
    </div>

    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>町域名</p>
        <require-tag />
      </div>
      <div class="select-wrap">
        <i class="iconfont icon-pulldown"></i>
        <select id="geoapi-towns" name="geoapi-towns">
          <option value="町域を選択してください">選択してください</option>
        </select>
      </div>
    </div>

    <div class="c-page-row">
      <div class="c-page-subtitle">
        <p>階数 / エレベーターの有無</p>
        <require-tag />
      </div>
      <div class="c-item-stair">
        <input-model
          v-model="userData.name"
          type="text"
          value="value"
          name="name"
          class="input-tiny"
        />階
      </div>
      <div class="c-item-elevator">
        <input type="radio" id="one" value="true" v-model="userData.elevator" />
        <label for="one" class="radio">あり</label>
        <input
          type="radio"
          id="two"
          value="false"
          v-model="userData.elevator"
        />
        <label for="two" class="radio">なし</label>
      </div>
      <div class="c-page-row">
        <div class="c-page-subtitle">
          <p>査定への回答期限</p>
          <option-tag />
        </div>
        <div class="c-item-answerday-wrap">
          <div class="c-select-wrap">
            <i class="iconfont icon-pulldown"></i>
            <select v-model="userData.answer_day">
              <option v-for="day in 13" :value="day" :key="day">{{
                day + 1
              }}</option>
            </select>
          </div>

          <p>日以内に回答が欲しい</p>
        </div>
      </div>
    </div>
    <next-btn
      @goToNext="openCompletePage()"
      :message="btnMessage"
      :class="invalid ? 'disabled' : ''"
    ></next-btn>
  </div>
</template>

<script>
import InputModel from "../components/atoms/InputModel";
import UserCities from "../components/molecules/UserCities";
import RequireTag from "../components/atoms/RequireTag";
import OptionTag from "../components/atoms/OptionTag";
import NextBtn from "../components/atoms/NextBtn";

export default {
  name: "UserInformation",
  data() {
    return {
      btnMessage: "買取価格を調べる",
      userData: {
        name: null,
        kana: null,
        elevator: null,
        answer_day: 2
      }
    };
  },
  components: {
    InputModel,
    NextBtn,
    RequireTag,
    OptionTag
  },
  methods: {
    openCompletePage: function () {
      this.$router.push(
        "complete",
        () => {},
        () => {}
      );
    }
  }
};
</script>

<style scoped>
.input-tiny {
  width: 85%;
  margin-right: 10px;
}

.c-item-stair,
.c-item-elevator {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
}

.c-item-answerday {
  position: relative;
  width: 40%;
  margin-right: 5px;
}

.c-select-wrap {
  position: relative;
  width: 40%;
  margin-right: 15px;
}

.c-item-answerday-wrap {
  display: flex;
  justify-content: start;
  align-items: center;
}
</style>
