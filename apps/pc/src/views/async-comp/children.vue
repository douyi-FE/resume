<template>
    <div v-bind="attrs">
        <h1>Children</h1>
    </div>
    <div>
        <GlobalComp />
        <ul>
            <li v-for="item in list" :key="item.name">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useAttrs } from 'vue';

const list = ref([]);
const attrs = useAttrs();
console.log(attrs);

onMounted(() => {
    fetch('https://pokeapi.co/api/v2/language/1/').then(res => res.json()).then(data => {
        list.value = data.names;
    })
})
</script>

<style scoped lang="less">

</style>