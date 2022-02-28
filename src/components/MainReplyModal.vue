<template>
  <button @click="showMainReplyModal=true">
    <img src="../assets/image/icon_tweet.png" alt="">
    <Modal class="light-box" v-model="showMainReplyModal">
      <div class="reply-modal">
        <div class="tweet-wrapper">
          <Avatar/>
          <div class="tweet-body">
            <div class="tweet-name">
                <div class="name">name</div>
                <div class="account-name">accountName</div>
                <div class="update-time">TIME</div>
            </div>
            <div class="tweet-content">
              REPLY
            </div>
            <div class="replyPerson" >
                <span>回覆給</span>
                <div class="account-name">
                  ACCOUNT
                </div>
            </div>
            <div class="reaction">
            </div>
          </div>
        </div>
        <div class="straight-line">
          
        </div>
        <div class="your-reply">
          <div class="user-photo-container">
            <img class="user-photo" :src="currentUser.avatar" alt="">
          </div>
          <textarea name="" id="" placeholder="推你的回覆">

          </textarea>
          <button class="reply">
            回覆
          </button>
        </div>
      </div>

    </Modal>
  </button>

</template>

<script>
import { mapState } from 'vuex'
import Avatar from '../components/Avatar.vue'

  export default {
    components: {
        Avatar
    },
    data(){
      return{
        showMainReplyModal: false,
      }
    },
    computed: {
      ...mapState(['currentUser', 'isAuthenticated'])
    },
  }
</script>

<style lang="scss" scoped>
    @import '../assets/style/_variables.scss';
    @import '../assets/style/_reset.scss';
    @import '../assets/style/_base.scss';
    @import '../assets/style/_mixin.scss';
    .tweet-wrapper{
      display: grid;
      grid-template-columns: 50px 1fr;
      grid-template-rows: 1fr;
      gap: 10px;
      padding: 15px;
      background-color: $white;
        .tweet-body{
          display: flex;
          flex-direction: column;
          .tweet-name{
            display: flex;
            align-items: center;
            /* margin-bottom: 3px; */
            .name{
              margin-right: 5px;
              @include font(15px, 1.5, normal, 700);
            }
          .account-name{
            margin-right: 6px;
            color: $dark-grey;
            @include font(15px, 1.5, normal, 500);
            &:before{
                content: '@'
            }
          }
            .update-time{
              position: relative;
              padding-left: 10px;
              color: $dark-grey;
              @include font(15px, 1.5, normal, 500);
              &:before{
                content: '•';
                display: inline-block;
                position: absolute;
                left: -5px;
              }
            }
          }
    .replyPerson{
      display: flex;
      >span{
        margin-right: 5px;
        @include font (15px, 1.5, normal, 500);
        color: $dark-grey;
      }
      .account-name{
        @include font (15px, 1.5, normal, 500);
        color: $primary;
        &:before{
          content: '@',
        }
      }
    }
  }
        .tweet-content{
          margin-bottom: 15px;
          @include font (15px, 1.5, normal, 500);
        }
    }

    // from luca
  .reply-modal{
    height: 345px;
    position: relative;
  }
  .straight-line{
    width: 2px;
    height: 80px;
    background-color: #CCD6DD;
    position: absolute;
    left: 40px;
    top: 73px;
  }
  .your-reply{
    .user-photo-container{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      left: 15px;
      top: 163px;
      .user-photo{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    textarea{
      resize: none;
      border: none;
      width: 510px;
      height: 100px;
      font-size: 18px;
      font-weight: 500;
      font-family: Noto Sans TC;
      font-style: normal;
      margin: 0 auto;
      position: absolute;
      left: 75px;
      top: 175px;
    }
    .reply{
      background-color: $primary;
      color: white;
      font-size: 18px;
      font-weight: 500;
      width: 66px;
      height: 38px;
      border-radius: 100px;
      position: absolute;
      right: 15px;
      bottom: 15px;
    }
  }  
</style>