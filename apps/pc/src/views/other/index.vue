<template>
    <div>
      <h1>{{ userStore.name }}</h1>
      <p class="bg-white dark:bg-black text-red-500 dark:text-white">{{ info.name }}</p>
      <button @click="changeName">修改名字第二部</button>
      <div></div>
      <button @click="removeFirst">删除第一个</button>
      <Child v-for="item in items" :label="item.text" />
      <Content :content="content" :title="title" v-memo="[title]" />
      <div></div>
      <Suspense>
        <Transition name="fade" mode="out-in">
          <AsyncComponent />
        </Transition>
        <template #fallback>
          <div>Loading...  pppp</div>
        </template>
      </Suspense>

      <Transition name="fade" mode="out-in">
        <p v-if="showProgram">123</p>
      </Transition>
      <button @click="showProgram = !showProgram">组件</button>
      <h2>版本号：{{ appVersion }}</h2>
      <a href="https://example.com/search?q=<script>alert('XSS')</script>" target="_blank">github</a>
      <UiButton>123</UiButton>
      <button @click="applyTheme('dark')">切换主题</button>
      <br/>
      <button @click="test">测试</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, shallowRef, defineAsyncComponent, onErrorCaptured } from 'vue'
  import { useUserStore } from '@/stores'
  import Child from './children.vue'
  import Content from './content.vue'
  import { applyTheme } from 'custom-theme'
  import { http } from 'custom-shared'
  const userStore = useUserStore()
  const appVersion = __APP_VERSION__;

  const AsyncComponent = defineAsyncComponent({
    loader: () => import('./async.vue'),
    loadingComponent: {
      template: '<div>Loading... yyyyyyyyyyyyyyyy</div>'
    },
    errorComponent: {
      template: '<div>Error</div>'
    },
    delay: 200,
    timeout: 3000
  })
  const items = ref([
    { text: '苹果', key: 1 },
    { text: '香蕉', key: 2 },
    { text: '橘子', key: 3 }
  ])
  const content = ref('123')
  const title = ref('标题')
  const info = shallowRef({
    name: '张三',
    age: 18
  })
  const showProgram = ref(false)

  function removeFirst() {
    items.value.shift()
  }

  function changeName() {
    info.value = {
      name: '李四',
      age: 20
    }
  }

  function test() {
    console.log(http);
    http.get('/api/test').then((res: any) => {
      console.log(res);
    });
  }

  onMounted(() => {
    content.value = '456'
    title.value = '标题2'
  })

  onErrorCaptured((error) => {
    console.log(error)
  })
  </script>

  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>