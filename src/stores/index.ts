import Vuex, { MutationTree } from 'vuex'
import Vue from 'vue'
import { ItemData, ImageItem, RootState, UserData } from './types'

Vue.use(Vuex)

const state: RootState = {
  itemData: {
    images: [],
    cat_lvl0: null,
    cat_lvl1: null,
    cat_lvl2: null,
    condition: '中古',
    item_comment: ''
  },
  imageData: [
    {
      thumnail: '',
      uploadFile: null,
      name: ''
    },
    {
      thumnail: '',
      uploadFile: null,
      name: ''
    },
    {
      thumnail: '',
      uploadFile: null,
      name: ''
    }
  ],
  itemList: [],
  imageList: [],
  userData: {}
}

const mutations: MutationTree<RootState> = {
  saveStoreItemList: (state, itemList: ItemData[]) => {
    state.itemList = [...itemList]
  },
  saveStoreImageList(state, imageList: ImageItem[]) {
    state.imageList = [...imageList]
  },
  saveStoreUserData(state, userData: UserData) {
    state.userData = { ...userData }
  }
}

export default new Vuex.Store<RootState>({
  state,
  mutations
})
