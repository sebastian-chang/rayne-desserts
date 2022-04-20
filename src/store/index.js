import { createStore } from "vuex";

export default createStore({
  state: {
    theme: 'desserts',
    windowWidth: window.innerWidth,
    windowType: '',
    deviceType: '',
    showMobileNav: false,
  },
  mutations: {
    THEME_CHANGE (state, theme) {
      state.theme = theme
    },
    SET_WINDOW_WIDTH (state, width) {
      console.log('###UPDATE WIDTH')
      state.windowWidth = width
    },
    SET_WINDOW_TYPE (state, type) {
      console.log('###UPDATE TYPE')
      state.windowType = type
    },
    SET_DEVICE_TYPE (state, type) {
      console.log('###UPDATE DEVICE TYPE')
      state.deviceType = type
    },
    SET_MOBILE_NAV_VIEW (state, type) {
      state.showMobileNav = type
    }
  },
  actions: {
    themeChange ({ commit }, theme) {
      commit('THEME_CHANGE', theme)
    },
    windowWidthChange ({ commit }, width) {
      commit('SET_WINDOW_WIDTH', width)
    },
    windowTypeChange ({ commit }, type) {
      commit('SET_WINDOW_TYPE', type)
    },
    deviceTypeChange ({ commit }, type) {
      commit('SET_DEVICE_TYPE', type)
    },
    showMobileNavChange ({ commit }, type) {
      commit('SET_MOBILE_NAV_VIEW', type)
    }
  },
  modules: {},
  getters: {
    theme (state) {
      return state.theme
    },
    windowWidth (state) {
      return state.windowWidth
    },
    windowType (state) {
      return state.windowType
    },
    deviceType (state) {
      return state.deviceType
    },
    showMobileNav (state) {
      return state.showMobileNav
    },
  }
});
