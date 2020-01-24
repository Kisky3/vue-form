import Vue from "vue";
const state = {
  imageList: [
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
  itemInformation:{
  },
  itemList:[],
};

const getters = {
  getImageList(state) {
    return state.imageList;
  },

  getItemInformation(state) {
    return state.itemInformation;
  }
};

const actions = {
  saveImageList({ commit }, imageList) {
    commit("saveImageList", imageList);
  },

  saveItemList({ commit }, itemList) {
    commit('saveItemList')
  }
};

const mutations = {
  saveImageList(state, imageList) {
    Vue.set(state.imageList, imageList);
  },

  saveItemList(state, itemList){
    Vue.set(state.itemList, itemList);
  }
};

const itemInformation = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default itemInformation;
