<template>
    <div class="wrapperSecondHome">
        <div class="content">
            <div class="textContent">
                <div class="leftText">
                    &mdash; Популярные курсы
                </div>
                <div class="rightText">
                    Мы предоставляем ряды бесплатных категорий, которые <br> помогут вам выбрать курсы, соответствующие вашим <br> знаниям. Списки курсов помогут вам начать с базовых основ и <br> помогут в продвижении.
                </div>
            </div>
            <div class="courseBlock">
                <SelectCourse @changeSelected="changeCourses"></SelectCourse>
                <CoursesBlock :allCourses = 'coursesStore.allCourses'></CoursesBlock>
            </div>
            <Button :transparent = 'true'>Больше курсов</Button>
        </div>
    </div>
</template>

<script setup>
import Button from '../UI/Button.vue';
import { ref } from 'vue';
import {useCoursesStore} from '../../stores/Courses';
import CoursesBlock from './SecondBlock/CoursesBlock.vue';
import SelectCourse from './SecondBlock/SelectCourse.vue';
const coursesStore = useCoursesStore()

const selectedCourseType = ref('all');

function changeCourses(item) {
    selectedCourseType.value = item;
}

</script>

<style scoped>
.wrapperSecondHome{
    width: 100%;
    height: 810px;
    background-color: #FFFFFF;
    padding: 30px 124px;
}
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 64px;
}
.textContent{
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 64px;
}
.leftText{
    font-size: 24px;
    color: #32BCA3;
}
.rightText{
    font-size: 18px;
    color: #7C7C7C;
}
.courseBlock{
    height: 469px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}
</style>