<template>
<div class="d-flex flex-row-reverse justify-space-around">
    <MentorsSection></MentorsSection>
    <ChatSection></ChatSection>
</div>
</template>

<script>
import MentorsSection from "../components/MentorsSection.vue";
import ChatSection from "../components/ChatSection.vue"
export default {
    name: 'ContactMentor',
    components:{
    MentorsSection,
    ChatSection,
}
}
</script>