// ./src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import LognIn from '../views/LogIn.vue'
import Regist from '../views/Regist.vue'
import Setting from '../views/Setting.vue'
import AdminLogIn from '../views/AdminLogIn.vue'
import AdminTweets from '../views/AdminTweets.vue'
import AdminUsers from '../views/AdminUsers.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'log-in',
    component: LognIn
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/adminlogin',
    name: 'adminlog-in',
    component: AdminLogIn
  },
  {
    path: '/admintweets',
    name: 'admintweets',
    component: AdminTweets
  },
  {
    path: '/adminusers',
    name: 'adminUsers',
    component: AdminUsers
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
})

export default router