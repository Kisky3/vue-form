<template>
  <button class="c-next-btn" @click="submit">
    <span class="iconfont icon-next"></span>
    次へ
  </button>
</template>
<script>
export default {
  name: 'NextBtn',
  props:{
    fatherMethod: {
        type: Function,
        default: null
      }
  },
  methods: {
    submit: function () {
      this.$emit('goToNext', 'cc12345')
    }
  }
}
</script>
<style>
  .c-next-btn {
    position: relative;
    width: 100%;
    background: #1DC050;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    height: 50px;
    border: none;
    margin: 30px 0;
    border-radius: 5px;
  }

  .c-next-btn.disabled {
    background: #999;
    cursor: not-allowed;
  }

  .icon-next {
    position: absolute;
    right: 5px;
    top: 50%;
    z-index: 2;
    color: #fff;
    font-size: 15px;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
</style>
