<template>
    <div class="create-tweet">
        <Avatar :initImage="avatar"/>
        <div class="say">
            <textarea 
            class="say-content" 
            placeholder="有什麼新鮮事"
            v-model="description"
            ></textarea>
            <SolidBtn 
            initText="推文"
            @after-create-tweet="afterCreateTweet"
            />
        </div>
    </div>
</template>
<script>
    import Avatar from './Avatar.vue'
    import SolidBtn from './SolidBtn.vue'
    import uuid from 'uuid'

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
    export default {
        components: {
            Avatar,
            SolidBtn
        },
        data(){
            return {
                description: '',
                avatar: dummyUser.avatar
            }
        },
        methods:{
            afterCreateTweet(){
                // TODO:發布文章
                this.$emit('after-create-tweet',{
                    id: uuid(),
                    description: this.description
                })
                // 清空
                this.description = ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .create-tweet{
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-template-rows: 120px;
        gap: 10px;
        padding: 10px 15px;
        margin-bottom: 10px;
        background-color: $white;
        border-bottom: 1px solid $border;
        .say{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .say-content{
                appearance: none;
                flex: 1;
                width: 100%;
                margin-bottom: 10px;
                padding: 10px 0;
                resize: none;
                border: none;
                @include font(18px, 1.4, normal, 500);
                &::placeholder{
                    color: $middle-grey;
                    @include font(18px, 1.4, normal, 500);
                }
            }
        }
    }
</style>