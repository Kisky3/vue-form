import Vue from "vue";
const state = {
  initialImage: {
    thumnail: "",
    uploadFile: {},
    name: ""
  },
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
    },
    {
      thumnail: "",
      uploadFile: {},
      name: ""
    }
  ]
};

const getters = {
  getImageList(state) {
    return state.imageList;
  },

  getInitialImage(state) {
    return state.initialImage;
  }
};

const actions = {
  saveImageList({ commit }, imageList) {
    commit("saveImageList", imageList);
  }
};

const mutations = {
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
