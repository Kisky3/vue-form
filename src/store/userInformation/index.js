import Vue from "vue";

const state = {
  userData: {},
};

const getters = {
  getUserData(state) {
    return state.userData;
  }
};

const actions = {
  saveUserData({ commit }, userData) {
    commit("saveUserData", userData);
  }
};

const mutations = {
  saveUserData(state, userData) {
    Vue.set(state.userData, userData);
  }
};

const userInformation = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default userInformation;
