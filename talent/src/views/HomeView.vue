<template>
<v-content>
    <CoursesSection></CoursesSection>
    <ToolsSection></ToolsSection>
</v-content>
</template>

<script>
import ToolsSection from "../components/ToolsSection.vue";
import CoursesSection from "../components/CoursesSection.vue";

export default {
  components: {
    ToolsSection,
    CoursesSection
},
}
</script>