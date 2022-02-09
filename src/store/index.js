import { createStore } from "vuex";

export default createStore({
  state: {
    theme: 'desserts'
  },
  mutations: {
    THEME_CHANGE (state, theme) {
      state.theme = theme
    }
  },
  actions: {
    themeChange ({ commit }, theme) {
      commit('THEME_CHANGE', theme)
    }
  },
  modules: {},
  getters: {
    theme (state) {
      return state.theme
    }
  }
});
