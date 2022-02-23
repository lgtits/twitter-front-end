<template>
    <div class="tweet-wrapper">
        <Avatar :init-image="tweet.image"/>
        <div class="tweet-body">
            <div class="tweet-name">
                <div class="name">{{tweet.name}}</div>
                <div class="account-name">{{tweet.accountName}}</div>
                <div class="update-time">{{tweet.createAt | fromNow }}</div>
            </div>
            <div class="tweet-content">{{tweet.content}}</div>
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
import Avatar from '../components/Avatar.vue'
import moment from 'moment'
const dummyData = {
    tweet: {
        id: 1,
        userId: 1,
        name: 'Apple',
        accountName: 'apple',
        image: 'https://gravatar.com/avatar/c039486cb31925728a7abb14bae5d493?s=400&d=wavatar&r=x',
        content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        createAt: '2019-06-07T13:28:51.000Z',
        isLiked: false,
    },
    tweetLikes: [{},{},{},{}],
    tweetComments: [{},{},{},{},{},{},{},{},{},{},{},{}]
}
export default {
    components: {
        Avatar
    },
    data(){
        return {
            tweet: {
                id: -1,
                userId: -1,
                name: '',
                accountName: '',
                image: '',
                content: '',
                createAt: '',
                isLiked: false,
            },
            tweetLikes: [],
            tweetComments: [],
        }
    },
    methods: {
        fetchTweetDate(){
            const {id, userId, name, accountName, image, content, createAt, isLiked} = dummyData.tweet
            const {tweetLikes, tweetComments} = dummyData
            this.tweet = {
                ...this.tweet,
                id,
                userId, 
                name, 
                accountName, 
                image, 
                content, 
                createAt, 
                isLiked
            }
            this.tweetLikes = tweetLikes,
            this.tweetComments = tweetComments
        }
    },
    created(){
        this.fetchTweetDate()
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
        .tweet-body{
            display: flex;
            flex-direction: column;
            .tweet-name{
                display: flex;
            }
        }
        .tweet-name{
            margin-bottom: 5px;
        }
        .tweet-content{
            margin-bottom: 15px;
        }
        .reaction{
            display: flex;
            .comments{
                display: flex;
                align-items: center;
                margin-right: 50px;
            }
            .favorite{
                display: flex;
                align-items: center;
            }
            i{
                margin-right: 10px;
            }
        }
    }
</style>