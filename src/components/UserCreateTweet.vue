<template>
    <div class="create-tweet">
        <Avatar/>
        <div class="say">
            <textarea 
            class="say-content" 
            placeholder="有什麼新鮮事"
            v-model="createText"
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
    export default {
        components: {
            Avatar,
            SolidBtn
        },
        data(){
            return {
                createText: ''
            }
        },
        methods:{
            afterCreateTweet(){
                // TODO:發布文章
                this.$emit('after-create-tweet',{
                    id: uuid(),
                    createText: this.createText
                })
                // 清空
                this.createText = ""
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