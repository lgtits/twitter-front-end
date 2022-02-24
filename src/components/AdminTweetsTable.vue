<template>
  <ul>
    <li>
      <div class="list">
        <div class="user-photo">
          <img class="avatar" src="https://i.imgur.com/TKOAhCa.png" alt="" />
        </div>
        <div class="content">
          <span class="name">name</span>
          <span class="account-date">@account·3小時</span>
          <div class="tweet-content">
            Lorem ipsum dolor sit amr ridiculus mus. Praesent at ante al...
          </div>
        </div>
        <button class="destroy">X</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
li {
  .list {
    display: flex;

    .user-photo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 13px 15px;
      border: solid 1px red;
      .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .content {
      margin: 10px 0 15px 0;
      .name {
        font-size: 15px;
        font-weight: 700;
      }
      .account-date {
        font-size: 15px;
        font-weight: 500;
        color: #657786;
      }
      .tweet-content {
        font-size: 15px;
        font-weight: 500;
        max-width: 600px;
        margin-top: 6px;
      }
    }
  }
}
</style>