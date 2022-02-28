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
      avatar: "",
      introduction: "",
      cover: "",
      tweetCount: null,
      followingCount: null,
      followerCount: null,
      likedCount: null,
      createdAt: "",
      updatedAt: "",
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser){
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      },
      state.isAuthenticated = true
    }
  },
   actions: {
    async fetchCurrentUser ({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        console.log(data)
        const { id, name, email, avatar, role } = data.user

        commit('setCurrentUser', {
          id,
          name,
          email,
          avatar,
          role
        })
      } catch (error) {
        console.log('error', error.message)
        console.error('can not fetch user information')
      }
    }
  },
  modules: {
  }
})
