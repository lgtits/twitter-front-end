<template>
    <div>
        <PersonalCard/>
        <UserNavTabs/>
        <Tweet/>
    </div>
</template>

<script>
import Tweet from '../components/Tweet.vue'
import PersonalCard from '../components/PersonalCard.vue'
import UserNavTabs from '../components/UserNavTabs.vue'

export default {
    
    components: {
        Tweet,
        PersonalCard,
        UserNavTabs
    }
}
</script>