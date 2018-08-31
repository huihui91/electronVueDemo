import Vue from 'vue'
import axios from 'axios'

import App from './App'
import store from './store'

import VueRouter from 'vue-router'
import routeConfig from './router-config'
import VueResource from 'vue-resource'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// 加载路由中间件
Vue.use(VueRouter)
Vue.use(VueResource)

//定义路由
const router = new VueRouter({
  routes: routeConfig
})

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
