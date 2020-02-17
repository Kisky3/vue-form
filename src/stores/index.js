import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemData: {
      title: null,
      images: {},
      cat_lvl0: null,
      cat_lvl1: null,
      cat_lvl2: null,
      item_comment: null
    },
    imageData: [
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
    itemList: [],
    imageList: [],
    userData: {}
  },
  mutations: {
    saveStoreItemData: (itemList, state) => {
      state.itemList = itemList;
    },
    saveStoreImageData: (imageList, state) => {
      state.imageList = imageList
    }
  },
  actions: {}
});
