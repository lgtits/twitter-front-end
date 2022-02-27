<template>
  <div class="container">
    <div class="left-column">
      <AdminNavbar />
    </div>
    <main>
      <div class="header">
        <h1>使用者列表</h1>
      </div>
      <div class="card-board">
        <UserCard 
          v-for="user in users"
          :key="user.id"
          :initial-user="user"
        />
      </div>
    </main>
  </div>
</template>

<script>
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

const dummyData = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "account": "ssee",
      "image": "https://i.imgur.com/TKOAhCa.png",
      "email": "root@example.com",
      "password": "$2a$10$.LPf4MJ8JLgHa16fcY9E9ehk6r4t5BYoe88Mr4c6HwXuDvvK0MQy2",
      "Followers": [],
      "FollowerCount": 1,
    },
    {
      "id": 2,
      "name": "user2",
      "account": "shgghsee",
      "image": "https://www.w3schools.com/howto/img_avatar.png",
      "email": "root@example.com",
      "password": "$2a$10$.LPf4MJ8JLgHa16fcY9E9ehk6r4t5BYoe88Mr4c6HwXuDvvK0MQy2",
      "Followers": [],
      "FollowerCount": 0,
    },
    {
      "id": 3,
      "name": "user3",
      "account": "teessee",
      "image": "https://www.w3schools.com/howto/img_avatar2.png",
      "email": "root@example.com",
      "password": "$2a$10$.LPf4MJ8JLgHa16fcY9E9ehk6r4t5BYoe88Mr4c6HwXuDvvK0MQy2",
      "Followers": [],
      "FollowerCount": 0,
    },
    {
      "id": 4,
      "name": "user4",
      "account": "teessee",
      "image": "https://www.w3schools.com/w3images/avatar5.png",
      "email": "root@example.com",
      "password": "$2a$10$.LPf4MJ8JLgHa16fcY9E9ehk6r4t5BYoe88Mr4c6HwXuDvvK0MQy2",
      "Followers": [],
      "FollowerCount": 0,
    },
    {
      "id": 5,
      "name": "user5",
      "account": "tgrwgsee",
      "image": "https://www.w3schools.com/w3images/avatar2.png",
      "email": "root@example.com",
      "password": "$2a$10$.LPf4MJ8JLgHa16fcY9E9ehk6r4t5BYoe88Mr4c6HwXuDvvK0MQy2",
      "Followers": [],
      "FollowerCount": 0,
    },
  ]
}
import AdminNavbar from "./../components/AdminNavbar";
import UserCard from "./../components/UserCard";
export default {
  components: {
    AdminNavbar,
    UserCard,
  },
  data() {
    return {
      users:[],
      test:[]
    };
  },
  created(){
    this.fetchUsers()
    this.fetchTopUsers()
  },
  methods:{
    fetchUsers(){
      this.users = dummyData.users
    },
    async fetchTopUsers () {
  try {
    const { data } = await adminAPI.adminGetUsers()
    console.log(data)
    // this.test = data.map(user => ({
    //   id: user.id,
    //   name: user.name,
    //   image: user.image,
    //   followerCount: user.FollowerCount,
    //   isFollowed: user.isFollowed
    // }))
  } catch (error) {
    console.log(error)
    Toast.fire({
      icon: 'error',
      title: '無法取得users，請稍後再試'
    })
  }
},
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1260px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 600px auto;
  grid-template-rows: auto;
  grid-template-areas: "navbar main main ";
  height: 100vh;
  position: relative;
  .left-column {
    position: relative;
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
    .card-board{
      max-width: 1040px;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>