<template>
  <div>
    <div v-show="step === 0" class="c-process-container">
      <div class="progress-btn">
        <img src="../../assets/img/step1-active.png" />
        <span class="active">step1</span>
      </div>
      <span class="progress-dot"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step2-gray.png" alt="" />
        <span class="gray">step2</span>
      </div>
      <span class="progress-dot"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step3-gray.png" alt="" />
        <span class="gray">step3</span>
      </div>
      <span class="progress-dot"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step4-gray.png" alt="" />
        <span class="gray">step4</span>
      </div>
    </div>

     <div v-show="step === 1" class="c-process-container">
      <div class="progress-btn">
        <img src="../../assets/img/step1-active.png" />
        <span class="active">step1</span>
      </div>
      <span class="progress-dot active"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step2-gray.png" alt="" />
        <span class="gray">step2</span>
      </div>
      <span class="progress-dot"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step3-gray.png" alt="" />
        <span class="gray">step3</span>
      </div>
      <span class="progress-dot"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step4-gray.png" alt="" />
        <span class="gray">step4</span>
      </div>
      <span class="progress-dot"></span>
    </div>

    <div v-show="step === 2" class="c-process-container">
      <div class="progress-btn">
        <img src="../../assets/img/step1-done.png" />
        <span class="active">step1</span>
      </div>
      <span class="progress-dot active"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step2-done.png" alt="" />
        <span class="active">step2</span>
      </div>
      <span class="progress-dot active"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step3-gray.png" alt="" />
        <span class="gray">step3</span>
      </div>
      <div class="progress-btn">
        <img src="../../assets/img/step4-gray.png" alt="" />
        <span class="gray">step4</span>
      </div>
    </div>

    <div v-show="step === 3" class="c-process-container">
      <div class="progress-btn">
        <img src="../../assets/img/step1-done.png" />
        <span class="active">step1</span>
      </div>
      <span class="progress-dot active"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step2-done.png" alt="" />
        <span class="gray">step2</span>
      </div>
      <span class="progress-dot active"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step3-active.png" alt="" />
        <span class="gray">step3</span>
      </div>
      <span class="progress-dot active"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step4-gray.png" alt="" />
        <span class="gray">step4</span>
      </div>
    </div>

    <div v-show="step === 4" class="c-process-container">
      <div class="progress-btn">
        <img src="../../assets/img/step1-done.png" />
        <span class="active">step1</span>
      </div>
      <span class="progress-dot active"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step2-done.png" alt="" />
        <span class="active">step2</span>
      </div>
      <span class="progress-dot active"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step3-done.png" alt="" />
        <span class="active">step3</span>
      </div>
      <span class="progress-dot active"></span>

      <div class="progress-btn">
        <img src="../../assets/img/step4-done.png" alt="" />
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

.progress-dot {
  width:10px;
  height:10px;
  border-radius: 5px;
  background:#dedede;
}

.progress-dot.active {
  background:#4eb5ac;
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

  .progress-dot {
  width:5px;
  height:5px;
  border-radius: 2.5px;
  background:#dedede;
}
}
</style>
