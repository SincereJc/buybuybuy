import Vue from 'vue';
import App from './App.vue';
// 导入element-ui模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 导入样式
import './assets/statics/site/css/style.css';
// 导入vue-router模块
import VueRouter from 'vue-router';
// 导入组件
import index from './components/index.vue';
import daily from './components/daily.vue';

Vue.use(VueRouter);
// 定义路由
const routes = [
  { path: '/', component: index },
  { path: '/index', component: index },
  { path: '/daily', component: daily }
];
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes 
});




Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 挂载到vue实例
  router
}).$mount('#app');
