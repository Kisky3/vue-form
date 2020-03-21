<template>
  <div>
    <process-bar
      :step1="active"
      :step2="active"
      :step3="active" />
    <loading v-show="showLoading" />
    <validation-observer
      ref="userInformation"
      v-slot="{ invalid }"
      @submit.prevent="goToNext()">
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
            v-model="showUserData.name"
            type="text"
            placeholder="例）買取  太郎"
            value="value"
            name="name"
            label="お名前（漢字）"
            rules="required" />
        </div>
        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>お名前（カナ）</p>
            <require-tag />
          </div>
          <input-text
            v-model="showUserData.kana"
            type="text"
            placeholder="例）カイトリ  タロウ"
            value="value"
            name="kana"
            label="お名前（カナ）"
            rules="required" />
        </div>

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>電話番号</p>
            <require-tag />
          </div>
          <input-text
            v-model="showUserData.phone_number"
            type="text"
            placeholder="例）090-XXX-XXXX"
            value="value"
            name="phone_number"
            label="電話番号"
            rules="required|numeric|min:10|max:11" />
        </div>

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>メールアドレス</p>
            <require-tag />
          </div>
          <input-text
            v-model="showUserData.email"
            type="text"
            placeholder="例）info@takakuureru.com"
            value="value"
            name="email"
            label="メールアドレス"
            rules="required|email" />
        </div>

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>都道府県</p>
            <require-tag />
          </div>
          <div class="input-container">
            <validate-select
              v-model="showUserData.pref"
              rules="required"
              name="都道府県"
              @input="changeCityList">
              <option
                selected
                disabled="disabled"
                :value="null">
                都道府県を選択してください
              </option>
              <option
                v-for="(pref, index) in prefectureList"
                :key="index"
                :value="pref.prefName">
                {{ pref.prefName }}
              </option>
            </validate-select>
          </div>
        </div>

        <transition-wrapper :is-show="cityList.length > 0">
          <div class="c-page-row up">
            <div class="c-page-subtitle">
              <p>市区町村</p>
              <require-tag />
            </div>
            <div class="input-container">
              <validate-select
                v-model="showUserData.city"
                rules="required"
                name="市区町村">
                <option
                  selected
                  disabled="disabled"
                  :value="null">
                  市区町村を選択してください
                </option>
                <option
                  v-for="(city, index) in cityList"
                  :key="index"
                  :value="city.name">
                  {{ city.name }}
                </option>
              </validate-select>
            </div>
          </div>
        </transition-wrapper>

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>住所</p>
            <option-tag />
          </div>
          <input-text
            v-model="showUserData.address"
            type="text"
            placeholder="例）京橋3-6-18"
            value="value"
            name="address"
            label="住所" />
        </div>

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>階数</p>
            <require-tag />
          </div>
          <div class="c-item-stair">
            <input-text
              v-model="showUserData.stair"
              type="text"
              value="value"
              name="stair"
              class="input-tiny"
              label="階数 "
              rules="required" />階
          </div>

          <div class="c-page-row">
            <div class="c-page-subtitle">
              <p>エレベーターの有無</p>
              <option-tag />
            </div>
            <div class="c-item-selectbtn">
              <input-radio
                v-model="showUserData.elevator"
                value="value"
                name="elevator"
                :checked-index="checkedIndex"
                :options="elevator_options" />
            </div>
          </div>

          <div class="c-page-row">
            <div class="c-page-subtitle">
              <p>個人情報のお取り扱い同意</p>
              <require-tag />
            </div>
            <div class="c-item-selectbtn">
              <input-checkbox
                v-model="showUserData.personal_info_confirm"
                class="c_confirm_content"
                value="value"
                type="checkbox"
                name="personal-info-confirm"
                label="個人情報のお取り扱い同意"
                check_label="同意する"
                :options="personal_info_confirm"
                @updateValue="submitPersonalConfirm" />
            </div>
            <personal-info-confirm />
          </div>
        </div>
        <arrow-btn
          :class="invalid ? 'disabled up' : 'up'"
          @handleOnClick="goToNext()">
          買取価格を調べる
        </arrow-btn>
        <basic-btn
          class="c-backbtn up"
          @handleOnClick="goBack()">
          戻る
        </basic-btn>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { extend, ValidationObserver } from 'vee-validate'
import { required, email, numeric, min, max } from 'vee-validate/dist/rules'

import categoryValueList from './../constants/categoryValueList'
import settings from './../constants/setting'
import api from '@/api/info'

import ArrowBtn from '../components/molecules/ArrowBtn'
import ProcessBar from '../components/molecules/Processbar'
import ValidateSelect from '../components/molecules/ValidateSelect'
import TransitionWrapper from '../components/molecules/TransitionWrapper'

