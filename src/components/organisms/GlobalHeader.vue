<template>
  <div>
    <header>
      <span class="iconfont icon-return"></span>
      <img src="./../../assets/img/logo.png" alt="" />
    </header>
    <process-bar />
  </div>
</template>

<script>
import ProcessBar from "./../molecules/Processbar.vue";
export default {
  name: "GlobalHeader",
  components: {
    ProcessBar
  }
};
</script>
