<template>
    <div class="wrapper">
      <div class="gridWrapper">
        <div class="navbarWrapper">
        <Navbar/>
        </div>
        <main>
          <div class="card-list">
            <div class="head">
                <i @click="$router.back()">
                    <img src="../assets/image/back.svg" alt="">
                </i>
                <div class="userInfo">
                    <h2>John Doe</h2>
                    <h4>25推文</h4>
                </div>
            </div>
            <!-- <PersonalCard :initUser="user"/> -->
            <router-view/>
          </div>
       </main>
        <div class="popularList">
          <PopularUser/>
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import PopularUser from '../components/PopularUser.vue'
// import PersonalCard from '../components/PersonalCard.vue'
// import UsersApi from '../apis/user'

export default {
  components: {
    Navbar,
    PopularUser,
    // Tweet,
    // PersonalCard,
    // UserNavTabs
  },
  data(){
    return {
      
    }
  },
  methods: {
  },
  created(){
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
    /* background-color: $border; */
    width: 100%;
    border: 1px solid $border;
    .card-list{
      height: 100%;
      .head{
          display: flex;
          align-items: center;
          background-color: $white;
          padding: 5px 20px;
          >i{
              display: flex;
              align-items: center;
              justify-content: center;
              // 點擊區域
              width: 44px;
              height: 44px;
              cursor: pointer;
          }
          .userInfo{
              display: flex;
              flex-direction: column;
              padding-left: 43px;
              >h2{
                @include font(18px, 1.4, normal, 700);
            }
            >h4{
                color: $dark-grey;
                @include font(13px, 1.2, normal, 500);
            }
          }
      }
    }
  }
</style>