<template>
  <div class="c-page-container">
    <div class="c-page-wrap">
      <div class="c-photo-label"> 申込完了</div>
      <p class="bold">ご依頼番号は{{ v2_id }}です。</p>
      <p>
        買取金額のお知らせはお電話または{{ v2_mail }}宛に
        下記よりご連絡いたします。
      </p>

      <div class="c-item-contact-wrap">
        <div class="c-contact-item">
          <span class="iconfont icon-phone"></span> 電話番号:0120-945-991
        </div>
        <div class="c-contact-item">
          <span class="iconfont icon-mail"></span>
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
      <next-btn @goToNext="goToTopPage()" :message="btnMessage" />
      <div class="c-page-banner-wrap">
        <img src="../assets/img/banner1.svg" alt="">
        <img src="../assets/img/banner2.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import NextBtn from "./../components/atoms/NextBtn";
export default {
  name: "Complete",
  components: {
    NextBtn
  },
  data() {
    return {
      btnMessage: "トップに戻る",
      v2_id: this.$route.query.v2_id ? this.$route.query.v2_id : "",
      v2_mail: this.$route.query.v2_mail ? this.$route.query.v2_mail : ""
    };
  },
  methods: {
    goToTopPage: function() {
      this.$router.push(
        "/",
        () => {},
        () => {}
      );
    }
  }
};
</script>

<style scoped>
.c-item-contact-wrap {
  padding: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
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
  color: #FFA031;
  margin-right: 20px;
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
</style>
