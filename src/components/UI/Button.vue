<template>
    <button :class="transparent? 'transparent' : 'green'">Регистрация<slot></slot></button>
</template>

<script setup>
const props = defineProps({
    transparent: Boolean
})
</script>

<style scoped>
button {
    padding: 16px 32px;
    border: 1px solid #32BCA3;
    border-radius: 20px;
    font-size: 16px;
}

.green{
    color: #FFFFFF;
    background-color: #32BCA3;
}

.transparent{
    color: #32BCA3;
    background-color: #FFFFFF;
}
</style>