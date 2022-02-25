<template>
    <ul>
        <li class="active"><a href="#">推文</a></li>
        <li><a href="#">推文與回覆</a></li>
        <li><a href="#">喜歡的內容</a></li>
    </ul>
</template>
<style lang="scss" scoped>
ul{
    display: flex;
    align-items: center;
    background-color: $white;
    border-bottom: 1px solid $border;
    li{
        display: inline-block;
        &.active{
            color: $primary;
            a{
                border-bottom: 2px solid $primary;
                color: $primary;
            }
        }
        >a{
            display: inline-block;
            padding: 13px 50px;
        }
    }
}
</style>