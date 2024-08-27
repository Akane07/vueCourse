<template>
    <div @click="checkState" :class="transparentState? 'transparent' : 'green'" ><img src="../../assets/Vector.svg" alt="" ></div>
</template>



<script setup>
import { ref } from 'vue'
const transparentState = ref(true)

function checkState() {
    transparentState.value = !transparentState.value
    emits("checks", transparentState.value)
    
}

const emits = defineEmits([
    'checks'
])
</script>

<style scoped>
div{
    padding: 10px;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E0E0E0;
}

.green{
    background-color: #32BCA3;
    border: #32BCA3;
}
.transparent {
    border: 1px solid #E0E0E0;
}
</style>