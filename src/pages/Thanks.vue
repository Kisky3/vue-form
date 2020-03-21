<template>
  <div>
    <process-bar
      :step1="active"
      :step2="active"
      :step3="active"
      :step4="active" />
    <div class="c-page-container">
      <div class="c-page-wrap">
        <div class="c-photo-label">
          申込完了
        </div>
        <p class="bold">
          インターネットでのお申込み手続きは完了です。お申込みありがとうございました。
        </p>
        <p>買取金額のお知らせはお電話またご登録されたメールアドレスに下記よりご連絡いたします。</p>

        <div class="c-item-contact-wrap">
          <div class="c-contact-item">
            <span class="iconfont icon-phone" /> 電話番号:0120-945-991
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
        <arrow-btn
          class="full-size"
          @handleOnClick="goToTopPage()">
          申し込みを続ける
        </arrow-btn>
        <img
          class="c-banner-img"
          src="../assets/img/banner1.svg"
          alt="">
        <img
          class="c-banner-img"
          src="../assets/img/banner2.svg"
          alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArrowBtn from './../components/molecules/ArrowBtn'
import ProcessBar from '../components/molecules/Processbar'
export default {
  name: 'Complete',
  components: {
    ProcessBar,
    ArrowBtn
  },
  computed: {
    ...mapState(['itemList', 'imageList'])
  },
  data() {
    return {
      active: 'active',
    }
  },
  methods: {
    goToTopPage: function() {
      this.itemList.splice(0)
      this.imageList.splice(0)
      this.$store.commit('saveStoreImageList', this.imageList)
      this.$store.commit('saveStoreItemList', this.itemList)
      this.$router.push(
        '/'
      )
    }
  }
}
</script>

<style scoped>
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
