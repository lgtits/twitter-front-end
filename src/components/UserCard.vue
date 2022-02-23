<template>
  <div class="main">
    <div class="content">
      <div class="user-photo"></div>
      <div class="name">Name</div>
      <span class="account">@account</span>
      <div class="count">
        <span class="tweets">
          <img class="icon icon-tweet" src="images/icon_tweet.png">
          1.5k
          </span>
        <span class="like">
          <img class="icon icon-like" src="images/icon_liked.png">
          20k
        </span>
      </div>
      <div class="follow">
        <span class="following-count">34 個</span>
        <span class="following">跟隨中</span>
        <span class="followed-count">59 位</span>
        <span class="followed">跟隨者</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main{
    width: 245px;
    height: 314px;
    background: #c4c4c4;
    border-radius: 10px;
    position: relative;
    .content{
      background: #fcfcfc;
      border-radius: 0 0 10px 10px;
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 174px;
      text-align: center;
      .user-photo{
        position: absolute;
        top: -72px;
        left: 72.5px;
        width: 100px;
        height: 100px;
        background-image: url(https://i.imgur.com/TKOAhCa.png);
        background-size: cover;
        background-position: center center;
        border-radius: 50%;
        border: 4px solid #ffffff;
      }
      .name{
        width: 100%;
        height: 22px;
        font-size: 15px;
        font-weight: 900;
        margin: 33px 0 0 0 ;
      }
      .account{
        margin-top: 2px;
        height: 22px;
        font-size: 15px;
        color: #657786;
      }
      .count{
        height: 24px;
        margin-top: 15px;
        .icon{
          display: inline-block;
        }
      }
      .follow{
        height: 20px;
        margin-top: 15px;
      }
    }
  }
</style>