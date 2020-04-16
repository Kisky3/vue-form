<template>
  <div>
    <process-bar :step1="true" :step2="true" :step3="true" />
    <loading v-show="showLoading" />
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
            v-model="showUserData.name"
            type="text"
            placeholder="例）買取  太郎"
            value="value"
            name="name"
            label="お名前（漢字）"
            rules="required"
          />
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
            rules="required"
          />
        </div>

        <div class="c-page-row">
          <div class="c-page-subtitle">
            <p>電話番号</p>
            <require-tag />
          </div>
          <input-text
            v-model="showUserData.phone_number"
            type="text"
            placeholder="例）090XXXXXXX"
            value="value"
            name="phone_number"
            label="電話番号"
            rules="required|numeric|min:10|max:11"
          />
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
            rules="required|email"
          />
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
              @input="changeCityList"
            >
              <option selected disabled="disabled" :value="null">
                都道府県を選択してください
              </option>
              <option
                v-for="(pref, index) in prefectureList"
                :key="index"
                :value="pref.prefName"
              >
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
                name="市区町村"
              >
                <option selected disabled="disabled" :value="null">
                  市区町村を選択してください
                </option>
                <option
                  v-for="(city, index) in cityList"
                  :key="index"
                  :value="city.name"
                >
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
            name="住所"
            label="住所"
          />
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
              name="階数"
              class="input-tiny"
              label="階数 "
              rules="required"
            />
            階
          </div>

          <div class="c-page-row">
            <div class="c-page-subtitle">
              <p>エレベーターの有無</p>
              <require-tag />
            </div>
            <input-radio
              v-model="showUserData.elevator"
              value="value"
              name="エレベーターの有無"
              :options="elevator_options"
            />
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
                name="personal-info-confirm"
                label="個人情報のお取り扱い同意"
              >
                同意する
              </input-checkbox>
            </div>
            <personal-info-confirm />
          </div>
        </div>
        <arrow-btn
          :class="invalid ? 'disabled up' : 'up'"
          @handleOnClick="goToNext()"
        >
          買取価格を調べる
        </arrow-btn>
        <basic-btn class="c-backbtn up" @handleOnClick="goBack()">
          戻る
        </basic-btn>
      </div>
    </validation-observer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { UserData } from '../stores/types'

import { mapState } from 'vuex'
import { extend, ValidationObserver } from 'vee-validate'
import { required, email, numeric, min, max } from 'vee-validate/dist/rules'

import categoryValueList from './../constants/categoryValueList'
import settings from './../constants/setting'
import api from '@/api/info'

import ArrowBtn from '../components/molecules/ArrowBtn.vue'
import ProcessBar from '../components/molecules/Processbar.vue'
import ValidateSelect from '../components/molecules/ValidateSelect.vue'
import TransitionWrapper from '../components/molecules/TransitionWrapper.vue'

import { ItemData } from '../stores/types'
import { CategoryValue, PrefectureOption, FieldItem } from '../constants/types'
import fieldItemList from './../constants/fieldItemList'

import Loading from '../components/atoms/Loading.vue'
import BasicBtn from '../components/atoms/BasicBtn.vue'
import OptionTag from '../components/atoms/OptionTag.vue'
import InputText from '../components/atoms/InputText.vue'
import RequireTag from '../components/atoms/RequireTag.vue'
import InputRadio from '../components/atoms/InputRadio.vue'
import InputCheckbox from '../components/atoms/InputCheckbox.vue'
import PersonalInfoConfirm from '../components/atoms/PersonalInfoConfirm.vue'

/* 必須項目のエラーメッセージ設定 */
extend('required', required)
extend('email', email)
extend('numeric', numeric)
extend('min', min)
extend('max', max)

type Data = {
  showLoading: boolean
  elevator_options: object[]
  prefectureList: PrefectureOption[]
  showUserData: UserData
  cityList: object[]
  isMounted: boolean
}

export default Vue.extend({
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
  data(): Data {
    return {
      showLoading: false,
      elevator_options: settings.userElevatorLabel,
      prefectureList: settings.prefectureList,
      showUserData: {},
      cityList: [],
      isMounted: false
    }
  },
  computed: {
    ...mapState(['itemList'])
  },
  watch: {
    showUserData: {
      handler(newValue: UserData): void {
        // IE対策
        // 都道府県選択済みだとmounted完了前にwatchが実行されるので
        // mountedの完了を確認してから、store.commitを行う
        if (!this.isMounted) return
        this.$store.commit('saveStoreUserData', newValue)
      },
      deep: true
    }
  },
  async mounted(): Promise<void> {
    if (this.$store.state.userData.pref) {
      await this.getCityList(this.$store.state.userData.pref)
    }
    this.showUserData = this.$store.state.userData
    this.isMounted = true
  },
  methods: {
    goBack(): void {
      this.$emit('routeBack')
    },
    async goToNext(): Promise<void> {
      const formData: FormData = new FormData()

      if (!this.itemList || this.itemList.length === 0) {
        return
      }

      this.itemList.forEach((item: ItemData, index: number) => {
        const item_id = index + 1
        const optionItems: string[] = []
        const catObj: CategoryValue | undefined = categoryValueList.find(
          cat => cat.key === item.cat_lvl2
        )

        if (catObj !== undefined) {
          formData.append('cat_lvl0-' + item_id, String(catObj.value.cat0))
          formData.append('cat_lvl1-' + item_id, String(catObj.value.cat1))
          formData.append('cat_lvl2-' + item_id, String(catObj.value.cat2))
          formData.append('category-' + item_id, catObj.value.category)
          /* 小カテゴリー は存在する場合は、追加項目のリストを取ってくる */
          const fieldList: FieldItem[] | undefined = fieldItemList.filter(
            opt => opt.category_id === catObj.value.cat2
          )
          fieldList.forEach((option: FieldItem) => {
            optionItems.push(option.field_key)
            formData.append(
              `${option.field_key}-${item_id}`,
              JSON.stringify({
                value: item[`${option.field_key}`],
                sort: option.sort,
                format_id: option.format_id
              })
            )
          })
        }

        Object.keys(item).forEach(key => {
          /* カテゴリー以外の項目を追加 */
          if (
            key !== 'cat_lvl0' &&
            key !== 'cat_lvl1' &&
            key !== 'cat_lvl2' &&
            !optionItems.includes(key)
          ) {
            formData.append(key + '-' + item_id, item[key])
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

      const isValid = await (this.$refs
        .userInformation as ValidateObserverType).validate()
      if (isValid) {
        try {
          this.showLoading = true
          await api.submitFromData(formData)
          this.$emit('routePush', 'thanks')
        } catch (e) {
          console.error('エラー：', e.message)
          alert('何らかの原因により送信に失敗しました。')
        } finally {
          this.showLoading = false
        }
      }
    },
    changeCityList(prefName: string): void {
      this.showUserData.city = null
      this.getCityList(prefName)
    },
    async getCityList(prefName: string): Promise<void> {
      const pref = this.prefectureList.find(
        (pref: PrefectureOption) => pref.prefName === prefName
      )

      if (pref === undefined) {
        return
      }

      const prefCode: string = pref.prefCode
      const { data } = await api.getCityList(prefCode)
      this.cityList = [...data]
    }
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
  }
})
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
