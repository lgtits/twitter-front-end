<template>
    <div class="personalCard">
        <div class="userBackground">
            <div class="avatar-box">
                <Avatar/>
            </div>
        </div>
        <div class="personalInfo">
            <div class="name">John Doe</div>
            <div class="accountName">heyjohn</div>
            <div class="description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
            <div class="popularStatus">
                <div>
                    <a href="#">34</a>
                    <span>個跟隨中</span>
                </div>
                <div>
                    <a href="#">59</a>
                    <span>位跟隨者</span>
                </div>
            </div>
             <div class="buttonWrapper">
                <OutlineBtn initText="編輯個人資料"/>
            </div>
        </div>
    </div>
</template>
<script>
import Avatar from '../components/Avatar.vue'
import OutlineBtn from '../components/OutlineBtn.vue'
export default {
    components: {
        Avatar,
        OutlineBtn
    }
}
</script>

<style lang="scss" scoped>
.personalCard{
    width: 100%;
    .userBackground{
        position: relative;
        width: 100%;
        height: 200px;
        background-color: #999;
        .avatar-box{
            position: absolute;
            top: 100%;
            left: 15px;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background-color: $white;
            padding: 3px;
            z-index: 1;
        }
    }
    .personalInfo{
        position: relative;
        padding: 75px 15px 20px;
        background-color: $white;
        .name{
            @include font(19px,1.5,normal,900);
        }
        .accountName{
            margin-bottom: 10px;
            color: $dark-grey;
            @include font(15px, 1.5, normal, 500);
            &:before{
                content: '@'
            }
        }
        .description{
            margin-bottom: 10px;
            @include font(14px, 1.5, normal, 500);
        }
        .popularStatus{
            display: flex;
            >div{
                margin-right: 20px;
                @include font(14px,1.2,normal,500);
                >span{
                    color: $dark-grey;
                }
            }
        }
        .buttonWrapper{
            position: absolute;
            top: 20px;
            right: 15px;
        }
    }
}
</style>