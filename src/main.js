// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routers} from './routes'
import axios from 'axios'
import {store} from './store/storeold'

const router = new VueRouter({
  routes:routers,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    return {
      x:0,
      y:0
    }
    // return{selector:'.btn'}返回选择器
    //if(savedPosition){ return savedPosition else{ return {x:0,y:0}}}返回保存位置
  }
})

// router.beforeEach((to,from,next)=>{
//   alert("你还没有登录，请先登录！");
//   next()
//   if(to.path=='/login' || tp.path == '/register'){
//     next()
//   }
//   else{
//     alert("你还没有登录，请先登录！");
//     next('/login')
//   }
// })
//后置钩子
// router.afterEach((to,from)=>{
//   alert('after each')
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
