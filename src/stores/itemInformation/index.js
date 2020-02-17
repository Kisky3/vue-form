import Vue from "vue";
const state = {
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
  userData: {},
};

const getters = {
  getImageData(state) {
    return state.imageData;
  },

  getItemList(state) {
    return state.itemList;
  },

  getImageList(state) {
    return state.imageList;
  }
};

const actions = {
  saveImageData({ commit }, imageData) {
    commit("saveImageData", imageData);
  },

  saveItemList({ commit }, itemList) {
    commit("saveItemList", itemList);
  },

  saveImageList({ commit }, imageList) {
    commit("saveImageList", imageList);
  }
};

const mutations = {
  saveImageData(state, imageData) {
    Vue.set(state.imageData, imageData);
  },

  saveItemList(state, itemList) {
    Vue.set(state.itemList, itemList);
  },

  saveImageList(state, imageList) {
    Vue.set(state.imageList, imageList);
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
