<template>
<v-main>
    <CoursesSection></CoursesSection>
    <ToolsSection></ToolsSection>
</v-main>
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