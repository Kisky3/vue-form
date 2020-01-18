<template>
  <div class="input-container">
    <div class="select-wrap">
      <i class="iconfont icon-pulldown"></i>
      <select v-model="main_category" @change="(sub_category = null), (sub_sub_category = null)">
        <option disabled="disabled" :value="null"> 大項目を選択してください</option>
        <option v-for="(item, index) in categoryList" :value="index" :key="index">{{
          item.main_category
        }}</option>
      </select>
    </div>

    <transition name="expand">
      <div class="select-wrap" v-show="subCategoryArray !== null">
        <i class="iconfont icon-pulldown"></i>
        <select v-model="sub_category" @change="sub_sub_category = null">
          <option disabled="disabled" :value="null">中項目を選択してください</option>
          <option v-for="(item, index) in subCategoryArray" :value="index" :key="index">{{
            item.sub_category
          }}</option>
        </select>
      </div>
    </transition>

    <transition name="expand">
      <div class="select-wrap" v-show="subCategoryArray !== null && subSubCategoryArray !== null">
        <i class="iconfont icon-pulldown"></i>
        <select v-model="sub_sub_category">
          <option disabled="disabled" :value="null">小項目を選択してください</option>
          <option v-for="(item, index) in subSubCategoryArray" :value="index" :key="index">{{
            item.sub_sub_category
          }}</option>
        </select>
      </div>
    </transition>
  </div>
</template>
<style>
.select-wrap {
  margin: 0 0 10px 0;
  position: relative;
  background: #fff;
}

.icon-pulldown {
  position: absolute;
  right: 5px;
  top: 50%;
  z-index: 2;
  color: #999;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

/* カテゴリーアニメーション */
.expand-enter-active, .expand-leave-active {
  transition: opacity .5s;
}

.expand-enter, .expand-leave-to {
  opacity: 0;
}
</style>

<script>
import categoryList from '../../settings/categoryList'
export default {
  name: "ItemCategories",
  data() {
    return {
      main_category: null,
      sub_category: null,
      sub_sub_category: null,
      categoryList: categoryList
    };
  },
  created: function() {},
  computed: {
    subCategoryArray: function() {
      return this.main_category !== null ? this.categoryList[this.main_category].sub_category : null;
    },
    subSubCategoryArray: function() {
      return this.sub_category !== null && this.subCategoryArray.length
        ? this.subCategoryArray[this.sub_category].sub_sub_category
        : null;
    }
  }
};
</script>
