<template>
    <button :class="transparent? 'transparent' : 'green'"><slot></slot></button>
</template>

<script setup>
const props = defineProps({
    transparent: Boolean
})
</script>

<style scoped>
button {
    padding: 14px 32px;
    border: 1px solid #32BCA3;
    border-radius: 30px;
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