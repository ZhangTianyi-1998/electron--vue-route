import type {RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHashHistory} from 'vue-router';

let basicRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/index1.vue'),
    },
    {
        path: '/2',
        name: 'Home2',
        component: () => import('../views/index2.vue'),
    },
]

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
    // 创建一个 hash 历史记录。
    history: createWebHashHistory('/'),
    // 应该添加到路由的初始路由列表。
    routes: basicRoutes as unknown as RouteRecordRaw[],
    // 是否应该禁止尾部斜杠。默认为假
    strict: true,
    scrollBehavior: () => ({left: 0, top: 0}),
});
