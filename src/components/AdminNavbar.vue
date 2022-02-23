<template>
  <div class="navbar">
    <img class="logo" src="../assets/image/Logo.png" alt="" />
    <ul class="nav">
      <li>
        <router-link class="" to="/admintweets">
          <img class="icon" src="../assets/image/icon_index.png" alt="">
          推文清單
        </router-link>
      </li>
      <li>
        <router-link class="" to="/adminusers">
          <img class="icon"  src="../assets/image/icon_user.png" alt="">
          使用者列表
          </router-link>
      </li>
    </ul>
    <router-link class="log-out" to="/adminlogin"><img class="icon"  src="../assets/image/icon_logout.png" alt="">登出</router-link>
  </div>
</template>

<style lang="scss" scoped>
.navbar{
  width: 235px;
  height: 100%;
  position: absolute;
  right: 40px;
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