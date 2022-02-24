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
        <AdminTweetsTable />
      </div>
    </main>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar";
import AdminTweetsTable from "./../components/AdminTweetsTable";

export default {
  components: {
    AdminNavbar,
    AdminTweetsTable,
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