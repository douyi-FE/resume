<template>
    <div class="child">
        <p>辅助-子组件</p>
        <p>未使用的props属性：</p>
        <ul>
            <li v-for="key in Object.keys(attrs)" :key="key">{{ key }}: {{ attrs[key] }}</li>
        </ul>
    </div>
</template>

<script setup>
import { useAttrs } from 'vue'

defineProps({
    name: {
        type: String,
        default: ''
    }
})
const attrs = useAttrs()

console.log(attrs)
</script>

<style scoped>
.child {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}
</style>