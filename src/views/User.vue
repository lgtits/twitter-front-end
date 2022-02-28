<template>
    <div class="wrapper">
      <div class="gridWrapper">
        <div class="navbarWrapper">
        <Navbar/>
        </div>
        <main>
          <div class="card-list">
            <div class="head">
                <i>
                    <img src="../assets/image/back.svg" alt="">
                </i>
                <div class="userInfo">
                    <h2>John Doe</h2>
                    <h4>25推文</h4>
                </div>
            </div>
            <PersonalCard :initUser="user"/>
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
import PersonalCard from '../components/PersonalCard.vue'
import UsersApi from '../apis/user'

export default {
  components: {
    Navbar,
    PopularUser,
    // Tweet,
    PersonalCard,
    // UserNavTabs
  },
  data(){
    return {
      user: {
          id: -1,
          email: "",
          password: "",
          name: "",
          account: "",
          role: "",
          avatar: "",
          introduction: "",
          cover: "",
          tweetCount: null,
          followingCount: null,
          followerCount: null,
          likedCount: null,
          createdAt: "",
          updatedAt: "",
      }
    }
  },
  methods: {
     async fetchUser(userId){
            try{
                const {data, statusText} = await UsersApi.getUser({userId})
                console.log('$$',data)
                const {
                    id,
                    email,
                    name,
                    account,
                    role,
                    avatar,
                    introduction,
                    cover,
                    tweetCount,
                    followingCount,
                    followerCount,
                    likedCount,
                    createdAt,
                    updatedAt,
                } = data.userData
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                this.user= {
                    ...this.user,
                    id,
                    email,
                    name,
                    account,
                    role,
                    avatar,
                    introduction,
                    cover,
                    tweetCount,
                    followingCount,
                    followerCount,
                    likedCount,
                    createdAt,
                    updatedAt,
                }

            }catch(error){
                console.log('error',error)
            }
        },
  },
  created(){
        const id = this.$route.params.id
        this.fetchUser(id)
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
    height: 1200px;
    border: 1px solid $border;
    .card-list{
      .head{
          display: flex;
          align-items: center;
          background-color: $white;
          border-bottom: 1px solid $border;
          padding: 5px 20px;
          i{
              padding-right: 43px;
          }
          .userInfo{
              display: flex;
              flex-direction: column;
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