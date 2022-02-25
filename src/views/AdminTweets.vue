<template>
  <div class="container">
    <div class="left-column">
      <AdminNavbar />
    </div>
    <main>
      <div class="header">
        <h1>推文清單</h1>
      </div>
      <div class="list-board">
        <AdminTweetsTable 
          v-for="tweet in tweets"
          :key="tweet.id"
          :initial-tweet = "tweet"
        />
      </div>
    </main>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar";
import AdminTweetsTable from "./../components/AdminTweetsTable";

const dummyData = {
    tweets: [
      {
        id: 1,
        userId: 1,
        name: 'Apple',
        accountName: 'appl365',
        image: 'https://gravatar.com/avatar/c039486cb31925728a7abb14bae5d493?s=400&d=wavatar&r=x',
        content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        createAt: '2019-06-07T13:28:51.000Z',
      },
      {
        id: 2,
        userId: 2,
        name: 'Pen',
        accountName: '123Pen',
        image: 'https://www.w3schools.com/howto/img_avatar.png',
        content: 'Nulla Lorem mserunt reprehenderit elit laborum. ',
        createAt: '2017-09-07T13:28:51.000Z',
      },
    ]
}

export default {
  components: {
    AdminNavbar,
    AdminTweetsTable,
  },
  data(){
    return {
          tweets: []
    }
  }
  ,
  created(){
    this.fetchTweets()
  },
  methods: {
    fetchTweets(){
      this.tweets = dummyData.tweets
    }
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
    .list-board{
      max-width: 1040px;
    }
  }
}
</style>