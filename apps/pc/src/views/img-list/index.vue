<template>
    <h1>{{ appName }}</h1>
    <div id="img_list" class="img-list">
        <img v-for="img in imgList" alt="img" v-lazy="{ imgSrc: img, tagetId: 'img_list' }" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { inject } from 'vue';

const imgList = ref([
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
]);
const appName = inject('appName');
</script>

<style scoped lang="less">
.img-list {
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    img {
        display: inline-block;
        width: 100%;
        height: 100px;
        min-height: 100px;
        object-fit: none;
    }
}
</style>