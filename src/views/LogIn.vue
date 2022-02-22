<template>
  <div class="container">
    <form class="" @submit.prevent.stop="handleSubmit">
      <div class="upper">
        <img class="logo" src="../assets/image/Logo.png" alt="">
        <h1 class="title">
          登入 Alphitter
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
        class="sign-in"
        type="submit"
      >
        登入
      </button>

      <div class="">
        <p>
          <router-link to="/regist">註冊Alphitter</router-link>
          ·
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
      #account, #password{
        padding: 0 0 0 50px;
        height: 52px;
        background-color:#F5F8FA;
        border: none;
        font-size: 30px;
        &:focus {
          outline: none;
        }
      }
      .sign-in{
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
        text-align:right;
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