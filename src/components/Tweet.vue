<template>
    <router-link :to="{name: 'tweet', params: {id: tweet.userId}}" class="tweet-wrapper">
        <Avatar :init-image="tweet.image" :initUserId="tweet.userId"/>
        <div class="tweet-body">
            <div class="tweet-name">
                <div class="name">{{tweet.name}}</div>
                <div class="account-name">{{tweet.accountName}}</div>
                <div class="update-time">{{tweet.createdAt | fromNow }}</div>
            </div>
            <div class="replyPerson" v-show="initTweet.replyPerson">
                <span>回復</span>
                <div class="account-name">{{tweet.replyPerson}}</div>
            </div>
            <div class="tweet-content">{{tweet.description}}</div>
            <div class="reaction">
                <a href="#" class="comments">
                    <i><MainReplyModal :initTweet="tweet"/></i>
                    <p>{{tweet.replyCount}}</p>
                </a>
                <a href="#" class="favorite" @click.stop.prevent="handleAddLike(tweet.id)" >
                    <i><img src="../assets/image/favorite.svg" alt="尚未加入最愛"></i>
                    <i><img src="../assets/image/favorite-active.svg" alt="加入最愛中"></i>
                    <p>{{tweet.likeCount}}</p>
                </a>
            </div>
        </div>
    </router-link>
</template>
<script>
import Avatar from '../components/Avatar.vue'
import moment from 'moment'
import tweetApis from '../apis/tweet'
import { Toast } from '../utils/helpers.js'
import MainReplyModal from '../components/MainReplyModal.vue'

export default {
    components: {
        Avatar,
        MainReplyModal
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
                likeCount: -1,
                replyCount: -1,
                // 暫時
                replyPerson: ''
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
                likeCount,
                replyCount,
                // 暫時,
                replyPerson,
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
                likeCount,
                replyCount,
                replyPerson
            }
        },
        async handleAddLike(tweetId){
            try{
                const {statusText} = await tweetApis.addLike({tweetId})
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                this.tweet = {
                    ...this.tweet,
                    isLike: true
                }

            }catch(error){
                console.log('error',error.message)

                Toast.fire({
                    icon: 'error',
                    title: '加到喜歡失敗，請稍後再試'
                })
            }
        }
    },
    created(){
        this.fetchTweetDate()
    },
    watch: {
        initTweet(newValue){
            this.tweet ={
                ...this.tweet,
                ...newValue
            }
        }
    },
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
                >i{
                    width: 13px;
                    height: 13px;
                    margin-right: 10px;
                }
            }
            .favorite{
                display: flex;
                align-items: center;
                >p{
                    color: $dark-grey;
                    @include font (13px, 1, normal, 500);
                }
                i{
                    margin-right: 10px;
                }
            }
        }
    }
</style>