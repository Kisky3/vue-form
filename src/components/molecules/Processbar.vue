<template>
  <div>
    <div class="c-process-container">
      <div class="progress-btn">
        <img :src="(step1 === 'active') ? step1_active_path : step1_inactive_path">
        <span :class="(step1 === 'active') ? 'active' : 'gray'">商品登録</span>
      </div>
      <span :class="(step1 === 'active') ? 'progress-mark': 'progress-mark inactive'" />

      <div class="progress-btn">
        <img :src="(step2 === 'active') ? step2_active_path : step2_inactive_path">
        <span :class="(step2 === 'active') ? 'active' : 'gray'">商品確認</span>
      </div>
      <span :class="(step2 === 'active') ? 'progress-mark': 'progress-mark inactive'" />

      <div class="progress-btn">
        <img :src="(step3 === 'active') ? step3_active_path : step3_inactive_path">
        <span :class="(step3 === 'active') ? 'active' : 'gray'">お客様情報</span>
      </div>
      <span :class="(step3 === 'active') ? 'progress-mark': 'progress-mark inactive'" />

      <div class="progress-btn">
        <img :src="(step4 === 'active') ? step4_active_path : step4_inactive_path">
        <span :class="(step4 === 'active') ? 'active' : 'gray'">完了 </span>
      </div>
    </div>
  </div>
</template>
<script>
import step1_active from '../../assets/img/step1_active.svg'
import step1_inactive from '../../assets/img/step1_inactive.svg'
import step2_active from '../../assets/img/step2_active.svg'
import step2_inactive from '../../assets/img/step2_inactive.svg'
import step3_active from '../../assets/img/step3_active.svg'
import step3_inactive from '../../assets/img/step3_inactive.svg'
import step4_active from '../../assets/img/step4_active.svg'
import step4_inactive from '../../assets/img/step4_inactive.svg'

export default {
  name: 'ProcessBar',
  props: {
    step1: { type: String, required: false },
    step2: { type: String, required: false },
    step3: { type: String, required: false },
    step4: { type: String, required: false }
  },
  data() {
    return {
      step1_active_path: step1_active,
      step1_inactive_path: step1_inactive,
      step2_active_path: step2_active,
      step2_inactive_path: step2_inactive,
      step3_active_path: step3_active,
      step3_inactive_path: step3_inactive,
      step4_active_path: step4_active,
      step4_inactive_path: step4_inactive,
    }
  }
}
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
  margin-top: -5px;
}
.progress-btn > span.gray {
  padding: 2px 10px;
  background: transparent;
  color: #dedede;
  font-size: 15px;
  border-radius: 5px;
  margin-top: -5px;
}
.progress-btn > img {
  width: 40px;
  margin-bottom: 5px;
}

.progress-mark {
  width: 10px;
  height: 10px;
  position: relative;
}

.progress-mark.active:before {
  content: "";
  position: absolute;
  left: 0;
  top: -12px;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid #6ab3ac;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.progress-mark.active:before {
  border-left: 10px solid #6ab3ac;
}

.progress-mark.inactive:before {
    content: "";
  position: absolute;
  left: 0;
  top: -12px;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid #dedede;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.progress-mark:before {
    content: "";
    position: absolute;
    left: 0;
    top: -12px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 10px solid #6ab3ac;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
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
    width: 35px;
    margin-bottom: 5px;
  }
  .progress-mark {
    width: 8px;
    height: 8px;
    position: relative;
  }
  .progress-mark:before {
    content: "";
    position: absolute;
    left: 0;
    top: -12px;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-left: 8px solid #6ab3ac;
    border-right: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
}
</style>
