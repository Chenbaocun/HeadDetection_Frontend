//自行新建存储路由信息，编写完成之后需要在main.js中进行注册
import home from './components/home.vue'
import FunPlus from './components/FunPlus.vue'
import community from './components/community'
import discovery from  './components/discovery'
import real_time from './components/real_time'
import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);//如果以import的方式引入，则必须明确安装路由功能
const routes=[
    {path:'/',component:home},
    {path:'/real-time',component:real_time,meta: {requireAuth: true}},
    {path:'/FunPlus',component:FunPlus,meta: {requireAuth: true}},
    {path:'/abnormal',component:community,meta: {requireAuth: true}},
    {path:'/detection_util',component:discovery,meta: {requireAuth: true}}

];

const router=new VueRouter({
    routes
});
export default router