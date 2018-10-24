import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'
// import menu from './modules/menu'
// import users from './modules/users'
// import status from './modules/status'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    menuItems:{},
    currentUser:null,
    isLogin:false
  },
  getters:{
      getMenuItems:state=>state.menuItems,
      currentUser:state=>state.currentUser,
      isLogin:state=>state.isLogin
  },
  mutations:{
    setMenuItems(state,data){
      state.menuItems = data;
    },
    removeMenuItems(state,data){
      state.menuItems.forEach((value,key)=>{
        if(value == data){
          state.menuItems.splice(key,1)
        }
      })
    },
    pushToMenuItem(state,data){
      state.menuItems.push(data)
    },
    userStatus(state,user){
      if(user){
        state.currentUser=user,
        state.isLogin=true
      }
      else{
        state.currentUser=null,
        state.isLogin=false
      }
    }
  },
  actions:{
    setUser({commit},user){
      commit('userStatus',user)
    }
  }
})
