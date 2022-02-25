<template>
    <a 
    class="solid-btn" 
    href="#"
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
        }
    },
    data() {
        return{
            text: this.initText
        }
    },
    methods: {
        handlePublish(){
            this.$emit("after-click-publish")
        }
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
    &:hover{
        border: 1px solid $primary; 
        background-color: $white;
        color: $primary;
    }
  }
</style>