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
  actions: {
    saveStoreItemList({ commit }, itemList) {
      commit("saveStoreItemList", itemList);
    },
    saveStoreImageList({ commit }, imageList) {
      commit("saveStoreImageList", imageList);
    },
    saveStoreUserData({ commit }, userData) {
      commit("saveStoreUserData", userData);
    }
  },
  mutations: {
    saveStoreItemList(state, itemList) {
      console.log('itemList in store');
      console.log(itemList);
      Vue.set(state.itemList, itemList);
    },
    saveStoreImageList(state, imageList) {
      Vue.set(state.imageList, imageList);
    },
    saveStoreUserData(state, userData) {
      Vue.set(state.userData, userData);
    }
  },
});
