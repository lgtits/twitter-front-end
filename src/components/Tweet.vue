<template>
    <div class="tweet-wrapper">
        <Avatar/>
        <div class="tweet-body">
            <div class="tweet-name">
                <div class="name">Apple</div>
                <div class="account-name">apple</div>
                <div class="update-time">3小時</div>
            </div>
            <div class="tweet-content">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </div>
            <div class="reaction">
                <a href="#" class="comments">
                    <i><img src="../assets/image/message.svg" alt="評論符號"></i>
                    <p>13</p>
                </a>
                <a href="#" class="favorite">
                    <i><img src="../assets/image/favorite.svg" alt="最愛符號"></i>
                    <p>76</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import Avatar from '../components/Avatar.vue'
export default {
    components: {
        Avatar
    }
}
</script>
<style lang="scss" scoped>
    @import '../assets/style/_variables.scss';
    @import '../assets/style/_reset.scss';
    @import '../assets/style/_base.scss';
    @import '../assets/style/_mixin.scss';
    .tweet-wrapper{
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-template-rows: 1fr;
        gap: 10px;
        padding: 15px;
        background-color: $white;
        border-bottom: 1px solid $border;
        .tweet-body{
            display: flex;
            flex-direction: column;
            .tweet-name{
                display: flex;
                align-items: center;
                margin-bottom: 5px;
                .name{
                    margin-right: 5px;
                    @include font(15px, 1.5, normal, 700);
                }
                .account-name{
                    margin-right: 6px;
                    color: $dark-grey;
                    @include font(15px, 1.5, normal, 500);
                    &:before{
                        content: '@'
                    }
                }
                .update-time{
                    position: relative;
                    padding-left: 10px;
                    color: $dark-grey;
                    @include font(15px, 1.5, normal, 500);
                    &:before{
                        content: '•';
                        display: inline-block;
                        position: absolute;
                        left: -5px;
                    }
                }
            }
        }
        .tweet-content{
            margin-bottom: 15px;
            @include font (15px, 1.5, normal, 500);
        }
        .reaction{
            display: flex;
            .comments{
                display: flex;
                align-items: center;
                margin-right: 50px;
                >p{
                    color: $dark-grey;
                    @include font (13px, 1, normal, 500);
                }
            }
            .favorite{
                display: flex;
                align-items: center;
                >p{
                    color: $dark-grey;
                    @include font (13px, 1, normal, 500);
                }
            }
            i{
                margin-right: 10px;
            }
        }
    }
</style>