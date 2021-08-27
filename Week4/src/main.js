import Vue from "vue";
import Vuex from "vuex";

import App from "./App.vue";

import axios from "axios";

import { router } from "./router";
import { store } from "./store.js";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
