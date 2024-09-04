import { defineStore } from "pinia";
import { computed, reactive, ref } from 'vue';
import courses from '../shared/courses.json'

export const useCoursesStore = defineStore('coursesStore', () => {
    const allCourses = ref([...courses]);
    const currentCourse = ref();
    const filters = ref();



    return {
        allCourses,

    }
})