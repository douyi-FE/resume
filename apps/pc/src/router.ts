import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('@/views/home/home.vue') },
    { path: '/virtual-scroll', component: () => import('@/views/virtual-scroll/index.vue') },
    { path: '/assist', component: () => import('@/views/assist/index.vue') },
    { path: '/proxy', component: () => import('@/views/proxy/index.vue') },
    { path: '/async-comp', component: () => import('@/views/async-comp/index.vue') },
    { path: '/img-list', component: () => import('@/views/img-list/index.vue') },
    { path: '/slot', component: () => import('@/views/slot/index.vue') },
    { path: '/keep-live', component: () => import('@/views/keep-live/index.vue') },
    { path: '/vue-use', component: () => import('@/views/vue-use/index.vue') },
    { path: '/lifecycle', component: () => import('@/views/lifecycle/index.vue') },
    { path: '/responsive', component: () => import('@/views/responsive/index.vue') },
  ]
});

export default router;