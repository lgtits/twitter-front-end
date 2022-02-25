<template>
    <div class="popular-list">
        <h2>Popular</h2>
        <ul class="list">
            <li class="popular-card" v-for="user in users" :key="user.id">
                <Avatar :initImage="user.image"/>
                <div class="popular-name">
                    <div class="name">{{user.name}}</div>
                    <div class="account-name">{{user.accountName}}</div>
                </div>
                <OutlineBtn 
                initText="追隨" 
                v-if="user.isFollowing"
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

const dummyData = {
    users: [{
        id: 1,
        name: 'Pizza Hut',
        accountName: 'pizzahut',
        image: 'https://gravatar.com/avatar/59eef608fce338d03c39915b08c9ae51?s=400&d=wavatar&r=x',
        isFollowing: false
    },{
        id: 2,
        name: "L'Oréal",
        accountName: 'Loreal',
        image: 'https://gravatar.com/avatar/f35709965b81ef84b3a2f94addd372a2?s=400&d=wavatar&r=x',
        isFollowing: true
    }
    ]
}

export default {
    components: {
        OutlineBtn,
        Avatar,
        SolidBtn
    },
    data(){
        return {
            users: []
            //  {
            //     id: -1,
            //     name: '',
            //     accountName: '',
            //     image: '',
            //     isFollowing: false
            // }
        }
    },
    methods:{
        fetchUsers(){
        this.users = [
            ...this.users,
            ...dummyData.users
            ]
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
            border-bottom: 1px solid $border;
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
            border-bottom: 1px solid border;
            padding: 0 15px;
            border-bottom: 1px solid $border;
            @include font(18px, 45px, normal, 700);
        }
    }
</style>