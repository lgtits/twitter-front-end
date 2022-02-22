// ./src/views/SignIn.vue
<template>
  <div class="container">
    <form class="" @submit.prevent.stop="handleSubmit">
      <div class="">
        <img src="../assets/image/Logo.png" alt="">
        <h1 class="">
          登入 Alphitter
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
          <router-link to="/regist">註冊Alphitter</router-link>
          <a>·</a>
          <router-link to="/adminlogin">後台登入</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
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


<style lang="scss" scoped>

</style>