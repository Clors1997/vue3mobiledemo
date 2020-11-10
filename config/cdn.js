module.exports = {
  // 是否启用CDN
  enable: true,
  JS: {
    vue: {
      url: "https://cdn.bootcdn.net/ajax/libs/vue/3.0.0/vue.cjs.min.js",
      exportName: "Vue"
    },
    vuex: {
      url: "https://cdn.bootcdn.net/ajax/libs/vuex/4.0.0-rc.1/vuex.cjs.min.js",
      exportName: "Vuex"
    },
    "vue-router": {
      url:
        "https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.0-rc.1/vue-router.cjs.min.js",
      exportName: "VueRouter"
    },
    axios: "https://cdn.bootcss.com/axios/0.21.0/axios.min.js"
  },
  CSS: {}
};
