<template>
    <div class="tweet-detail">
        <div class="detail-user">
            <Avatar/>
            <div class="detail-name">
                <div class="name"></div>
                <div class="account-name"></div>
            </div>
            <div class="tweet-content"></div>
            <div class="detail-time">
                <div class="time"></div>
                <div class="date"></div>
            </div>
            <div class="reaction">
                <a href="#" class="comments">
                    <i><img src="../assets/image/message.svg" alt="評論符號"></i>
                    <p>{{tweetComments.length}}</p>
                </a>
                <a href="#" class="favorite" @click.stop.prevent="handleAddLike(tweet.id)" >
                    <i><img src="../assets/image/favorite.svg" alt="最愛符號"></i>
                    <p>{{tweetLikes.length}}</p>
                </a>
            </div>
            <div class="icon-group">
                
            </div>
        </div>
    </div>
</template>
<script>
import Avatar from '../components/Avatar.vue'
export default {
    name: 'tweetDetail',
    components: {
        Avatar
    }
}
</script>
<style lang="scss" scoped>

</style>