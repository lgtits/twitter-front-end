<template>
    <div class="personalCard">
        <div class="userBackground">
            <figure>
                <img :src="user.cover" alt="封面">
            </figure>
            <div class="avatar-box">
                <Avatar :initImage="user.avatar" :initUserId="user.id"/>
            </div>
        </div>
        <div class="personalInfo">
            <div class="name">{{user.name}}</div>
            <div class="accountName">{{user.account}}</div>
            <div class="description">{{user.introduction}}</div>
            <div class="popularStatus">
                <div>
                    <router-link 
                    :to="{name: 'user-followings', params: {id: $route.params.id}}">{{user.followingCount}}</router-link>
                    <span>個跟隨中</span>
                </div>
                <div>
                    <router-link 
                    :to="{name: 'user-followers', params: {id: $route.params.id}}">{{user.followerCount}}</router-link>
                    <span>位跟隨者</span>
                </div>
            </div>
             <div class="buttonWrapper">
                <SelfEdit @after-change-profile="afterChangeProfile"/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Avatar from '../components/Avatar.vue'
import SelfEdit from '../components/SelfEdit.vue'

export default {
    props: {
        initUser: {
            type: Object,
            required: true
        }
    },
    components: {
        Avatar,
        SelfEdit
    },
    data(){
        return {
            // watch問題
            user: this.initUser
        }
    },
    methods:{
        afterChangeProfile(profile){
            const{name, introduction, avatar, cover} = profile
            this.user = {
                ...this.user,
                name,
                introduction,
                avatar,
                cover
            }
        }
    },
    // 當props值須隨即監控時使用
    watch:{
        initUser(newValue){
            this.user = {
                ...this.user,
                ...newValue
            }
        }
    },
    computed: {
      ...mapState(['currentUser', 'isAuthenticated'])
    },
}
</script>

<style lang="scss" scoped>
.personalCard{
    width: 100%;
    .userBackground{
        position: relative;
        width: 100%;
        height: 200px;
        background-color: $white;
        >figure{
            width: 100%;
            height: 100%;
            overflow: hidden;
            >img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .avatar-box{
            position: absolute;
            top: 100%;
            left: 15px;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background-color: $white;
            padding: 3px;
            z-index: 1;
        }
    }
    .personalInfo{
        position: relative;
        padding: 75px 15px 20px;
        background-color: $white;
        .name{
            @include font(19px,1.5,normal,900);
        }
        .accountName{
            margin-bottom: 10px;
            color: $dark-grey;
            @include font(15px, 1.5, normal, 500);
            &:before{
                content: '@'
            }
        }
        .description{
            margin-bottom: 10px;
            @include font(14px, 1.5, normal, 500);
        }
        .popularStatus{
            display: flex;
            >div{
                margin-right: 20px;
                @include font(14px,1.2,normal,500);
                >span{
                    color: $dark-grey;
                    margin-left: 3px;
                }
            }
        }
        .buttonWrapper{
            position: absolute;
            top: 20px;
            right: 15px;
        }
    }
}
</style>