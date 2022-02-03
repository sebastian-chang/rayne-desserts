import { createStore } from "vuex";

export default createStore({
  state: {
    theme: 'dessert'
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
});
