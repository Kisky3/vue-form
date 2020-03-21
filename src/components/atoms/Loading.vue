<template>
  <div v-show="loading">
    <div class="fullview">
      <div class="loading-spacer" />
      <vue-loading
        type="spiningDubbles"
        color="#f49c1c"
        :size="{ width: '100px', height: '100px' }" />
    </div>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'

export default {
  name: 'Loading',
  components: {
    VueLoading,
  },
  data() {
    return {
      loading: false
    }
  },

}
</script>

<style>
.fullview {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.1);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}
.loading-spacer {
  height: 40%;
}
</style>