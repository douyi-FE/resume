<template>
    <Children>
        <template #title>
            <h3>slot title</h3>
        </template>
        <template #default="{ count }">
            <p>slot default content: {{ count }}</p>
        </template>
        <template #item="slotProps">
            <p>{{ slotProps.name }}</p>
        </template>
        <template #footer>
            <p>slot footer</p>
        </template>
    </Children>
</template>

<script setup lang="ts">
import Children from './children.vue';
</script>

<style scoped lang="less"></style>