import Loading from '../components/atoms/Loading'
import BasicBtn from '../components/atoms/BasicBtn'
import OptionTag from '../components/atoms/OptionTag'
import InputText from '../components/atoms/InputText'
import RequireTag from '../components/atoms/RequireTag'
import InputRadio from '../components/atoms/InputRadio'
import InputCheckbox from '../components/atoms/InputCheckbox'
import PersonalInfoConfirm from '../components/atoms/PersonalInfoConfirm'

/* 必須項目のエラーメッセージ設定 */
extend('required', required)
extend('email', email)
extend('numeric', numeric)
extend('min', min)
extend('max', max)

export default {
  name: 'UserInformation',
  components: {
    ProcessBar,
    InputText,
    InputRadio,
    InputCheckbox,
    ArrowBtn,
    BasicBtn,
    Loading,
    RequireTag,
    OptionTag,
    ValidationObserver,
    PersonalInfoConfirm,
    ValidateSelect,
    TransitionWrapper
  },
  data() {
    return {
      showLoading: false,
      active: 'active',
      elevator_options: settings.userElevatorLabel,
      personal_info_confirm: settings.personalInfoConfirm,
      prefectureList: settings.prefectureList,
      showUserData: {},
      cityList: []
    }
  },
  computed: {
    ...mapState(['itemList']),
    checkedIndex() {
      if (this.showUserData.elevator === 'true') {
        return 0
      } else if (this.showUserData.elevator === 'false') {
        return 1
      } else {
        return null
      }
    },
    PersonalConfirmChecked() {
      if (this.showUserData.personal_info_confirm === 'true') {
        return 'checked'
      } else {
        return 'uncheck'
      }
    }
  },
  watch: {
    showUserData: {
      handler: function(newValue) {
        this.$store.commit('saveStoreUserData', newValue)
      },
      deep: true
    }
  },
  async mounted() {
    if (this.$store.state.userData.pref) {
      await this.getCityList(this.$store.state.userData.pref)
    }
    this.showUserData = this.$store.state.userData
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      window.scrollTo(0, 0)
    },
    async goToNext() {
      let formData = new FormData()
      let catObj = {}

      if (!this.itemList || this.itemList.length === 0) {
        return
      }

      this.itemList.forEach((item, index) => {
        Object.keys(item).forEach(key => {
          /* カテゴリー小によって、リストを取ってくる */
          if (key === 'cat_lvl2') {
            catObj = categoryValueList.find(cat => {
              return cat.key === item[key]
            })
            formData.append('cat_lvl0-' + (index + 1), catObj.value.cat0)
            formData.append('cat_lvl1-' + (index + 1), catObj.value.cat1)
            formData.append('cat_lvl2-' + (index + 1), catObj.value.cat2)
            formData.append('category-' + (index + 1), catObj.value.category)
          }
          /* カテゴリー以外の項目を追加 */
          if (key !== 'cat_lvl0' && key !== 'cat_lvl1' && key !== 'cat_lvl2') {
            formData.append(key + '-' + (index + 1), item[key])
          }
        })
      })

      // addressが存在しても、しなくても、作る
      const { city, address } = this.showUserData
      formData.append('address', `${city}${address || ''}`)

      for (const key of Object.keys(this.showUserData)) {
        if (key === 'address') continue
        formData.append(key, this.showUserData[key])
      }

      const isValid = await this.$refs.userInformation.validate()
      if (isValid) {
        try {
          this.showLoading = true
          await api.submitFromData(formData)
          await this.openCompletePage()
        } catch (e) {
          console.error('エラー：', e.message)
          alert('何らかの原因により送信に失敗しました。')
          this.$router.push('/')
        } finally {
          this.showLoading = false
        }
      }
    },
    changeCityList: function(prefName) {
      this.showUserData.city = null
      this.getCityList(prefName)
    },
    getCityList: function(prefName) {
      const { prefCode } = this.prefectureList.find(
        pref => pref.prefName === prefName
      )
      return api
        .getCityList(prefCode)
        .then(({ data }) => {
          this.cityList = [...data]
        })
        .catch(error => error)
    },
    /*
    changeTownList: function(cityCode) {
      return new Promise((resolve, reject) => {
        api
          .getTownList(cityCode)
          .then(data => {
            resolve(data, data)
            this.townList = data.data
          })
          .catch(error => reject(error))
      })
    },*/
    openCompletePage: function() {
      this.$router.push('thanks')
    },
    submitPersonalConfirm: function(model) {
      this.showUserData.personal_info_confirm = model
      this.$store.commit('saveStoreUserData', this.showUserData)
    }
  }
}
</script>

<style scoped>
.c-backbtn {
  background: gray;
  width: 50%;
}
.input-tiny {
  width: 85%;
  margin-bottom: 15px;
  margin-right: 10px;
}

.c-item-stair,
.c-item-selectbtn {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
}

.c-item-selectbtn {
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

.c_confirm_content {
  margin: 10px 0;
}
</style>
