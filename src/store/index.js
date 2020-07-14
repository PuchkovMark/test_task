import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    setAuth(state) {
      state.isLoggedIn = true
    }
  },
  getters: {
    isLoggedIn: s => s.isLoggedIn
  },
  actions: {
    login({commit}) {
      commit('setAuth')
    },
    async fetchData() {
      const res = await fetch('http://localhost:3000/profile')
      return await res.json()
    }
  },
  modules: {
  }
})
