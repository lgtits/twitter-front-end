<template>
    <div>
        <FollowNavTabs/>
        <FollowUserTweet v-for="tweet in tweets" :key="tweet.id" :initTweet="tweet"/>
    </div>
</template>

<script>
import FollowNavTabs from './FollowNavTabs.vue'
import FollowUserTweet from './FollowUserTweet.vue'
import UsersApi from '../apis/user'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
    name: 'FollowerContent',
    components: {
        FollowUserTweet,
        FollowNavTabs
    },
    data(){
        return {
            tweets: [],
        }
    },
    methods: {
        async fetchTweets(userId){
            console.log(userId)
            try{
                // 取得tweet資料
               const {data, statusText} = await UsersApi.getUserFollowers({userId})
               console.log('@@@@@',data)
               if(statusText !== 'OK'){
                   throw new Error(statusText)
               }

            //    followUserTeet 卡牌前端整理資料
               this.tweets = data.map(tweet => {
                   return {
                        id: tweet.id, 
                        UserId: tweet.follower.id, 
                        createdAt: tweet.createdAt,
                        userId: tweet.follower.id,
                        isFollowed: tweet.isFollowed,
                        User: {
                            id: tweet.follower.id,
                            name: tweet.follower.name,
                            account: tweet.follower.account,
                            avatar: tweet.follower.avatar,
                            introduction: tweet.follower.introduction
                        },
                   }
               })
            }catch(error){
                console.log('error',error.message)
                Toast.fire({
                    icon: 'error',
                    title: '未能取得使用者推文，請稍後在試'
                })
            }
        },
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