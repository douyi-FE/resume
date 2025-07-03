<template>
    <div>{{ name }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { proxyObj, defineObject } from 'custom-utils';
const name = ref('张三');

onMounted(() => {
    const obj = [
        {
            name: '李四'
        }
    ]
    const proxyData = proxyObj(obj, (prop, value) => {
        console.log(prop, value);
        name.value = value;
    });
    proxyData[1] = {
        name: '王五'
    }

    const obj2: any = {}
    defineObject(obj2, 'name', (prop, value) => {
        console.log('defineObject发生改变', prop, value);
        name.value = value;
    });
    console.log(obj2.name);
    obj2.name = '王五';
});
</script>

<style scoped lang="scss">
</style>