import Vue from "vue";
import Component from "vue-class-component";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import https from "./utils/https";
import urls from "./utils/urls";
import "./registerServiceWorker";

import "./utils/element.register";

Vue.config.productionTip = false;
Vue.prototype.$http = https;
Vue.prototype.$urls = urls;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
