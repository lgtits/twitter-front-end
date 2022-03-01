<template>
    <a  
    href="#"
    :class="['solid-btn', {'sm': size === 'sm'}, {'md': size === 'md'}]"
    @click.stop.prevent="handlePublish"
    >
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
    },
    methods: {
        handlePublish(){
            if(this.text === '推文'){
                this.$emit("after-create-tweet")
            }else{
                return
            }
        },
        handleFollow(){
            if(this.text === '追隨'){
                this.$emit("after-click-follow")
            }else{
                return
            }
        },
    }
}
</script>
<style lang="scss" scoped>
 .solid-btn{
    height: fit-content;
    padding: 10px 15px;
    color: $white;
    border: 1px solid $primary; 
    background-color: $primary;
    border-radius: 500px;
    @include font(15px, 1.2, normal ,500);
    &.md{
        padding: 10px 15px;
    }
    &.sm{
        padding: 5px 15px;
    }
    &:hover{
        border: 1px solid $primary; 
        background-color: $white;
        color: $primary;
    }
  }
</style>