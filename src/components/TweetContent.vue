<template>
    <div>
        <UserNavTabs/>
        <Tweet v-for="tweet in tweets" :key="tweet.id" :initTweet="tweet"/>
    </div>
</template>

<script>
import Tweet from '../components/Tweet.vue' 
import UserNavTabs from '../components/UserNavTabs.vue'
import UsersApi from '../apis/user'
import { Toast }  from '../utils/helpers'


export default {
    name: 'TweetContent',
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
               const {data, statusText} = await UsersApi.getUserTweets({userId})
            //    console.log('**',data.data)
               if(statusText !== 'OK'){
                   throw new Error(statusText)
               }
               this.tweets = data.data
               
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
    }
}
</script>