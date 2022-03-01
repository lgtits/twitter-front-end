<template>
    <div>
        <FollowNavTabs/>
        <FollowUserTweet v-for="tweet in tweets" :key="tweet.id" :initTweet="tweet"/>
    </div>
</template>

<script>
import FollowUserTweet from './FollowUserTweet.vue'
import FollowNavTabs from './FollowNavTabs.vue'
// import UsersApi from '../apis/user'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

const dummyData = [
    {
        "id": 7,
        "followingId": 2,   //跟隨的人
        "followerId": 1,    //使用者本人
        "createdAt": "2022-02-26T18:09:19.000Z", //跟隨時間
        "following": {  //跟隨的人的資訊
            "id": 2,
            "account": "user1",
            "name": "Chester Windler",
            "avatar": "https://loremflickr.com/320/320/people",
            "introduction": "Qui repellendus repellat laudantium minus aut.\nVeniam ea libero labore natus qui qui quisquam totam.\nA quasi eligendi commodi rerum."
        }
    },
    {
        "id": 6,
        "followingId": 5,  //跟隨的人
        "followerId": 1,   //使用者本人
        "createdAt": "2022-02-26T17:58:14.000Z",
        "following": { //跟隨的人的資訊
            "id": 5,
            "account": "user4",
            "name": "Ira Pfannerstill",
            "avatar": "https://loremflickr.com/320/320/people",
            "introduction": "Asperiores est nobis sunt voluptas vitae. Quo laudantium libero ut culpa."
        }
    },
]

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
            console.log(userId)
            try{
                // 取得tweet資料
            //    const {data, statusText} = await UsersApi.getUserFollowings({userId})
            // //    console.log('@@@@@',data)
            //    if(statusText !== 'OK'){
            //        throw new Error(statusText)
            //    }
               this.tweets = dummyData.map(tweet => {
                   return {
                        id: tweet.id, 
                        UserId: tweet.following.id, 
                        createdAt: tweet.createdAt,
                        userId: tweet.following.id,
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