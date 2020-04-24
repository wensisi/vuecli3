import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import ElementUI from 'element-ui'
import Vuei18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css';
// require('./mock/index.js')  cli2 使用这种方式  但是cli3貌似不生效
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuei18n);

Vue.prototype.$center = new Vue();

// vue-keycloak
// dllReferencePlugin
// git config --global user.name 'wensisi'
// git config --global user.email '34589@qq.com'
// ssh-keygen -t rsa -C "34589@qq.com"

// 注册一个全局自定义指令 v-focus
// Vue.directive('validate', {
//   // 当绑定元素插入到 DOM 中。
//   inserted: function (el) {
//     // 聚焦元素
//     console.log('el:', el);
//   }
//   bind:function(){}
// })
new Vue({
  router,
  store,
  Axios,
  render: h => h(App)
}).$mount('#app')
