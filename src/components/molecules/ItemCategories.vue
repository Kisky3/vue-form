<template>
  <div class="input-container">
    <validate-select
      v-model="cat_lvl0"
      rules="required"
      name="カテゴリー 大項目"
      @input="
        ;(cat_lvl1 = null),
          (cat_lvl2 = null),
          submitCatLvl0(cat_lvl0),
          submitCatLvl1(cat_lvl1),
          submitCatLvl2(cat_lvl2)
      "
    >
      <option selected disabled="disabled" :value="null">
        大項目を選択してください
      </option>
      <option
        v-for="(item, index) in categoryList"
        :key="index"
        :value="item.title"
      >
        {{ item.title }}
      </option>
    </validate-select>

    <transition-wrapper :is-show="subCategoryArray.length > 0">
      <validate-select
        v-model="cat_lvl1"
        rules="required"
        name="カテゴリー 中項目"
        @input="
          ;(cat_lvl2 = null), submitCatLvl1(cat_lvl1), submitCatLvl2(cat_lvl2)
        "
      >
        <option selected disabled="disabled" :value="null">
          中項目を選択してください
        </option>
        <option
          v-for="(item, index) in subCategoryArray"
          :key="index"
          :value="item.title"
        >
          {{ item.title }}
        </option>
      </validate-select>
    </transition-wrapper>

    <transition-wrapper :is-show="subSubCategoryArray.length > 0">
      <validate-select
        v-model="cat_lvl2"
        rules="required"
        name="カテゴリー 小項目"
        @input="submitCatLvl2(cat_lvl2)"
      >
        <option selected disabled="disabled" :value="null">
          小項目を選択してください
        </option>
        <option
          v-for="(item, index) in subSubCategoryArray"
          :key="index"
          :value="item.title"
        >
          {{ item.title }}
        </option>
      </validate-select>
    </transition-wrapper>
  </div>
</template>
<style></style>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ItemData } from '@/stores/types'
import { Category } from '@/constants/types'
import categoryList from '@/constants/categoryList'
import ValidateSelect from '@/components/molecules/ValidateSelect.vue'
import TransitionWrapper from '@/components/molecules/TransitionWrapper.vue'

type Data = {
  cat_lvl0: string | null
  cat_lvl1: string | null
  cat_lvl2: string | null
  categoryList: Category[]
}

export default Vue.extend({
  name: 'ItemCategories',
  components: {
    ValidateSelect,
    TransitionWrapper
  },
  props: { itemData: Object as PropType<ItemData> },
  data(): Data {
    return {
      cat_lvl0: this.itemData.cat_lvl0,
      cat_lvl1: this.itemData.cat_lvl1,
      cat_lvl2: this.itemData.cat_lvl2,
      categoryList
    }
  },
  computed: {
    subCategoryArray(): Category[] {
      if (this.cat_lvl0 === null) {
        return []
      }
      const catLvl1Obj = this.categoryList.find((cat0: Category) => {
        return cat0.title === this.cat_lvl0
      })
      return catLvl1Obj && catLvl1Obj.option ? catLvl1Obj.option : []
    },
    subSubCategoryArray(): Category[] {
      if (this.cat_lvl0 === null || this.cat_lvl1 === null) {
        return []
      }

      const catlvl2Obj = this.subCategoryArray.find((cat1: Category) => {
        return cat1.title === this.cat_lvl1
      })
      return catlvl2Obj && catlvl2Obj.option ? catlvl2Obj.option : []
    }
  },
  methods: {
    submitCatLvl0(catLvl0: string) {
      this.$emit('submitCatLvl0', catLvl0)
    },
    submitCatLvl1(catLvl1: string) {
      this.$emit('submitCatLvl1', catLvl1)
    },
    submitCatLvl2(catLvl2: string) {
      this.$emit('submitCatLvl2', catLvl2)
    }
  }
})
</script>
