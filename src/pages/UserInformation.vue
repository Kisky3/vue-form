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
    <select id="geoapi-prefectures" name="geoapi-prefectures">
  <option value="都道府県を選択してください">都道府県を選択してください</option>
</select>
<select id="geoapi-cities" name="geoapi-cities">
  <option value="市区町村名を選択してください">市区町村名を選択してください</option>
</select>
<select id="geoapi-towns" name="geoapi-towns">
  <option value="町域を選択してください">町域を選択してください</option>
</select>
  </div>
</template>

<script>
import InputModel from '../components/atoms/InputModel'
import UserCities from '../components/molecules/UserCities'
import RequireTag from '../components/atoms/RequireTag'

export default {
  name: "UserInformation",
  data() {
    return {
      userData: {
        name: null,
        kana: null
      }
    }
  },
  components: {
    InputModel,
    
    RequireTag
  }
}
</script>

<style scoped></style>
