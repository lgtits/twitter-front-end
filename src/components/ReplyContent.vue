<template>
    <div>
        <!-- <PersonalCard :initUser="user"/> -->
        <UserNavTabs/>
        <Tweet v-for="tweet in tweets" :key="tweet.id" :initTweet="tweet"/>
    </div>
</template>

<script>
import Tweet from '../components/Tweet.vue'
import UserNavTabs from '../components/UserNavTabs.vue'
import UsersApi from '../apis/user'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
    name: 'ReplyContent',
    components: {
        Tweet,
        UserNavTabs
    },
    data(){
        return {
            tweets: [],
        }
    },
    methods: {
        async fetchTweets(userId){
            try{
                // 取得tweet資料
               const {data, statusText} = await UsersApi.getUserRepliesTweet({userId})
            //    console.log('@@@@@',data)
               if(statusText !== 'OK'){
                   throw new Error(statusText)
               }
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
                    title: '未能取得使用者推文，請稍後在試'
                })
            }
        }
        
    },
    created(){
        const id = this.$route.params.id
        this.fetchTweets(id)

    },
    computed: {
        ...mapState(['currentUser'])
    }
}
</script>