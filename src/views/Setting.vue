<template>
  <div class="container py-5">
    <div>
      <Navbar />
    </div>
    <form class="w-100" >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          帳戶設定
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="account">帳號</label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="account"
          class="form-control"
          autocomplete="username"
          required
          autofocus
        >
      </div>
      <div class="form-label-group mb-2">
        <label for="account">名稱</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="name"
          class="form-control"
          autocomplete="name"
          required
          autofocus
        >
      </div>
      <div class="form-label-group mb-2">
        <label for="account">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          autocomplete="email"
          required
          autofocus
        >
      </div>
      <div class="form-label-group mb-3">
        <label for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          autocomplete="current-password"
          required
        >
      </div>
      <div class="form-label-group mb-3">
        <label for="passwordCheck">密碼確認</label>
        <input
          id="passwordCheck"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          required
        >
      </div>
      <button
        class="btn btn-lg  btn-block mb-3"
        type="submit"
      >
        儲存
      </button>
    </form>
  </div>
</template>

<script>
import Navbar from './../components/Navbar'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      passwordCheck: ''
    }
  },
  methods: {
    handleSubmit () {
      const data = JSON.stringify({
        email: this.account,
        password: this.password
      })
      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log('data', data)
    }
  }
}
</script>