<template>
    <div class="ui-list" :class="classes">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

defineOptions({
    name: 'UiList',
})

const { border } = defineProps<{
    border?: boolean;
}>();

const classes = computed(() => {
    return {
        'ui-list-border': border,
    }
})
</script>

<style scoped lang="less"></style>