// ./src/views/SignIn.vue
<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <img src="../assets/image/Logo.png" alt="">
        <h1 class="h3 mb-3 font-weight-normal">
          後台登入
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="adminAccount">帳號</label>
        <input
          id="adminAccount"
          v-model="adminAccount"
          name="adminAccount"
          type="account"
          class="form-control"
          autocomplete="username"
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

      <button
        class="btn btn-lg  btn-block mb-3"
        type="submit"
      >
        登入
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/login">前台登入</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      adminAccount: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      const data = JSON.stringify({
        email: this.adminAccount,
        password: this.password
      })
      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log('data', data)
    }
  }
}
</script>