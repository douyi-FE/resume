<template>
    <button class="ui-button" :class="classes">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

defineOptions({
    name: 'UiButton',
})

const props = defineProps<{
    type?: 'primary' | 'default';
}>();

const classes = computed(() => {    
    return {
        'ui-button-primary': props.type === 'primary',
        'ui-button-default': props.type === 'default',
    }
})
</script>

<style scoped lang="less">
.ui-button {
    background-color: var(--primary-color);
    color: #f00;
    border-radius: var(--ui-border-radius);
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}
</style>