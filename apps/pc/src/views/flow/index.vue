<template>
  <div class="flow-container" id="flow_container">
    <p>流程图</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Graph } from '@antv/x6';
import { register } from '@antv/x6-vue-shape';
import Node1 from './node-1.vue';

register({
  component: Node1,
  shape: 'custom-node-1',
  width: 100,
  height: 300,
  data: {
    name: '节点1',
  },
  attrs: {
    body: {
      stroke: '#8f8f8f',
    },
  },
});

onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('flow_container') as HTMLElement,
    width: 800,
    height: 600,
    background: {
      color: '#F2F7FA',
    },
  });

  graph.addNode({
    shape: 'custom-node-1',
    x: 100,
    y: 100,
  });
});
</script>

<style scoped lang="less">
.flow-container {
  height: 500px;
}
</style>
