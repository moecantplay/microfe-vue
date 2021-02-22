import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.use(VueResource);

Vue.http.headers.common["Access-Control-Allow-Origin"] = "*";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
