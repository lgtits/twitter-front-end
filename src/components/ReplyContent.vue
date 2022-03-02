<template>
    <div class="wrapper">
        <Header :initUser="user"/>
        <PersonalCard :initUser="user"/>
        <UserNavTabs/>
        <NoTweet
         v-if="!tweets.length"
         initText="該用戶目前沒有回覆~"
         />
        <Tweet 
        v-else 
        v-for="tweet in tweets" 
        :key="tweet.id" 
        :initTweet="tweet"/>
    </div>
</template>

<script>
import Tweet from '../components/Tweet.vue'
import UserNavTabs from '../components/UserNavTabs.vue'
import UsersApi from '../apis/user'
import PersonalCard from '../components/PersonalCard.vue'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'
import NoTweet from '../components/NoTweet.vue'
import Header from '../components/Header.vue'

export default {
    name: 'ReplyContent',
    components: {
        PersonalCard,
        Tweet,
        NoTweet,
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
            },
        }
    },
    methods: {
        async fetchTweets(userId){
            try{
                // 取得tweet資料
               const {data, statusText} = await UsersApi.getUserRepliesTweet({userId})
               console.log('@@@@@',data)
               // 無任何資料
            //    if(state === 400){

            //    }
               if(statusText !== 'OK'){
                   throw new Error(statusText)
               }
               // tweet接收的資料格式，務必照此格式tweet才能正常顯示
               this.tweets = data.map(tweet => {
                   return {
                        id: tweet.Tweet.id,
                        UserId: tweet.User.id,
                        description: tweet.comment,
                        createdAt: tweet.createdAt,
                        updatedAt: tweet.updatedAt,
                        userId: tweet.User.id,
                        User: {
                            id: tweet.User.id,
                            name: tweet.User.name,
                            account: tweet.User.account,
                            avatar: tweet.User.acatar,
                        },
                        // 若卡牌有回復加上這條
                        replyPerson: tweet.User.account
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
                } = data.userData
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
            }
        },
    },
    created(){
        const id = this.$route.params.id
        this.fetchUser(id)
        this.fetchTweets(id)

    },
    computed: {
        ...mapState(['currentUser'])
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    height: 100%;
}
</style>