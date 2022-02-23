<template>
  <div class="container">
    <form class="" @submit.prevent.stop="handleSubmit">
      <div class="upper">
        <img class="logo" src="../assets/image/Logo.png" alt="">
        <h1 class="title">
          建立你的帳號
        </h1>
      </div>
      <div class="input-box">
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
      <div class="input-box">
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
      <div class="input-box">
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
      <div class="input-box">
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
      <div class="input-box">
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
        class="sign-up"
        type="submit"
      >
        註冊
      </button>
      <div class="cancel">
        <p>
          <router-link to="/login">取消</router-link>
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

<style lang="scss" scoped>
  .container{
    form{
      width: 540px;
      margin: 64px auto;
      .upper{
        .logo{
          margin: 0 auto;
          width: 50px;
          height: 50px;
        }
        .title{
          text-align:center;
          margin: 20px auto 40px auto;
          font-family: Noto Sans TC;
          font-style: normal;
          font-size: 23px;
          font-weight: bold;
        }
      }
      .input-box{
        position: relative;
        margin-bottom: 32px;
        background-color:#F5F8FA;
        width: 540px;
        border-bottom: solid 2px #657786;
        border-radius: 0px 0px 4px 4px;
        label{
          font-weight: 500;
          font-size: 15px;
          line-height: 15px;
          color: #657786;
          position: absolute;
          left: 10px;
          top: 5px;
        }
      }
      #account, #name, #email, #password, #passwordCheck{
        padding: 0 0 0 50px;
        height: 52px;
        background-color:#F5F8FA;
        border: none;
        font-size: 30px;
        &:focus {
          outline: none;
        }
      }
      .sign-up{
        margin: 10px auto 20px auto;
        width: 540px;
        height: 46px;
        background: $orange;
        border-radius: 50px;
        color: white;
        font-size: 18px;
        line-height: 26px;
        text-align: center;
      }
      p{
        text-align:center;
        color: #0099FF;
        a{
          color: #0099FF;
          font-size: 18px;
          text-decoration-line: underline;
        }
      }
    }
  }
  
</style>