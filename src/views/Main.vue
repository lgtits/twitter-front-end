<template>
    <div class="wrapper">
      <div class="gridWrapper">
        <div class="navbarWrapper">
        <Navbar/>
        </div>
        <main>
          <div class="card-list">
            <Tweet/>
          </div>
       </main>
        <div class="popularList">
          <PopularList/>
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Tweet from '../components/Tweet.vue'
import PopularList from '../components/PopularList.vue'

export default {
  components: {
    Navbar,
    PopularList,
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
    background-color: #eee;
    border: 1px solid #000;
    width: 350px;
    height: 1000px;
  }
  main{
    background-color: skyblue;
    width: 100%;
    height: 1200px;
  }
</style>