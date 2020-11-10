import { Button, Image, Form, Field } from "vant";

const vantCompanies = [Button, Image, Form, Field];
export default {
  install(Vue) {
    vantCompanies.forEach(component => {
      Vue.use(component);
    });
  }
};
