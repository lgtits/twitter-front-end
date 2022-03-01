<template>
    <div class="popular-list">
        <h2>Popular</h2>
        <ul class="list">
            <li class="popular-card" v-for="user in users" :key="user.id">
                <Avatar 
                :initImage="user.image"
                :initUserId="user.id"
                />
                <div class="popular-name">
                    <div class="name">{{user.name}}</div>
                    <div class="account-name">{{user.accountName}}</div>
                </div>
                <OutlineBtn 
                initText="追隨" 
                @after-click-follow="afterClickFollow(user.id)"
                v-if="!user.isFollowed"
                />
                <SolidBtn 
                initText="正在跟隨" 
                v-else
                />
            </li>
        </ul>
    </div>
</template>

<script>
import OutlineBtn from './OutlineBtn.vue'
import SolidBtn from './SolidBtn.vue'
import Avatar from './Avatar.vue'
import userApi from '../apis/user'
import FollowShipsApi from '../apis/Followships'
import { Toast } from '../utils/helpers.js'

export default {
    components: {
        OutlineBtn,
        Avatar,
        SolidBtn
    },
    data(){
        return {
            users: []
        }
    },
    methods:{
        async fetchUsers(){
            try{
                const {data, statusText} = await userApi.getUsersTop()
                console.log('@@', data)

                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                this.users = data.map(user => ({
                    id: user.id,
                    name: user.name,
                    accountName: user.account,
                    image: user.avatar,
                    isFollowed: user.isFollowed
                }))
            }catch(error){
                console.log('error', error.message)
                Toast.fire({
                    icon: 'error',
                    title: '載入人氣使用者失敗，請稍後在試'
                })
            }
        },
        async afterClickFollow(userId){
            try{
                const response = await FollowShipsApi.followUser({userId})
                console.log('^',response)
            }catch(error){
                console.log('error', error.message)
                Toast.fire({
                    icon: 'error',
                    title: '追蹤使用者失敗，請稍後在試'
                })
            }
        }
    },
    created(){
        this.fetchUsers()
    }
}
</script>
<style lang="scss" scoped>
    @import '../assets/style/_variables.scss';
    @import '../assets/style/_reset.scss';
    @import '../assets/style/_base.scss';
    @import '../assets/style/_mixin.scss';
    
    .popular-list{
        background-color: $light-grey;
        border-radius: 14px;
        .popular-card{
            display: grid;
            grid-template-columns: 50px 1fr auto;
            grid-template-rows: 70px;
            gap: 10px;
            align-items: center;
            padding: 10px 15px;
            border-top: 1px solid $border;
        }
        .popular-name{
            .name{
                margin-bottom: 3px;
                @include font(15px, 1, normal, 700);
            }
            .account-name{
                color: $dark-grey;
                @include font(15px, 1, normal, 700);
                &:before{
                    content: '@';
                }
            }
        }
                   
        >h2{
            /* border-bottom: 1px solid border; */
            padding: 0 15px;
            border-bottom: 1px solid $border;
            @include font(18px, 45px, normal, 700);
        }
    }
</style>