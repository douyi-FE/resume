<template>
    <keep-alive include="compA,compB">
        <component :is="currentComp" />
      </keep-alive>
      <button @click="currentComp = CompA">组件A</button>
      <button @click="currentComp = CompB">组件B</button>
</template>

<script setup lang="ts">
import CompA from '@/views/keep-live/compA.vue';
import CompB from '@/views/keep-live/compB.vue';
import { shallowRef } from 'vue';

const currentComp = shallowRef(CompA);
</script>