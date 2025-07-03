<template>
    <div>
        <button v-permission="['create']">create</button>
        <div v-click-out="handleClickOut" class="click-out-wrapper">
            <p>123</p>
        </div>
        <p ref="p1" v-highlight="{ color: 'red', bg: 'blue' }">123</p>
        <input type="text" v-focus />
        <Suspense>
            <template #fallback>
                <p>loading</p>
            </template>
            <Children name="walker" :age="18" />
        </Suspense>
        <!-- <Children /> -->
        <p>456</p>
    </div>
</template>

<script setup lang="ts">
import { Suspense, defineAsyncComponent, hydrateOnVisible, useTemplateRef, onMounted } from 'vue';
import AsyncLoading from './async-loading.vue';
import AsyncError from './async-error.vue';

const Children = defineAsyncComponent({
    hydrate: hydrateOnVisible(),
    loader: () => import('./children.vue').then(res => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(res as any);
            }, 5000);
        })
    }),
    loadingComponent: AsyncLoading,
    errorComponent: AsyncError,
    timeout: 10000,
    delay: 100,
    suspensible: true,
});

const p1 = useTemplateRef('p1');
const handleClickOut = () => {
    console.log('handleClickOut');
}

onMounted(() => {
    console.log('p1', p1.value);
})
</script>

<style scoped lang="less">
.click-out-wrapper {
    width: 200px;
    height: 200px;
    background-color: #f00;
}
</style>