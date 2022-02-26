<template>
    <div>
        <PersonalCard/>
        <UserNavTabs/>
        <Tweet :initTweet="tweet"/>
    </div>
</template>

<script>

const dummyUser = {
    id: 1,
    email: "root@example.com",
    password: "12345678",
    name: "root",
    account: "root",
    role: "admin",
    avatar: "https://gravatar.com/avatar/992ba14216a3e429e1b6c3bd498cfabe?s=400&d=wavatar&r=x",
    introduction: "",
    cover: "",
    tweetCount: null,
    followingCount: null,
    followerCount: null,
    likedCount: null,
    createdAt: "",
    updatedAt: "",
}

const dummyData = {
    id: 4,
    UserId: 4,
    description:
      "Et veniam tempore impedit eos dolorem veritatis voluptas. Neque expedita doloribus autem recusandae asperiores et ex officiis. Mollitia quam animi et tempora velit aut possimus. Voluptas dolores explicabo labore consequatur voluptas voluptatibus. Aut voluptates est vero voluptatem adipisci et nostrum accusantium.",
    createdAt: "2022-02-25T15:41:22.000Z",
    updatedAt: "2022-02-25T15:41:22.000Z",
    userId: 4,
    User: {
      id: 4,
      email: "root@example.com",
      password: "$2a$10$IcKYCk0dT7T/2ctcxtOBhOdy49j6ZvZONNKqLARRUMXr7XMusSDD.",
      name: "root",
      account: "root",
      role: "admin",
      avatar: "https://loremflickr.com/320/240/people",
      introduction: "Dicta voluptas velit aut.",
      cover: "https://loremflickr.com/800/600/paris",
      tweetCount: null,
      followingCount: null,
      followerCount: null,
      likedCount: null,
      createdAt: "2022-02-25T15:41:21.000Z",
      updatedAt: "2022-02-25T15:41:21.000Z",
    }
}

  

import Tweet from '../components/Tweet.vue'
import PersonalCard from '../components/PersonalCard.vue'
import UserNavTabs from '../components/UserNavTabs.vue'
import UsersApi from '../apis/user'

export default {
    
    components: {
        Tweet,
        PersonalCard,
        UserNavTabs
    },
    data(){
        return {
            tweet: {},
            user: {
                
            }
        }
    },
    methods: {
        async fetchUser(id){
            try{
                const {data, statusText} = await UsersApi.getUser({id})
                const {data} = data
                const {} = data
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                this.user= {
                    ...this.user
                }

            }catch(error){
                console.log('error',error)
            }
        }
    },
    created(){
        this.fetchUser(4)
    }
}
</script>