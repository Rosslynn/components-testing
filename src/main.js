import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const baseURL = process.env.BASE_URL_RICK_AND_MORTY;
console.log({ baseURL }, process.env);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
