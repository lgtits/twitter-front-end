<template>
    <a class="outline-btn" href="#">
        {{text}}
    </a>
</template>
<script>
export default {
    props: {
        initText:{
            type: String,
            default: '追隨'
<<<<<<< HEAD
        },
        isFollowing:{
            type: Boolean,
            default: false
=======
>>>>>>> a73af3d (新增靜態main頁面)
        }
    },
    data() {
        return{
<<<<<<< HEAD
            text: !this.isFollowing ? this.initText : '正在跟隨'
=======
            text: this.initText
>>>>>>> a73af3d (新增靜態main頁面)
        }
    }
}
</script>
<style lang="scss" scoped>
 .outline-btn{
    height: fit-content;
    width: fit-content;
    padding: 10px 15px;
    color: $primary;
    border: 1px solid $primary; 
    border-radius: 500px;
    @include font(15px, 1.2, normal ,700);
    &:hover{
        background-color: $primary;
        color: $white;
    }
  }
</style>