<template>
    <div class="courses">
        <Course v-for="course in allCourses.slice(0, 3)" :course="course"></Course>
    </div>
</template>

<script setup>
import Course from './Course.vue';




const props = defineProps({
    allCourses: Array
});

</script>

<style scoped>
.courses {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
}
</style>