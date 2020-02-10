<template>
  <div>
    <process-bar :step="step" />
    <validation-observer
      ref="userInformation"
      v-slot="{ invalid }"
      @submit.prevent="goToNext()"
    >
      <div class="c-page-container">
        <div class="c-page-title">
          <p>お客様情報</p>
        </div>
        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>お名前（漢字）</p>
            <require-tag />
          </div>
          <input-text
            v-model="userData.name"
            type="text"
            placeholder="例）買取  太郎"
            value="value"
            name="name"
            label="お名前（漢字）"
          />
        </div>
        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>お名前（カナ）</p>
            <require-tag />
          </div>
          <input-text
            v-model="userData.kana"
            type="text"
            placeholder="例）カイトリ  タロウ"
            value="value"
            name="kana"
            label="お名前（カナ）"
          />
        </div>

        <div class="c-page-row">
          <user-address
            @submitPrefecture="submitPrefecture"
            @submitCity="submitCity"
            @submitTown="submitTown"
          />
        </div>

        <div class="c-page-row up">
          <div class="c-page-subtitle">
            <p>階数 / エレベーターの有無</p>
            <require-tag />
          </div>
          <div class="c-item-stair">
            <input-text
              v-model="userData.stair"
              type="text"
              value="value"
              name="name"
              class="input-tiny"
              label="階数 "
            />階
          </div>
          <div class="c-item-elevator">
            <input-radio
              value="value"
              v-model="userData.elevator"
              name="elevator"
              :options="elevator_options"
            />
          </div>
          <div class="c-page-row">
            <div class="c-page-subtitle">
              <p>査定への回答期限</p>
              <option-tag />
            </div>
            <div class="input-container">
              <div class="c-item-answerday-wrap">
                <div class="c-select-wrap">
                  <i class="iconfont icon-pulldown"></i>
                  <select v-model="userData.answer_day" @change="saveStoreUserData">
                    <option v-for="day in (2, 14)" :value="day" :key="day">{{
                      day
                    }}</option>
                  </select>
                </div>
                <p>日以内に回答が欲しい</p>
              </div>
            </div>
          </div>
        </div>
        <next-btn
          @goToNext="goToNext()"
          :message="btnMessage"
          :class="invalid ? 'disabled' : ''"
        ></next-btn>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import InputText from "../components/atoms/InputText";
import InputRadio from "../components/atoms/InputRadio";
import UserAddress from "../components/molecules/UserAddress";
import RequireTag from "../components/atoms/RequireTag";
import OptionTag from "../components/atoms/OptionTag";
import NextBtn from "../components/atoms/NextBtn";
import { extend, ValidationObserver } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import ProcessBar from "../components/molecules/Processbar";
import settings from "./../settings/setting";

/* 必須項目のエラーメッセージ設定 */
required.message = "{_field_}は必須項目です";
extend("required", required);

export default {
  name: "UserInformation",
  data() {
    return {
      btnMessage: "買取価格を調べる",
      step: 3,
      elevator_options: settings.userElevatorLabel,
      userData: {
        name: null,
        kana: null,
        prefecture: null,
        city: null,
        town: null,
        stair: null,
        elevator: null,
        answer_day: 3
      }
    };
  },
  components: {
    ProcessBar,
    InputText,
    InputRadio,
    UserAddress,
    NextBtn,
    RequireTag,
    OptionTag,
    ValidationObserver
  },
  methods: {
     ...mapActions({
      saveStoreUserData: "userInformation/saveUserData"
    }),
    async goToNext() {
      console.log(this.$refs.userInformation.validate())
      const isValid = await this.$refs.userInformation.validate();
      if (isValid) {
        await this.saveUserData();
        await this.openCompletePage();
      }
    },
    saveUserData() {
      // 生成された商品データをstoreに保存する
      this.saveStoreUserData(this.userData);
    },
    openCompletePage: function() {
      this.$router.push(
        "complete",
        () => {},
        () => {}
      );
    },
    submitPrefecture: function(prefecture) {
      this.userData.prefecture = prefecture;
    },
    submitCity: function(city) {
      this.userData.city = city;
    },
    submitTown: function(town) {
      this.userData.town = town;
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

.c-item-elevator {
  margin-left: 15px;
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
