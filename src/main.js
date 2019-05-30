import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$ajax = axios;
Vue.prototype.$qs = qs;
new Vue({
      el:'#app',
      router,
      render: h => h(App)
}).$mount('#app');

// 配置路由权限
router.beforeEach((to, from, next) => {
      // alert(document.cookie.length);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限

    if (document.cookie.length!=0) { // 判断本地是否存在access_token
      next()
    } else {
      // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
        alert('请登录');
      next({
      path: '/',
      })
    }
  } else {
    next()
  }
});