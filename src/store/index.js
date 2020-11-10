import { createStore } from "vuex";

export default createStore({
  state: {
    sidebarShow: false
  },
  mutations: {
    setSidebarShow(state, flag) {
      state.sidebarShow = flag;
    }
  },
  actions: {},
  modules: {}
});
