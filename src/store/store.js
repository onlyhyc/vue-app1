import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'
import menu from './modules/menu'
import users from './modules/users'
import status from './modules/status'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    menu,
    users,
    status
  }
})
