//自行新建存储路由信息，编写完成之后需要在main.js中进行注册
import home from './components/home.vue'
import FunPlus from './components/FunPlus.vue'
import community from './components/community'
import discovery from  './components/discovery'
import real_time from './components/real_time'
import myupload from './components/myupload'
import result from './components/result'
import threshold from './components/threshold'
import advice from './components/advice'
import ECShardware from './components/ECShardware'
import platformIntroduce from './components/platformIntroduce'
import privacyStatement from './components/privacyStatement'
import real_time_count from './components/real_time_count'
import online_user from './components/online_user'
import abnormalImage from './components/abnormalImage'
import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);//如果以import的方式引入，则必须明确安装路由功能
const routes=[
    {path:'/',component:home},
    {path:'/real_time',component:real_time,meta: {requireAuth: true},
    children:[
        {path:'/real_time_count',component:real_time_count},
        {path:'/abnormalImage',component:abnormalImage},
        {path:'/online_user',component:online_user},
        {path:'/ECShardware',component:ECShardware},
        {path:'/platformIntroduce',component:platformIntroduce},
        {path:'/privacyStatement',component:privacyStatement},
        {path:'/threshold',component:threshold},
    ]},
    {path:'/FunPlus',component:FunPlus,meta: {requireAuth: true}},
    {path:'/me',component:community,meta: {requireAuth: true},
    children:[
        {path:'/myupload',component:myupload},
        {path:'/result',component:result},
        {path:'/advice',component:advice},
    ]},
    {path:'/detection_util',component:discovery,meta: {requireAuth: true}},


];

const router=new VueRouter({
    routes
});
export default router