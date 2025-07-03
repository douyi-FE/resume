<template>
    <h1>slot children</h1>
    <slot name="title"></slot>
    <slot :count="19">
        <p>slot default content-默认</p>
    </slot>
    <div>
        <p>列表</p>
        <ul>
            <li v-for="item in list" :key="item.name">
                <slot name="item" v-bind="item"></slot>
            </li>
        </ul>
    </div>
    <div v-if="$slots.footer" class="slot-footer">
        <slot name="footer">
            <p>slot footer default content</p>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const list = ref([]);

onMounted(() => {
    fetch('https://pokeapi.co/api/v2/language/1/').then(res => res.json()).then(data => {
        console.log('data', data.names);
        list.value = data.names;
    })
})
</script>

<style scoped lang="less">
.slot-footer {
    border: 1px solid #000;
}
</style>