<template>
  <button class="outlineBtn" @click="showEditModal=true">
    編輯個人資料
    <Modal class="light-box " v-model="showEditModal" title="編輯個人資料">
      <div class="edit-board">
        <form action=""  @submit.prevent.stop="emitEdit">
            <button type="submit" class="save-edit-profile" >
              儲存
            </button>
            <div class="edit-cover">
              <div class="cover-container">
                <img :src="currentUser.cover" alt="">
              </div>
              <label class="select-cover" for="cover">
                <img src="../assets/image/icon_uploadPhoto.svg" alt="">
              </label>
              <input id="cover" type="file" name="cover" accept="image/*">
              <button class="delete-cover" type="button" @click="deleteCover">
                <img src="../assets/image/icon_delete.svg" alt="">
              </button>
            </div>
            <div class="edit-personal-photo">
              <div class="personal-photo-container">
                <img class="photo" :src="currentUser.avatar" alt="">
              <label class="upload-avatar" for="avatar">
                <img src="../assets/image/icon_uploadPhoto.svg" alt="">
              </label>
              <input id="avatar" type="file" name="avatar" accept="image/*">
              </div>
            </div>
            <div class="edit-personal-info">
              <div class="input-box name">
                <label for="name">名稱</label>
                <input
                  id="name"
                  v-model="name"
                  name="name"
                  type="name"
                  class="form-control"
                  autocomplete="username"
                  required
                  autofocus
                  :placeholder="currentUser.name"
                >
              </div>
              <div class="input-box description">
                <label for="description">自我介紹</label>
                <textarea 
                  name="description" 
                  id="description" 
                  v-model="description" 
                  required 
                  utofocus
                  :placeholder="currentUser.introduction"
                >
                </textarea>
              </div>
            </div>
        </form>
      </div>
    </Modal>
  </button>

</template>


<script>
import { mapState } from 'vuex'

  export default {
    data(){
      return{
        showEditModal: false,
        cover:"",
        personalAvatar:"",
        name:"",
        description:""
      }
    },
    methods:{
      emitEdit(){
        console.log('emit edit')
        this.showEditModal = false
      },
      deleteCover(){
        console.log('delete cover')
      }
    },
    computed: {
      ...mapState(['currentUser', 'isAuthenticated'])
    },
  }
</script>
<style lang="scss" scoped>
 .outlineBtn{
    height: fit-content;
    width: fit-content;
    padding: 10px 15px;
    color: $primary;
    border: 1px solid $primary; 
    border-radius: 500px;
    @include font(15px, 1.2, normal ,700);
    &.focus{
        background-color: $primary;
        color: $white;
    }
    &:hover{
        background-color: $primary;
        color: $white;
    }

  }

  ///Modal style

  .vm{
    .save-edit-profile{
      background-color: $primary;
      color: white;
      font-size: 18px;
      font-weight: 500;
      width: 68px;
      height: 28px;
      border-radius: 100px;
      position: absolute;
      right: 15px;
      top: 15px;
    }
    .edit-cover{
      height: 200px;
      .cover-container{
        width: 598px;
        height: 200px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
        }
      }
      .select-cover{
        width: 24px;
        height: 24px;
        position: absolute;
        top: 147px;
        left: 261px;
        cursor: pointer;
        img{
          width: 24px;
          height: 24px;
          position: absolute;
          margin: auto;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
      input{
        display: none;
      }
      .delete-cover{
        width: 24px;
        height: 24px;
        position: absolute;
        top: 147px;
        left: 315px;
        img{
          width: 24px;
          height: 24px;
          position: absolute;
          margin: auto;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
    .edit-personal-photo{
      position: absolute;
      left: 14px;
      top: 199px;
      .personal-photo-container{
        height: 120px;
        width: 120px;
        border-radius: 50%;
        border: 4px solid #ffffff;
        position: relative;
        background:#ffffff;
        .photo{
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          opacity: 0.7;
        }
        .upload-avatar{
          width: 24px;
          height: 24px;
          position: absolute;
          left: 45px;
          top: 45px;
          img{
            width: 24px;
            height: 24px;
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
        input{
          display: none;
        }
      }
    }
    .edit-personal-info{
      height: 318px;
      .input-box{
        position: relative;
        background-color:#F5F8FA;
        width: 570px;
        border-bottom: solid 2px #657786;
        border-radius: 0px 0px 4px 4px;
        margin: 0 auto;
        &.name{
          margin: 80px auto 42px auto;
        }
        label{
          font-weight: 500;
          font-size: 15px;
          line-height: 15px;
          color: #657786;
          position: absolute;
          left: 10px;
          top: 5px;
        }
        input{
          padding: 20px 0 0 10px;
          height: 54px;
          background-color:#F5F8FA;
          border: none;
          font-size: 19px;
          font-weight: 500;
          font-family: Noto Sans TC;
          font-style: normal;
          line-height: 28px;
          &:focus {
            outline: none;
          }
        }
        &.description{
          height: 150px;
          margin-bottom: 72px;
          border-bottom: solid 2px #657786;
        }
        textarea{
          resize: none;
          border: none;
          background-color:#F5F8FA;
          width: 540px;
          height: 130px;
          margin-bottom: 72px;
          padding: 20px 0 0 10px;
          font-size: 19px;
          font-weight: 500;
          font-family: Noto Sans TC;
          font-style: normal;
        }
      }

    }
  }
</style>