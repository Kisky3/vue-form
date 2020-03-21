import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemData: {
      title: null,
      images: {},
      cat_lvl0: null,
      cat_lvl1: null,
      cat_lvl2: null,
      condition: '中古',
      item_comment: ''
    },
    imageData: [
      {
        thumnail: '',
        uploadFile: {},
        name: ''
      },
      {
        thumnail: '',
        uploadFile: {},
        name: ''
      },
      {
        thumnail: '',
        uploadFile: {},
        name: ''
      }
    ],
    itemList: [],
    imageList: [],
    userData: {}
  },
  mutations: {
    saveStoreItemList(state, itemList) {
      state.itemList = [ ...itemList ]
    },
    saveStoreImageList(state, imageList) {
      state.imageList = [ ...imageList ]
    },
    saveStoreUserData(state, userData) {
      state.userData = { ...userData }
    }
  },
})
