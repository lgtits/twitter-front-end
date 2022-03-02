<template>
  <div class="container">
    <div class="left-column">
      <Navbar />
    </div>
    <main>
      <div class="header">
        <h1>帳戶設定</h1>
      </div>
      <form class="main-form" @submit.prevent.stop="handleSubmit">
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
          />
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
          />
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
          />
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
          />
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
          />
        </div>
        <button class="save" type="submit">儲存</button>
      </form>
    </main>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar";
// import userAPI from './../apis/user'
import { Toast } from './../utils/helpers'

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false
    };
  },
  methods: {
    async handleSubmit(e) {
      console.log(e)
      try{
        //驗證不爲空值
        if (!this.account || !this.name || !this.email || !this.password || !this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '請確認填入所有資訊'
          })
          return
        } 

        this.isProcessing = true

        
      } catch(error){
          console.log(error)
        }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: auto 600px auto;
  grid-template-rows: auto;
  grid-template-areas: "navbar main main ";
  height: 100vh;
  position: relative;
  .left-column {
    position: relative;
    .navbar{
      position: absolute;
      
    }
  }
  main {
    border: 1px solid #e6ecf0;
    grid-area: main;
    .header {
      height: 55px;
      border-bottom: 1px solid #e6ecf0;
      position: relative;
      h1 {
        font-size: 19px;
        position: absolute;
        top: 13px;
        left: 20px;
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 540px;
    margin: 30px auto auto 16px;
    .input-box {
      position: relative;
      margin-bottom: 32px;
      background-color: #f5f8fa;
      width: 540px;
      border-bottom: solid 2px #657786;
      border-radius: 0px 0px 4px 4px;
      label {
        font-weight: 500;
        font-size: 15px;
        line-height: 15px;
        color: #657786;
        position: absolute;
        left: 10px;
        top: 5px;
      }
    }
    #account,
    #name,
    #email,
    #password,
    #passwordCheck {
      padding: 20px 0 0 10px;
      width: 540px;
      height: 52px;
      background-color: #f5f8fa;
      border: none;
      font-size: 19px;
      font-weight: 500;
      font-family: Noto Sans TC;
      font-style: normal;
      line-height: 28px;
      &:focus {
        outline: none;
      }
    }
    .save {
      margin: 10px auto 20px auto;
      width: 116px;
      height: 46px;
      background: $primary;
      border-radius: 50px;
      color: white;
      font-size: 18px;
      font-weight: bold;
      line-height: 26px;
      text-align: center;
      margin-right: 0;
    }
  }
}
</style>