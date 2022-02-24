<template>
    <div class="wrapper">
      <div class="gridWrapper">
        <div class="navbarWrapper">
        <Navbar/>
        </div>
        <main>
          <div class="card-list">
            <h2>首頁</h2>
             <UserCreateTweet/>
            <Tweet/>
          </div>
       </main>
        <div class="popularList">
<<<<<<< HEAD
<<<<<<< HEAD
          <PopularUser/>

=======
          <PopularList/>
>>>>>>> 6ecfd9f (新增tweet組件)
=======
          <PopularUser/>

>>>>>>> a73af3d (新增靜態main頁面)
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Tweet from '../components/Tweet.vue'
<<<<<<< HEAD
<<<<<<< HEAD
import PopularUser from '../components/PopularUser.vue'
import UserCreateTweet from '../components/UserCreateTweet.vue'
=======
import PopularList from '../components/PopularList.vue'
>>>>>>> 6ecfd9f (新增tweet組件)
=======
import PopularUser from '../components/PopularUser.vue'
import UserCreateTweet from '../components/UserCreateTweet.vue'
>>>>>>> a73af3d (新增靜態main頁面)

export default {
  components: {
    Navbar,
<<<<<<< HEAD
<<<<<<< HEAD
    UserCreateTweet,
    PopularUser,
=======
    PopularList,
>>>>>>> 6ecfd9f (新增tweet組件)
=======
    UserCreateTweet,
    PopularUser,
>>>>>>> a73af3d (新增靜態main頁面)
    Tweet
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    .gridWrapper{
      max-width: 1260px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-template-rows: auto;
      gap: 30px;
    }
  }
  .navbarWrapper{
    display: block;
    /* border: 1px solid #000; */
    height: 100%;
    min-height: 100vh;
  }
  .popularList{
    /* border: 1px solid #000; */
    width: 350px;
    height: 1000px;
  }
  main{
    background-color: $border;
    width: 100%;
    height: 1200px;
    border: 1px solid $border;
    .card-list{
      >h2{
        padding: 15px;
        border-bottom: 1px solid $border;
        background-color: $white;
        @include font(18px, 1.4, normal, 700);
      }
    }
  }
</style>