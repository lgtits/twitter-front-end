<template>
    <div class="wrapper">
        <Header :initUser="user"/>
        <PersonalCard :initUser="user"/>
        <UserNavTabs/>
        <NoTweet
         v-if="!tweets.length"
         initText="該用戶目前沒有任何喜歡~"
         />
        <Tweet 
        v-else
        v-for="tweet in tweets" 
        :key="tweet.id" 
        :initTweet="tweet"/>
    </div>
</template>

<script>
import Tweet from '../Tweet/Tweet.vue'
import UserNavTabs from '../UserNavTabs.vue'
import PersonalCard from '../PersonalCard.vue'
import UsersApi from '../../apis/user'
import { Toast } from '../../utils/helpers'
import NoTweet from '../Tweet/NoTweet.vue'
import Header from '../Header.vue'

export default {
    name: 'TweetContent',
    components: {
        Tweet,
        NoTweet,
        PersonalCard,
        UserNavTabs,
        Header
    },
    data(){
        return {
            tweets: [],
            user: {
                id: -1,
                email: "",
                password: "",
                name: "",
                account: "",
                role: "",
                avatar: "",
                introduction: "",
                cover: "",
                tweetCount: null,
                followingCount: null,
                followerCount: null,
                likedCount: null,
                createdAt: "",
                updatedAt: "",
            }
        }
    },
    methods: {
        async fetchTweets(userId){
            try{
               const {data, statusText} = await UsersApi.getUserLikesTweet({userId})
               console.log('!@###',data)
               if(statusText !== 'OK'){
                   throw new Error(statusText)
               }
               // 先排除沒有tweet的資料
                this.tweets = data.filter(tweet => {
                    return tweet.Tweet
                }).map(tweet => {
                    console.log('123',tweet.Tweet)
                    return {
                        id: tweet.id,
                        UserId: tweet.Tweet.User.id, //
                        description: tweet.Tweet.description, //貼文內容
                        createdAt: tweet.createdAt,
                        updatedAt: tweet.updatedAt,
                        userId: tweet.Tweet.User.id,
                        User: {
                            id: tweet.Tweet.User.id, //
                            name: tweet.Tweet.User.name, // 貼文發表者
                            account: tweet.Tweet.User.account,
                            avatar: tweet.Tweet.User.acatar, // 貼文偷貼
                        },
                   }
                })
               
            }catch(error){
                console.log('error',error.message)
                Toast.fire({
                    icon: 'error',
                    title: '未能取得使用者推文，請稍後再試'
                })
            }
        },
        async fetchUser(userId){
            try{
                const {data, statusText} = await UsersApi.getUser({userId})
                console.log('$$',data)
                const {
                    id,
                    email,
                    name,
                    account,
                    role,
                    avatar,
                    introduction,
                    cover,
                    tweetCount,
                    followingCount,
                    followerCount,
                    likedCount,
                    createdAt,
                    updatedAt,
                } = data
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                this.user= {
                    ...this.user,
                    id,
                    email,
                    name,
                    account,
                    role,
                    avatar,
                    introduction,
                    cover,
                    tweetCount,
                    followingCount,
                    followerCount,
                    likedCount,
                    createdAt,
                    updatedAt,
                }

            }catch(error){
                console.log('error',error)
                Toast.fire({
                    icon: 'error',
                    title: '取得使用者資料失敗，請稍後再試'
                })
            }
        },
    },
    created(){
        const id = this.$route.params.id
        this.fetchUser(id)
        this.fetchTweets(id)
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    height: 100%;
}
</style>