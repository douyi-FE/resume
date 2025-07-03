<template>
    <div>
        <p>{{ inputVal }}</p>
        <button @click="inputVal = '123'">修改</button>
    </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const inputVal = ref('456')

onUnmounted(() => {
    console.log('组件B卸载')
})
</script>