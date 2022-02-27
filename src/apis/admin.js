import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  // 帶入需要的參數
  adminSignIn ({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  },
  adminGetUsers() {
    return apiHelper.post('/admin/users', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}