<template>
    <h1>子组件</h1>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, nextTick } from 'vue';

onBeforeMount(() => {
    console.log('子组件onBeforeMount');
    throw new Error('子组件error');
});

onMounted(() => {
    console.log('子组件onMounted');
    throw new Error('子组件error-异步');
});
</script>