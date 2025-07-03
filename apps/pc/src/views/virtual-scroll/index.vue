<template>
    <p>虚拟列表</p>
    <RecycleScroller
        class="scroller"
        :items="list"
        :item-size="32"
        key-field="id"
        v-slot="{ item }"
    >
        <div class="user">
        {{ item.name }}
        </div>
  </RecycleScroller>
</template>

<script setup>
import { ref } from 'vue'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const list = ref([...Array(100000).keys()].map(item => ({
    id: item,
    name: `item ${item}`
})))
</script>

<style scoped>
.scroller {
    height: 300px;
}
</style>