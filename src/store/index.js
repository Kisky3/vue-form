import Vuex from 'vuex'
import Vue from 'vue'
import itemInformation from "./itemInformation";
import userInformation from "./userInformation";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    itemInformation,
    userInformation
  }
});

export default store;