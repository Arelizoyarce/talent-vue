<template>
<div class="d-flex flex-row-reverse justify-space-around">
    <MentorsSection></MentorsSection>
    <div class="d-flex flex-column">
    <ChatSection></ChatSection>
    <InputMessage></InputMessage>
    </div>
</div>
</template>

<script>
import MentorsSection from "../components/MentorsSection.vue";
import ChatSection from "../components/ChatSection.vue"
import InputMessage from "../components/InputMessage.vue";
export default {
    name: 'ContactMentor',
    components:{
    MentorsSection,
    ChatSection,
    InputMessage
}
}
</script>