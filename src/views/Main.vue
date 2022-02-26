<template>
  <div class="wrapper">
    <div class="gridWrapper">
      <div class="navbarWrapper">
        <Navbar />
      </div>
      <main>
        <div class="card-list">
          <h2>首頁</h2>
          <UserCreateTweet @after-create-tweet="afterCreateTweet" />
          <Tweet v-for="tweet in tweets" :key="tweet.id" :initTweet="tweet"/>
        </div>
      </main>
      <div class="popularList">
        <PopularUser />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Tweet from "../components/Tweet.vue";
import PopularUser from "../components/PopularUser.vue";
import UserCreateTweet from "../components/UserCreateTweet.vue";
import tweetApis from '../apis/tweet'
import { Toast } from '../utils/helpers.js'
const dummyUser = {
    id: 1,
    email: "root@example.com",
    password: "12345678",
    name: "是我",
    account: "root",
    role: "admin",
    avatar: "https://gravatar.com/avatar/992ba14216a3e429e1b6c3bd498cfabe?s=400&d=wavatar&r=x",
    introduction: "",
    cover: "",
    tweetCount: null,
    followingCount: null,
    followerCount: null,
    likedCount: null,
    createdAt: "",
    updatedAt: "",
  }

export default {
  name: 'Main',
  components: {
    Navbar,
    UserCreateTweet,
    PopularUser,
    Tweet,
  },
  data() {
    return {
      tweets: []
    };
  },
  methods: {
    async afterCreateTweet(payload) {
      const {id, description} = payload
      // 回傳tweet物件
      const result = {
          id,
          UserId: 2,
          description,
          // TODO:優化
          createdAt: new Date(),
          User: {
            name: dummyUser.name,
            account: dummyUser.account,
            avatar: dummyUser.avatar,
          }
      }
      try{
        // 前端手動更新
        this.tweets.unshift(result) 
        // post請求
        const {statusText} = await tweetApis.createTweet(result)
        if(statusText !== 'OK'){
          throw new Error(statusText)
        }

      }catch(error){
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法新增推文，請稍後在試'
        })
      }
    },
    async fetchTweets(){
      try{
        const { data,statusText } = await tweetApis.getMainTweet()   
        if(statusText !== 'OK'){
          throw new Error(statusText)
        }
        this.tweets = data
      }catch(error){
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無取取得餐廳資料，請稍後在試'
        })
      }
    }

  },
  created(){
    this.fetchTweets()
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  .gridWrapper {
    max-width: 1260px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    gap: 30px;
  }
}
.navbarWrapper {
  display: block;
  /* border: 1px solid #000; */
  height: 100%;
  min-height: 100vh;
}
.popularList {
  /* border: 1px solid #000; */
  width: 350px;
  height: 1000px;
}
main {
  background-color: $border;
  width: 100%;
  height: 1200px;
  border: 1px solid $border;
  .card-list {
    > h2 {
      padding: 15px;
      border-bottom: 1px solid $border;
      background-color: $white;
      @include font(18px, 1.4, normal, 700);
    }
  }
}
</style>