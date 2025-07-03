<template>
    <div>
        <div style="border: 1px solid #000; padding: 10px; margin-bottom: 10px;">
            <span>shallowRef: </span>
            <span>{{ count.count }}</span>
            <div>
                <button @click="shallowRefHandle">加1</button>
                <button @click="shallowRefForceUpdate">强加1</button>
            </div>
        </div>
    </div>

    <div style="border: 1px solid #000; padding: 10px; margin-bottom: 10px;">
        <span>shallowReactive: </span>
        <span>num: {{ num.num }}</span>
        <span>nested.bar: {{ num.nested.bar }}</span>
        <div>
            <button @click="reactiveHandle">加1</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { shallowRef, triggerRef, shallowReactive } from 'vue';

const count = shallowRef({ count: 0 });
const num = shallowReactive({ num: 0, nested: {
    bar: 0
  } });

const shallowRefHandle = () => {
    count.value.count++;
}

const shallowRefForceUpdate = () => {
    count.value.count++;
    triggerRef(count);
}

const reactiveHandle = () => {
    num.num++;
    num.nested.bar++;
}
</script>