import Vuex from 'vuex'
import Vue from 'vue'
import itemInformation from "./itemInformation";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    itemInformation
  }
});

export default store;