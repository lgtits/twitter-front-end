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
        <button class="post" @click="showModal=true">推文</button>
      </li>
    </ul>
    <Modal class="light-box" v-model="showModal">
      <div class="tweet-modal-content">
        <div class="user-photo-container">
          <img class="post-tweet-avatar" :src="currentUser.image" alt="">
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="有什麽新鮮事？" v-model="tweetContent"></textarea>
      </div>
      <button class="post-tweet" @click="sendPost">推文</button>
    </Modal>
    <button class="sign-out" @click="logOut">
      <img class="icon"  src="../assets/image/icon_logout.png" alt="" >
      登出
    </button>
  </div>
  
</template>

<script>
  const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
  export default {
    data(){
      return{
        showModal: false,
        tweetContent:"",
        currentUser: dummyUser.currentUser
      }
    },
    methods: {
      logOut(){
        console.log('log out')
        console.log(this.$route)
      },
      sendPost(){
        console.log('推文:', this.tweetContent)
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
// modal style
  .vm{
    .tweet-modal-content{
      display: flex;
      .user-photo-container{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        .post-tweet-avatar{
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }
      textarea {
        resize: none;
        border: none;
        font-size: 18px;
        font-weight: 500;
        font-family: Noto Sans TC;
        font-style: normal;
      }
    }
    .post-tweet{
      width: 66px;
      height: 38px;
      font-size: 18px;
      font-weight: 500;
      font-family: Noto Sans TC;
      font-style: normal;
      color: white;
      background-color: $primary;
      border-radius: 100px;
      position: absolute;
      right: 15px;
      bottom: 15px;
    }
  }
</style>