<template>
  <div>
    <process-bar :step1="true" :step2="true" :step3="true" :step4="true" />
    <div class="c-page-container">
      <div class="c-page-wrap">
        <div class="c-photo-label">
          申込完了
        </div>
        <p class="bold">
          インターネットでのお申込み手続きは完了です。お申込みありがとうございました。
        </p>
        <p>
          買取金額のお知らせはお電話またご登録されたメールアドレスに下記よりご連絡いたします。
        </p>

        <div class="c-item-contact-wrap">
          <div class="c-contact-item">
            <span class="iconfont icon-phone" />
            電話番号:0120-945-991
          </div>
          <div class="c-contact-item">
            <span class="iconfont icon-mail" />
            メールアドレス:info@takakuureru.com
          </div>
        </div>
        <p>
          ※ご依頼が混み合っている場合、2～3日お時間をいただく 場合がございます。
        </p>
        <p>
          ※査定金額のお知らせの前に、ご依頼内容について連絡を
          させていただく場合がございます。
        </p>
        <arrow-btn class="full-size" @handleOnClick="goToTopPage()">
          申し込みを続ける
        </arrow-btn>
        <div class="c-banner-container">
          <a href="https://www.ka-shimo.com/wimax" target="_blank">
            <img
              class="c-banner-img"
              src="../assets/img/banner2.png"
              alt="WiMAXで簡単・快適インターネット！"
            />
          </a>
          <a
            href="https://prf.hn/click/camref:1011l4PI5/creativeref:1100l28721"
            target="_blank"
            rel="nofollow"
          >
            <img
              class="c-banner-img"
              src="../assets/img/banner1.svg"
              alt="ネスカフェ ドルチェグスト マシン無料レンタル"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ArrowBtn from './../components/molecules/ArrowBtn.vue'
import ProcessBar from '../components/molecules/Processbar.vue'
export default Vue.extend({
  name: 'Complete',
  components: {
    ProcessBar,
    ArrowBtn
  },
  computed: {
    ...mapState(['itemList', 'imageList'])
  },
  methods: {
    goToTopPage(): void {
      this.itemList.splice(0)
      this.imageList.splice(0)
      this.$store.commit('saveStoreImageList', this.imageList)
      this.$store.commit('saveStoreItemList', this.itemList)
      this.$emit('routePush', '/')
    }
  }
})
</script>

<style scoped>
.c-banner-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.c-banner-img {
  width: 100%;
  margin-bottom: 20px;
}

.c-banner-img:hover {
  opacity: 0.8;
  cursor: pointer;
}

.c-contact-item {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  margin-bottom: 15px;
  width: 100%;
}

.c-contact-item > span {
  font-size: 25px;
  color: #ffa031;
  margin-right: 20px;
}

.c-page-wrap {
  padding: 20px;
}

.c-page-wrap p {
  line-height: 2;
}

.c-page-banner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 30px 0;
  width: 100%;
}

.c-page-banner-wrap img {
  width: 45%;
  margin-right: 3%;
}

.c-arrow-btn.full-size {
  width: 100%;
}
</style>
