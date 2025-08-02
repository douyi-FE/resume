<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="handleMenuClick" :items="menuList">
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import asyncModules from '@/asyncModules';
const router = useRouter();
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
const handleMenuClick = (e: any) => {
  router.push('/other');
};

const menuList = ref<any[]>([]);

onMounted(() => {
  fetch('/api/menus.json')
    .then((res) => res.json())
    .then((data) => {
      menuList.value = data.data;
      (data.data as Array<any>).forEach((item) => {
        router.addRoute({
          path: item.path,
          component: asyncModules[item.componentPath],
        });
      });
    });
});
</script>

<style scoped lang="less">
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
