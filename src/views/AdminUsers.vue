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
        <UserCard />
        <UserCard />
        <UserCard />
                <UserCard />
        <UserCard />

      </div>
    </main>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar";
import UserCard from "./../components/UserCard";
export default {
  components: {
    AdminNavbar,
    UserCard,
  },
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
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
      display: flex;
    }
  }
}
</style>