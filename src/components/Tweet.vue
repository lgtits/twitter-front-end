<template>
    <div class="tweet-wrapper">
        <figure>
            <img src="https://fakeimg.pl/300/" alt="">
        </figure>
        <div class="tweet-body">
            <div class="tweet-name">
            <div class="name">Apple</div>
            <div class="account-name">@apple</div>
            <div class="update-time">. 3小時</div>
        </div>
        <div class="tweet-content">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </div>
        <div class="reaction">
            <div class="comments">
                <i>ICON</i>
                <p>13</p>
            </div>
            <div class="favorite">
                <i>ICON</i>
                <p>76</p>
            </div>
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/style/_variables.scss';
    @import '../assets/style/_reset.scss';
    @import '../assets/style/_base.scss';
    @import '../assets/style/_mixin.scss';
    .tweet-wrapper{
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-template-rows: 1fr;
        padding: 15px;
        >figure{
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            border-radius: 100%;
            overflow: hidden;
            >img{
                @include poaCenter;
            }
        }
    }
</style>