<template>
  <div class="confirm-content">
    <br />
    <p>
      より良いサービス提供のため、マーケットエンタープライズ社は次に定める情報を当社グループサービスの
      <a href="https://oikura.jp/" target="”_blank">「おいくら」</a>
      を利用する加盟店に提供することがあります。
    </p>
    <br />
    <br />
    <span>・高く売れるドットコムにご依頼いただいた情報</span>
    <p>
      氏名、住所、郵便番号、電話番号、メールアドレス、商品情報、住居設備に関わる情報
    </p>
    <br />
    <p>
      上記情報は、当社の買取サービスで買取が困難な場合に、
      <a href="https://oikura.jp/" target="”_blank">「おいくら」</a>
      サービスを通じて、
      登録加盟店にて事前査定を実施し、登録加盟店からお客様にご連絡を行うことを目的に利用いたします。
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PersonalInfoConfirm'
})
</script>
<style>
.confirm-content {
  width: 100%;
  height: 80px;
  font-size: 12px;
  overflow: auto;
  padding-left: 15px;
  border: solid 2px #e1e1e1;
  margin-top: 10px;
}

.confirm-content a {
  color: blue;
  text-decoration: underline;
}

.confirm-content span {
  font-weight: bold;
}

.confirm-content::-webkit-scrollbar {
  width: 8px;
  height: 10px;
  background-color: #9e9e9e;
}

.confirm-content::-webkit-scrollbar-track {
  background: #e3e3e3;
}
.confirm-content::-webkit-scrollbar-thumb {
  background: #9e9e9e;
  border-radius: 3px;
  height: 20px;
}
.confirm-content::-webkit-scrollbar-thumb:hover {
  background: #61b6eb;
}
.confirm-content::-webkit-scrollbar-corner {
  background: #61b6eb;
}
</style>
