<template>
    <figure>
<<<<<<< HEAD
        <img :src="initImage" alt="大頭貼">
    </figure>
</template>

<script>
export default {
    props: {
        initImage:{
            type: String,
            default: 'https://fakeimg.pl/300/'
        }
    }
}
</script>

=======
        <img src="https://fakeimg.pl/300/" alt="大頭貼">
    </figure>
</template>

>>>>>>> a73af3d (新增靜態main頁面)
<style lang="scss" scoped>
// 該組件永遠為圓形，寬度為父層寬度
figure{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
    overflow: hidden;
    >img{
        width: 100%;
        @include poaCenter;
    }
}
</style>