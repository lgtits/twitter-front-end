<template>
    <a class="outlineBtn" href="#">
        {{text}}
    </a>
</template>
<script>
export default {
    props: {
        initText:{
            type: String,
            default: '追隨'
        },
    },
    data() {
        return{
            text: this.initText
        }
    }
}
</script>
<style lang="scss" scoped>
 .outlineBtn{
    height: fit-content;
    width: fit-content;
    padding: 10px 15px;
    color: $primary;
    border: 1px solid $primary; 
    border-radius: 500px;
    @include font(15px, 1.2, normal ,700);
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