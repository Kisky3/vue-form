<template>
  <div>
    <process-bar :step="step" />
    <div class="c-page-container">
      <div class="c-page-title">
        <p>登録商品一覧</p>
      </div>
      <div class="c-page-row row">
        <add-item @addItem="addItem()" />
        <div v-for="(item, index) in itemList" :key="index">
          <item-preview :item="item" :index="index" />
        </div>
      </div>
      <next-btn
        @goToNext="openUserInformation()"
        :message="btnMessage"
        :class="goToNext ? '' : 'disabled'"
      />
      <span class="error-msg" v-show="showErrorMsg">{{ errorMsg }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import ProcessBar from "../components/molecules/Processbar";
import ItemPreview from "../components/molecules/ItemPreview";
import NextBtn from "../components/atoms/NextBtn";
import AddItem from "../components/molecules/ItemAdd";

export default {
  name: "ItemsList",
  data() {
    return {
      btnMessage: "次へ",
      step: 2,
      initialImageData: [
        {
          thumnail: "",
          uploadFile: {},
          name: ""
        },
        {
          thumnail: "",
          uploadFile: {},
          name: ""
        },
        {
          thumnail: "",
          uploadFile: {},
          name: ""
        }
      ],
      initialItemData: {
        title: null,
        images:{},
        cat_lvl0: null,
        cat_lvl1: null,
        cat_lvl2: null,
        item_comment: null
      },
      errorMsg: "",
      showErrorMsg: false
    };
  },
  components: {
    ProcessBar,
    ItemPreview,
    AddItem,
    NextBtn
  },
  computed: {
    ...mapGetters({
      itemList: "itemInformation/getItemList",
      imageList: "itemInformation/getImageList"
    }),
    goToNext() {
      return this.itemList.length > 0 ? true : false;
    }
  },
  methods: {
    ...mapActions({
      saveStoreImageList: "itemInformation/saveImageList",
      saveStoreItemList: "itemInformation/saveItemList"
    }),
    addItem: function() {
      this.$router.push({
        path: "/item_information",
        query: {
          item_id: this.itemList.length
        }
      });
      /* 画像リストに空のデータを追加する */
      this.imageList.splice(this.itemList.length, 1, this.initialImageData);
      this.saveStoreImageList(this.imageList);

      /* 商品リストに空のデータを追加する */
      this.itemList.splice(this.itemList.length, 1, this.initialItemData);
      this.saveStoreItemList(this.itemList);
    },
    openUserInformation: function() {
      if (this.goToNext) {
        this.$router.push(
          "user_information",
          () => {},
          () => {}
        );
      } else {
        this.setErrorMsg();
      }
    },
    setErrorMsg: function() {
      this.errorMsg = "商品を追加してください";
      this.showErrorMsg = true;
    }
  }
};
</script>

<style scoped></style>
