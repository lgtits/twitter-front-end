<template>
    <div>
        <FollowNavTabs/>
        <FollowUserTweet v-for="tweet in tweets" :key="tweet.id" :initTweet="tweet"/>
    </div>
</template>

<script>
import FollowUserTweet from './FollowUserTweet.vue'
import FollowNavTabs from './FollowNavTabs.vue'
import UsersApi from '../apis/user'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
    name: 'FollowingConetent',
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
            try{
                // 取得tweet資料
               const {data, statusText} = await UsersApi.getUserFollowings({userId})
               console.log('@@@@@',data)
               if(statusText !== 'OK'){
                   throw new Error(statusText)
               }
               this.tweets = data.map(tweet => {
                   return {
                        id: tweet.id, 
                        UserId: tweet.following.id, 
                        createdAt: tweet.createdAt,
                        userId: tweet.following.id,
                        isFollowed: tweet.isFollowed,
                        User: {
                            id: tweet.following.id,
                            name: tweet.following.name,
                            account: tweet.following.account,
                            avatar: tweet.following.avatar,
                            introduction: tweet.following.introduction
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