<template>
  <span class="c-require-tag">必須</span>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'RequireTag'
})
</script>
<style>
.c-require-tag {
  height: 17px;
  width: 36px;
  margin-left: 10px;
  display: block;
  background: #ff8e74;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  border-radius: 2px;
  text-align: center;
}
</style>
