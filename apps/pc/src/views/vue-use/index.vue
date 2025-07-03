<template>
    <OnClickOutside @trigger="handleTrigger">
        <div class="box" ref="box">
            <p>x: {{ x }}</p>
            <p>y: {{ y }}</p>
        </div>
    </OnClickOutside>
    <div ref="el" :style="style" style="position: fixed">
        Drag me! I am at {{ x }}, {{ y }}
    </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { throttleFilter, useMouse, useDraggable } from '@vueuse/core';
import { OnClickOutside } from '@vueuse/components'

const box = useTemplateRef<HTMLDivElement>('el');
const { x, y } = useMouse({ eventFilter: throttleFilter(1000) });
const { x: x2, y: y2, style } = useDraggable(box, {
    initialValue: { x: 0, y: 0 }
});
const handleTrigger = () => {
    console.log('trigger');
}
</script>

<style lang="less" scoped>
.box {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
}
</style>