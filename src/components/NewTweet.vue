<template>
  <button class="post" @click="showModal=true">
    推文
    <Modal class="light-box" v-model="showModal">
      <div class="tweet-modal-content">
        <div class="user-photo-container">
          <img class="post-tweet-avatar"  :src="currentUser.avatar" alt="">
        </div>
        <textarea name="" id="" placeholder="有什麽新鮮事？" v-model="tweetContent"></textarea>
      </div>
      <button class="post-tweet" @click="sendPost">推文</button>
    </Modal>
  </button>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data(){
      return{
        showModal: false,
        tweetContent:"",
      }
    },
    methods:{
      sendPost(){
        if (this.tweetContent.length === 0){
          this.showModal = true
          return
        }
        console.log('推文:', this.tweetContent)
        this.tweetContent = ''
        this.showModal = false
        console.log(this.$route)
      }
    },
    computed: {
      ...mapState(['currentUser', 'isAuthenticated'])
    },
  }
</script>

<style lang="scss" scoped>
  .post{
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
  //modal style
  .vm{
    .tweet-modal-content{
      display: flex;
      height: 245px;

      .user-photo-container{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 15px 10px auto 15px;
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
        width: 510px;
        height: 165px;
        margin-top: 27px;
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