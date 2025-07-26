<template>
    <p>辅助功能</p>
    <Child name="张三" age="18" :list="[1, 2, 3]" />
    <UiButton type="primary">按钮</UiButton>
</template>

<script setup>
import Child from './child.vue'

</script>

<style scoped>

</style>