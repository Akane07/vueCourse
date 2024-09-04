<template>
    <div class="courseWrapper">
        <div class="image"><img src="../../../assets/imageCourse.png" alt=""></div>
        <div class="decription">
            <div class="name">
                {{ course.title }}
            </div>
            <div class="stats">
                <p class="redirect" @click="redirect">(Ссылка)</p>
                <div class="stars">
                    <img src="../../../assets/star.svg">
                    {{ course.rate.stars }} ({{ course.rate.feedbacks }} отзывов)
                </div>
            </div>
            <div class="horisontal"></div>
            <div class="info">
                <div class="length">
                    <img src="../../../assets/clock.svg">
                    {{ course.length }} Минут
                </div>
                <div class="module">
                    <img src="../../../assets/stack.svg">
                    {{ course.description.blocks_count }} Модуль
                </div>
                <img src="../../../assets/circle.svg">
                <div class="level">
                    <!-- <img :src="courseLevel(course.description.level)"> -->
                    Уровень
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    course: Object
})

</script>

<style scoped>
.courseWrapper{
    width: 376px;
    height: 397px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    user-select: none;
    cursor: pointer;
}
.image img{
    border-start-start-radius: 16px;
    border-start-end-radius: 16px;
}
.decription {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 24px;
}
.name {
    font-size: 20px;
    font-weight: 500;
    color: #252525;
}
.stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #7C7C7C;
}
.redirect {
    text-decoration: underline;
}
.stars {
    display: flex;
    gap: 4px;
    align-items: center;
}
.info {
    display: flex;
    justify-content: space-between;
    align-items: center;            
}
.length, .module, .level {
    display: flex;
    align-items: center;
    gap: 4px;
}
.horisontal {
    width: 100%;
    height: 1.5px;
    background: #E0E0E0;
}
            
        
        
    

</style>