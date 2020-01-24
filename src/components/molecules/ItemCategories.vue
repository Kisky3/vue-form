<template>
  <div class="input-container">
    <div class="select-wrap">
      <i class="iconfont icon-pulldown"></i>
      <validation-provider rules="required" name="カテゴリー 大項目">
        <div slot-scope="ProviderProps">
          <select
            v-model="cat_lvl0"
            @change="(cat_lvl1 = null), (cat_lvl2 = null)"
            :class="ProviderProps.errors[0] ? 'error-active' : ''"
          >
            <option disabled="disabled" :value="null">
              大項目を選択してください</option
            >
            <option
              v-for="(item, index) in categoryList"
              :value="index"
              :key="index"
              >{{ item.main_category }}</option
            >
          </select>
          <div class="error-message">
            <span
              v-show="ProviderProps.errors[0]"
              class="iconfont icon-warn"
            ></span>
            {{ ProviderProps.errors[0] }}
          </div>
        </div>
      </validation-provider>
    </div>

    <transition name="expand">
      <div class="select-wrap" v-show="subCategoryArray !== null">
        <i class="iconfont icon-pulldown"></i>
        <validation-provider rules="required" name="カテゴリー 中項目">
          <div slot-scope="ProviderProps">
            <select
              v-model="cat_lvl1"
              @change="cat_lvl2 = null"
              :class="ProviderProps.errors[0] ? 'error-active' : ''"
            >
              <option disabled="disabled" :value="null"
                >中項目を選択してください</option
              >
              <option
                v-for="(item, index) in subCategoryArray"
                :value="index"
                :key="index"
                >{{ item.sub_category }}</option
              >
            </select>
            <div class="error-message">
              <span
                v-show="ProviderProps.errors[0]"
                class="iconfont icon-warn"
              ></span>
              {{ ProviderProps.errors[0] }}
            </div>
          </div>
        </validation-provider>
      </div>
    </transition>

    <transition name="expand">
      <div
        class="select-wrap"
        v-show="subCategoryArray !== null && subSubCategoryArray !== null"
      >
        <i class="iconfont icon-pulldown"></i>
        <validation-provider rules="required" name="カテゴリー 小項目">
          <div slot-scope="ProviderProps">
            <select
              v-model="cat_lvl2"
              :class="ProviderProps.errors[0] ? 'error-active' : ''"
            >
              <option disabled="disabled" :value="null"
                >小項目を選択してください</option
              >
              <option
                v-for="(item, index) in subSubCategoryArray"
                :value="index"
                :key="index"
                >{{ item.sub_sub_category }}</option
              >
            </select>
            <div class="error-message">
              <span
                v-show="ProviderProps.errors[0]"
                class="iconfont icon-warn"
              ></span>
              {{ ProviderProps.errors[0] }}
            </div>
          </div>
        </validation-provider>
      </div>
    </transition>
  </div>
</template>
<style>
.select-wrap {
  margin: 0 0 10px 0;
  position: relative;
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
.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.5s;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}
</style>

<script>
import categoryList from "../../settings/categoryList";
import { ValidationProvider, extend } from "vee-validate";
export default {
  name: "ItemCategories",
  components: {
    ValidationProvider
  },
  data() {
    return {
      cat_lvl0: null,
      cat_lvl1: null,
      cat_lvl2: null,
      categoryList: categoryList
    };
  },
  computed: {
    subCategoryArray: function() {
      return this.cat_lvl0 !== null
        ? this.categoryList[this.cat_lvl0].sub_category
        : null;
    },
    subSubCategoryArray: function() {
      return this.cat_lvl1 !== null && this.subCategoryArray.length
        ? this.subCategoryArray[this.cat_lvl1].sub_sub_category
        : null;
    }
  }
};
</script>
