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
import { Toast } from '../utils/helpers'

// const dummyData = [
//     {
//         "id": 301,  
//         "UserId": 1,  //使用者本人
//         "TweetId": 58, //喜歡的推文id
//         "isDeleted": false,
//         "createdAt": "2022-02-27T13:24:36.000Z", 
//         "updatedAt": "2022-02-27T13:24:36.000Z", //按下喜歡的時間
//         "Tweet": {  //喜歡的推文內容與作者
//             "description": "Cum cupiditate enim cupiditate temporibus. Non nihil cupiditate repellendus omnis. Et consequuntur et quidem.\n \rNatus quia et voluptate ut dignissimos. Eum eum delectus cum libero aut vel voluptas fugiat aut. Et voluptatem vel optio aut. Rem neque ut tempore et eius dignissimos quam ea.\n \rAdipisci soluta in voluptates qui incidunt. Tempora repudiandae qui eligendi sunt quis soluta omnis est maiores. Sed voluptates eius et pariatur quia qui minus sit dolor. Eligendi laudantium nostrum qui est et magnam. Quia consequuntur eius dolorem sed dolor excepturi accusantium quae.",
//             "User": {
//                 "name": "Guadalupe DuBuque",
//                 "account": "user5",
// 								"avatar": "https://loremflickr.com/320/320/people"
//             }
//         }
//     },
//     {
//         "id": 302,
//         "UserId": 1,
//         "TweetId": 60,
//         "isDeleted": false,
//         "createdAt": "2022-02-27T13:24:36.000Z",
//         "updatedAt": "2022-02-27T13:24:36.000Z",
//         "Tweet": {
//             "description": "Eum aut in inventore ipsam tempora illum. Cupiditate voluptatem omnis. Aut est iste est unde ut. Deserunt blanditiis natus deserunt quis et perspiciatis.",
//             "User": {
//                 "name": "Guadalupe DuBuque",
//                 "account": "user5",
// 								"avatar": "https://loremflickr.com/320/320/people"
//             }
//         }
//     },
// ]

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
               const {data, statusText} = await UsersApi.getUserLikesTweet({userId})
               console.log('@',data)
               if(statusText !== 'OK'){
                   throw new Error(statusText)
               }
                this.tweets = data.map(tweet => {
                    return {
                        id: tweet.id,
                        UserId: '', //?
                        description: tweet.Tweet.description, //貼文內容
                        createdAt: tweet.createdAt,
                        updatedAt: tweet.updatedAt,
                        userId: '',
                        User: {
                            id: '', //? 
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