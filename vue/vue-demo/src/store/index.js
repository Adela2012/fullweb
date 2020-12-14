import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from '../i-vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
    add({commit}) {
      setTimeout(() => {
        commit('add')
      }, 4);
    }
  },
  modules: {
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})
