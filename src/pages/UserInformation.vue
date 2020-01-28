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
  </div>
</template>

<script>
import InputModel from '../components/atoms/InputModel'
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
    InputModel
  }
}
</script>

<style scoped></style>
