<template>
    <div class="tweet-wrapper">
        <Avatar :init-image="tweet.image"/>
        <div class="tweet-body">
            <div class="tweet-name">
                <div class="name">{{tweet.name}}</div>
                <div class="account-name">{{tweet.accountName}}</div>
                <div class="update-time">{{tweet.createdAt | fromNow }}</div>
            </div>
            <div class="tweet-content">{{tweet.description}}</div>
            <div class="reaction">
                <a href="#" class="comments">
                    <i><img src="../assets/image/message.svg" alt="評論符號"></i>
                    <p>{{tweetComments.length}}</p>
                </a>
                <a href="#" class="favorite">
                    <i><img src="../assets/image/favorite.svg" alt="最愛符號"></i>
                    <p>{{tweetLikes.length}}</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import Avatar from './Avatar.vue'
import moment from 'moment'

export default {
    components: {
        Avatar
    },
    props:{
        initTweet: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            tweet: {
                id: -1,
                userId: -1,
                name: '',
                accountName: '',
                image: '',
                description: '',
                createdAt: '',
                isLiked: false,
            },
            tweetLikes: [],
            tweetComments: [],
        }
    },
    methods: {
        fetchTweetDate(){
            const {
                id, 
                UserId: userId,       
                description, 
                createdAt,
                User
            } = this.initTweet
            const {
                name,
                account: accountName,
                avatar: image
            } = User
            this.tweet = {
                ...this.tweet,
                id,
                userId, 
                name, 
                accountName, 
                image, 
                description, 
                createdAt, 
            }
        }
    },
    created(){
        this.fetchTweetDate()
    },
    // watch: {
    //     initTweet(newValue){
    //         this.tweet ={
    //             ...this.tweet,
    //             ...newValue
    //         }
    //     }
    // },
    filters: {
        fromNow(datetime){
            if(!datetime){
                return '-'
            }
            // 使用moment 提供的fromNow 方法
            return moment(datetime).fromNow()
        }
    }
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
        border-bottom: 1px solid $border;
        .tweet-body{
            display: flex;
            flex-direction: column;
            .tweet-name{
                display: flex;
                align-items: center;
                margin-bottom: 5px;
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
        }
        .tweet-content{
            margin-bottom: 15px;
            @include font (15px, 1.5, normal, 500);
        }
        .reaction{
            display: flex;
            .comments{
                display: flex;
                align-items: center;
                margin-right: 50px;
                >p{
                    color: $dark-grey;
                    @include font (13px, 1, normal, 500);
                }
            }
            .favorite{
                display: flex;
                align-items: center;
                >p{
                    color: $dark-grey;
                    @include font (13px, 1, normal, 500);
                }
            }
            i{
                margin-right: 10px;
            }
        }
    }
</style>