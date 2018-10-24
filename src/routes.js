import Home from './components/Home.vue'
import Admin from './components/Admin.vue'
import Menu from './components/Menu.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import About from './components/about/About.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'


//二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import Guide from './components/about/Guide.vue'
import History from './components/about/History.vue'

//三极路由
import Tel from './components/about/contact/Tel.vue'
import userName from './components/about/contact/userName.vue'

Vue.use(VueRouter)

export const routers = [
  {path:'/',name:'homeLink',components:{
    default:Home,
    'reuseGuide':Guide,
    'reuseHistory':History,
    'reuseDElivery':Delivery
  }},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
    {path:'/about/contact',name:'contactLink',redirect:'/tel',component:Contact,children:[
      {path:'/tel',name:'telLink',component:Tel},
      {path:'/username',name:'userNameLink',component:userName}
    ]},
    {path:'/history',name:'historyLink',component:History},
    {path:'/guide',name:'guideLink',component:Guide},
    {path:'/delivery',name:'deliveryLink',component:Delivery}
  ]},
  {path:'*',redirect:'/'}
]
