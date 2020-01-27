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
  initialItemData: {
    title: null,
    cat_lvl0: null,
    cat_lvl1: null,
    cat_lvl2: null,
    item_comment: null
  },
  itemList: [],
  imageList: []
};

const getters = {
  getImageData(state) {
    return state.imageData;
  },

  getItemData(state, index) {
    if (state.itemList.length === 0 || state.itemList.length < index) {
      return state.initialItemData;
    }
    return state.itemList[index];
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
    console.log("itemList");
    console.log(itemList.length);
    Vue.set(state.itemList, itemList);
  },

  saveImageList(state, imageList) {
    console.log("imageList");
    console.log(imageList[0]);
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
