<template>
  <div class="navbar">
    <img class="logo" src="../assets/image/Logo.png" alt="" />
    <ul class="nav">
      <li>
        <a class="" >
          <img class="icon" src="../assets/image/icon_index.png" alt="">
          首頁
        </a>
      </li>
      <li>
        <a class="" href="#">
          <img class="icon"  src="../assets/image/icon_user.png" alt="">
          個人資料
          </a>
      </li>
      <li>
        <a class="" href="#">
          <img class="icon"  src="../assets/image/icon_cog.png" alt="">
          設定
        </a>
      </li>
      <li>
        <a class="post">推文</a>
      </li>
    </ul>
    <router-link class="log-out" to="/login"><img class="icon"  src="../assets/image/icon_logout.png" alt="">登出</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/_variables.scss';
@import '../assets/style/_reset.scss';
@import '../assets/style/_base.scss';
@import '../assets/style/_mixin.scss';
.navbar{
  width: 240px;
  height: 100%;

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
      }
    }
  }
  .log-out{
    position: absolute;
    left: 11px;
    bottom: 17px;
    width: 235px; 
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