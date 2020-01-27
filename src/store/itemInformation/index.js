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
  itemData:{
    title: null,
    cat_lvl0: null,
    cat_lvl1: null,
    cat_lvl2: null,
    item_comment: null
  },
  itemList:[],
};

const getters = {
  getImageList(state) {
    return state.imageList;
  },

  getItemData(state) {
    return state.itemData;
  },

  getItemList(state) {
    return state.itemList;
  }
};

const actions = {
  saveImageList({ commit }, imageList) {
    commit("saveImageList", imageList);
  },

  saveItemList({ commit }, itemList) {
    commit('saveItemList', itemList)
  }
};

const mutations = {
  saveImageList(state, imageList) {
    Vue.set(state.imageList, imageList);
  },

  saveItemList(state, itemList){
    console.log('itemList');
    console.log(itemList.length);
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
