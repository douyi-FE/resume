<template>
    <div>
        <input type="text" v-model="inputVal" />
    </div>
</template>

<script setup>
import { onUnmounted, defineOptions, shallowRef } from 'vue'

const inputVal = shallowRef('')
defineOptions({
    name: 'compA'
})

onUnmounted(() => {
    console.log('组件A卸载')
})
</script>