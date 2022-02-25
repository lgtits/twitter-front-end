<template>
  <div class="navbar">
    <img class="logo" src="../assets/image/Logo.png" alt="" />
    <ul class="nav">
      <li>
        <router-link class="" to="/main">
          <img v-if="this.$route.name === 'main'" class="icon" src="../assets/image/icon_index2.png" alt="">
          <img v-else class="icon" src="../assets/image/icon_index.png" alt="">
          首頁
        </router-link>
      </li>
      <li>
        <a class="" href="#">
          <img class="icon"  src="../assets/image/icon_user.png" alt="">
          個人資料
          </a>
      </li>
      <li>
        <router-link class="" to="/setting">
          <img v-if="this.$route.name === 'setting'" class="icon" src="../assets/image/icon_cog2.png" alt="">
          <img v-else class="icon"  src="../assets/image/icon_cog.png" alt="">
          設定
        </router-link>
      </li>
      <li>
        <a class="post">推文</a>
      </li>
    </ul>
    <button class="sign-out" @click="logOut">
      <img class="icon"  src="../assets/image/icon_logout.png" alt="" >
      登出
    </button>
  </div>
  
</template>

<script>
  export default {
    methods: {
      logOut(){
        console.log('log out')
        console.log(this.$route)
      }
    },
  }
</script>


<style lang="scss" scoped>

.navbar{
  /* width: 235px; */
  width: 240px;
  height: 100%;
  /* position: absolute; */
  right: 40px;
  // will
  position: relative;
  min-height: 100vh;
  background-color: #fff;
  .logo{
    width: 30px;
    position: absolute;
    top: 14px;
    left: 10px;
  }
  ul{
    position: absolute;
    top: 74px;
    li{
      width: 235px;
      height: 56px;
      position: relative;
      a{
        font-size: 18px;
        font-weight: bold;
        position: absolute;
        left: 10px;
        top: 15px;
        display: flex;
        align-items:center;
        &.active{
          color: $primary;
        }
        .icon{
          width: 24px;
          height: 24px;
          display: inline-block;
          margin-right: 20px;
        }
      }
      & .post{
        width: 210px;
        height: 38px;
        background: $primary;
        border-radius: 100px;
        justify-content: center;
        line-height: 38px;
        color: white;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  .sign-out{
    padding: 0;
    position: absolute;
    left: 11px;
    bottom: 17px;
    width: 100px; 
    height: 26px;
    font-family: Noto Sans TC;
    font-style: normal;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items:center;
    img{
      width: 24px;
      height: 24px;
      display: inline-block;
      margin-right: 23px;
    
    }
  }

}
</style>