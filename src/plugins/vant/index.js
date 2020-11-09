import { Button } from "vant";

const vantCompanies = [Button];
export default {
  install(Vue) {
    vantCompanies.forEach(component => {
      Vue.use(component);
    });
  }
};
