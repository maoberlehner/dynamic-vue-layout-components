import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    console.log('[created] ' + this.$options.name)
  },
  // mounted() {
  //     console.log('[mounted] ' + this.$options.name)
  // }
});

new Vue({
  router,
  render: h => h(App),
}).$mount(`#app`);
