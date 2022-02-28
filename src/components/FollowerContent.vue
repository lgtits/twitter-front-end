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

const dummyData = [
    {
        "id": 8,
        "followingId": 5, //使用者本人
        "followerId": 2,  //跟隨這個使用者的人
        "createdAt": "2022-02-27T18:09:19.000Z",
        "follower": { //跟隨的人的基本資訊
            "id": 2,  
            "account": "user1",
            "name": "Chester Windler",
            "avatar": "https://loremflickr.com/320/320/people",
            "introduction": "Qui repellendus repellat laudantium minus aut.\nVeniam ea libero labore natus qui qui quisquam totam.\nA quasi eligendi commodi rerum."
        }
    },
    {
        "id": 6,
        "followingId": 5, //使用者本人
        "followerId": 1, //跟隨這個使用者的人
        "createdAt": "2022-02-26T17:58:14.000Z",
        "follower": { //跟隨的人的基本資訊
            "id": 1,
            "account": "root",
            "name": "root",
            "avatar": "https://loremflickr.com/320/320/people",
            "introduction": "Placeat dicta dolores qui dolorem architecto et ab."
        }
    }
]

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
            try{
                // 取得tweet資料
            //    const {data, statusText} = await UsersApi.getUserFollowers({userId})
            //    console.log('@@@@@',data)
            //    if(statusText !== 'OK'){
            //        throw new Error(statusText)
            //    }

               // followUserTeet 卡牌前端整理資料
               console.log('!@#',dummyData)
               this.tweets = dummyData.map(tweet => {
                   return {
                        id: tweet.id, 
                        UserId: tweet.follower.id, 
                        createdAt: tweet.createdAt,
                        userId: tweet.follower.id,
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