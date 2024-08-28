<template>
    <div class="wrapperHead">
        <img src="../../assets/logo.svg" alt="">
        <ul class="list">
            <li class="list-child">
                Каталог курсов <img src="../../assets/CaretDown.svg" alt="">
            </li>
            <li>
                Избранное
            </li>
        </ul>
        <div class="buttons">
            <img src="../../assets/Search.svg" alt="">
            <Button :transparent = "true">Вход</Button>
            <Button>Регистрация</Button>
        </div>
    </div>
</template>

<script setup>
import Button from './Button.vue';
</script>

<style scoped>
.wrapperHead{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.list{
    display: flex;
    gap: 50px;
    color: #FFFFFF;
    list-style: none;

}
.list-child{
    display: flex;
    gap: 8px;
}
.buttons{
    display: flex;
    gap: 18px;
}
.buttons img{
    padding: 18px;
}
</style>