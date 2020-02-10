<template>
  <header>
    <span class="iconfont icon-return" @click="goBack()"></span>
    <img src="./../../assets/img/logo.png" alt="" />
  </header>
</template>

<script>
export default {
  name: "GlobalHeader",
  methods: {
    goBack: function() {
      this.$router.go(-1);
      window.scrollTo(0,0);
    }
  }
};
</script>
