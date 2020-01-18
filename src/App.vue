<template>
  <div id="app">
    <div id="wrapper">
      <global-header />
      <router-view />
    </div>
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from "./components/organisms/GlobalHeader.vue";
import GlobalFooter from "./components/organisms/GlobalFooter.vue";
import $ from 'jquery';

export default {
  name: "app",
  components: {
    GlobalHeader,
    GlobalFooter
  }
};
</script>

<style>
@import "../src/assets/style/global.scss";
</style>
