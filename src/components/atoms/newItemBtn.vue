<template>
  <input type="button" value="商品を追加" @click="sendToFather2">
</template>
<script>
export default {
  name: 'NewItemBtn',
  methods: {
    sendToFather2(){
      this.$emit('fatherMethod2')
    }
  }
}
</script>