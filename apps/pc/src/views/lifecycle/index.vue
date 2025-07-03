<template>
    <h1>生命周期</h1>
    <p ref="messageRef">{{ message }}</p>
    <button @click="handleClick">点击</button>
    <RouterLink to="/vue-use">vue-use</RouterLink>
    <Children />
</template>

<script setup lang="ts">
import {  onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref, useTemplateRef, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue';
import { RouterLink } from 'vue-router';
import Children from './children.vue';

const message = ref('123');
const messageRef = useTemplateRef<HTMLParagraphElement>('messageRef');

onBeforeMount(() => {
    console.log('onBeforeMount');
});

onMounted(() => {
    console.log('onMounted');
    throw new Error('error');
});

onBeforeUpdate(() => {
    console.log('onBeforeUpdate', messageRef.value?.textContent);
});

onUpdated(() => {
    console.log('onUpdated', messageRef.value?.textContent);
});

onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
});

onUnmounted(() => {
    console.log('onUnmounted');
});

onRenderTracked((e) => {
    console.log('onRenderTracked', e);
});

onRenderTriggered(e => {
    console.log('onRenderTriggered', e);
})

onErrorCaptured((error, instance, info) => {
    console.log('onErrorCaptured', error, instance, info);
    return false;
});

const handleClick = () => {
    message.value = '你好';
};
</script>