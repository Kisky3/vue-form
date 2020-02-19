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
    saveStoreItemList(state, itemList) {
      Vue.set(state.itemList, itemList);
    },
    saveStoreImageList(state, imageList) {
      Vue.set(state.imageList, imageList);
    }
  },
  actions: {
    saveStoreItemList({ commit }, itemList) {
      commit("saveStoreItemList", itemList);
      console.log('saveStoreItemList itemList');
      console.log(itemList);
    },
    saveStoreImageList({ commit }, imageList) {
      commit("saveStoreImageList", imageList);
      console.log('saveStoreImageList imageList');
      console.log(imageList);
    }
  }
});
