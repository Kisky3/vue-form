<template>
  <div>
    <div v-show="step === 0" class="c-process-container">
      <span class="c-process-bar" v-for="n in 3" :key="n"></span>
    </div>

    <div v-show="step === 1" class="c-process-container">
      <span class="c-process-bar active"></span>
      <span class="c-process-bar" v-for="n in 2" :key="n"></span>
    </div>

    <div v-show="step === 2" class="c-process-container">
      <span class="c-process-bar active" v-for="n in 2" :key="n"></span>
      <span class="c-process-bar"></span>
    </div>

    <div v-show="step === 3" class="c-process-container">
      <span class="c-process-bar active" v-for="n in 3" :key="n"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProcessBar",
  props: {
    step: { type: Number, required: true }
  }
};
</script>
