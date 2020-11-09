import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vantPlugin from "./plugins/vant";
import "amfe-flexible";
import "./styles/iconfont.css";

createApp(App)
  .use(vantPlugin)
  .use(store)
  .use(router)
  .mount("#app");
