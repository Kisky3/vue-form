<template>
  <div>
    <div v-show="step === 0 || step === 1" class="c-process-container">
      <div class="progress-btn">
        <img src="../../assets/img/1-active.png" />
        <span class="active">step1</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/2-gray.png" alt="" />
        <span class="gray">step2</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/3-gray.png" alt="" />
        <span class="gray">step3</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/4-gray.png" alt="" />
        <span class="gray">step4</span>
      </div>
    </div>

    <div v-show="step === 2" class="c-process-container">
      <div class="progress-btn">
        <img src="../../assets/img/1-done.png" />
        <span class="active">step1</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/2-done.png" alt="" />
        <span class="active">step2</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/3-gray.png" alt="" />
        <span class="gray">step3</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/4-gray.png" alt="" />
        <span class="gray">step4</span>
      </div>
    </div>

    <div v-show="step === 3" class="c-process-container">
      <div class="progress-btn">
        <img src="../../assets/img/1-done.png" />
        <span class="active">step1</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/2-done.png" alt="" />
        <span class="gray">step2</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/3-active.png" alt="" />
        <span class="gray">step3</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/4-gray.png" alt="" />
        <span class="gray">step4</span>
      </div>
    </div>

    <div v-show="step === 4" class="c-process-container">
      <div class="progress-btn">
        <img src="../../assets/img/1-done.png" />
        <span class="active">step1</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/2-done.png" alt="" />
        <span class="active">step2</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/3-done.png" alt="" />
        <span class="active">step3</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/4-done.png" alt="" />
        <span class="active">step4</span>
      </div>
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
<style>
.progress-btn {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
}
.progress-btn > span.active {
  padding: 2px 10px;
  background: #4eb5ac;
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
}
.progress-btn > span.gray {
  padding: 2px 10px;
  background: transparent;
  color: #dedede;
  font-size: 15px;
  border-radius: 5px;
}
.progress-btn > img {
  width:35px;
  margin-bottom: 5px;
}

/* sp レスポンス対応 */
@media only screen and (max-width: 767px) {
  .progress-btn > span.active {
    padding: 2px 10px;
    background: #4eb5ac;
    color: #fff;
    font-size: 12px;
    border-radius: 5px;
  }
  .progress-btn > span.gray {
    padding: 2px 10px;
    background: transparent;
    color: #dedede;
    font-size: 12px;
    border-radius: 5px;
  }
  .progress-btn > img {
    width: 30px;
    margin-bottom: 5px;
  }
}
</style>
