import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      email: "",
      password: "",
      name: "",
      account: "",
      role: "",
      avatar: "https://upload.wikimedia.org/wikipedia/zh/4/49/Nobi_Nobita.png",
      introduction: "無内容",
      cover: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Romance_of_the_Western_Chamber_poster.jpg",
      tweetCount: null,
      followingCount: null,
      followerCount: null,
      likedCount: null,
      createdAt: "",
      updatedAt: "",
    },
    isAuthenticated: false,
    // 新增 token 屬性
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      },
        // 將使用者驗證用的 token 儲存在 state 中
        state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        console.log(data)
        const { account, id, name, email, role } = data.user

        commit('setCurrentUser', {
          account,
          id,
          name,
          email,
          role
        })
        return true
      } catch (error) {
        console.log('error', error.message)
        console.error('can not fetch user information')
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
