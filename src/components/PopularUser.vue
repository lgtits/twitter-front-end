npm<template>
    <div class="popular-list">
        <h2>Popular</h2>
        <ul class="list">
            <li class="popular-card">
                <Avatar/>
                <div class="popular-name">
                    <div class="name">Apple</div>
                    <div class="account-name">apple</div>
                </div>
                <OutlineBtn/>
            </li>
            <li class="popular-card">
                <Avatar/>
                <div class="popular-name">
                    <div class="name">Apple</div>
                    <div class="account-name">apple</div>
                </div>
                <OutlineBtn/>
            </li>
        </ul>
    </div>
</template>

<script>
import OutlineBtn from './OutlineBtn.vue'
import Avatar from './Avatar.vue'



export default {
    components: {
        OutlineBtn,
        Avatar
    }
}
</script>
<style lang="scss" scoped>
    @import '../assets/style/_variables.scss';
    @import '../assets/style/_reset.scss';
    @import '../assets/style/_base.scss';
    @import '../assets/style/_mixin.scss';
    
    .popular-list{
        background-color: $light-grey;
        border-radius: 14px;
        .popular-card{
            display: grid;
            grid-template-columns: 50px 1fr auto;
            grid-template-rows: 70px;
            gap: 10px;
            align-items: center;
            padding: 10px 15px;
            border-bottom: 1px solid $border;
        }
        .popular-name{
            .name{
                margin-bottom: 3px;
                @include font(15px, 1, normal, 700);
            }
            .account-name{
                color: $dark-grey;
                @include font(15px, 1, normal, 700);
                &:before{
                    content: '@';
                }
            }
        }
                   
        >h2{
            border-bottom: 1px solid border;
            padding: 0 15px;
            border-bottom: 1px solid $border;
            @include font(18px, 45px, normal, 700);
        }
    }
</style>