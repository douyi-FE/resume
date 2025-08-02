<script setup>
import Layout from '@/components/basic/layout.vue';
import { onCLS, onLCP, onFCP, onTTFB, onINP } from 'web-vitals';

// 上报函数（上传到你的后端或第三方平台）
function sendToAnalytics(metric) {
  // 这里可以发送到你的后端、埋点系统、控制台等
  console.log(metric);
}

// 注册 web-vitals 采集
onCLS(sendToAnalytics);
onLCP(sendToAnalytics);
onFCP(sendToAnalytics);
onTTFB(sendToAnalytics);
onINP(sendToAnalytics);
</script>

<template>
  <main>
    <Layout />
  </main>
</template>
