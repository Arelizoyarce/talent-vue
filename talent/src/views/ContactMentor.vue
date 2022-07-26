<template>
    <div class="d-flex flex-row-reverse justify-space-around">
        <MentorsSection @sendMentor="receivedMentor"></MentorsSection>
        <ChatSection :mentor="mentorName" ref="ChatSection"></ChatSection>
    </div>
</template>

<script>
import MentorsSection from "../components/MentorsSection.vue";
import ChatSection from "../components/ChatSection.vue"
export default {
    name: 'ContactMentor',
    components: {
        MentorsSection,
        ChatSection,
    },
    data() {
        return({
            mentorName: String
        })
},
    methods: {
        receivedMentor(n) {
            this.mentorName= n
            this.$refs.ChatSection.printMenssage()
        }
    }
}
</script>