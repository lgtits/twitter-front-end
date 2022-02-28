<template>
    <router-link :class="['outlineBtn', {'sm': size = 'sm'}]" to="#">
        {{text}}
    </router-link>
</template>
<script>
export default {
    props: {
        initText:{
            type: String,
            default: '追隨'
        },
        initSize: {
            type: String,
            default: 'md'
        }
    },
    data() {
        return{
            text: this.initText,
            size: this.initSize
        }
    }
}
</script>
<style lang="scss" scoped>
 .outlineBtn{
    height: fit-content;
    width: fit-content;
    color: $primary;
    border: 1px solid $primary; 
    border-radius: 500px;
    @include font(15px, 1.2, normal ,700);
    &.md{
        padding: 10px 15px;
    }
    &.sm{
        padding: 5px 15px;
    }
    &.focus{
        background-color: $primary;
        color: $white;
    }
    &:hover{
        background-color: $primary;
        color: $white;
    }
  }
</style>