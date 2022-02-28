// ./src/router/index.js
import VueModal from '@kouts/vue-modal'
import '../assets/style/vue-modal.css'
Vue.component('Modal', VueModal)

import store from './../store'


import Vue from 'vue'
import VueRouter from 'vue-router'
import LognIn from '../views/LogIn.vue'
import Regist from '../views/Regist.vue'
import Setting from '../views/Setting.vue'
import AdminLogIn from '../views/AdminLogIn.vue'
import AdminTweets from '../views/AdminTweets.vue'
import AdminUsers from '../views/AdminUsers.vue'
import NotFound from '../views/NotFound.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)


const routes = [
  // 根目錄
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
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
    path: '/admin',
    name: 'adminRoot',
    redirect: '/adminlogin'
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
    name: 'adminusers',
    component: AdminUsers
  },
  // 首頁
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  // 推文回覆頁
  {
    path: '/tweet/:id',
    name: 'tweet',
    component: () => import('@/views/Reply.vue') 
  },
  // user系列
  {
    path: '/user/:id',
    component: () => import('@/views/User.vue'),
    children: [
      // 推文
      {
        path: 'tweets',
        name: 'user-tweets',
        component: () => import('@/components/TweetContent.vue')
      },
      // 推文與回覆
      {
        path: 'replies',
        name: 'user-replies',
        component: () => import('@/components/ReplyContent.vue')
      },
      // 喜歡的內容
      {
        path: 'likes',
        name: 'user-likes',
        component: () => import('@/components/LikeContent.vue')
      },
      {
        path: 'followings',
        name: 'user-followings',
        component: () => import('@/components/FollowingContent.vue')
      },
      {
        path: 'followers',
        name: 'user-followers',
        component: () => import('@/components/FollowerContent.vue')
      }
  ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  // 使用 dispatch 呼叫 Vuex 內的 actions
  store.dispatch('fetchCurrentUser')
  next()
})


export default router