/*
 * @Date: 2022-07-30 11:17:55
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 14:32:18
 * @FilePath: \vite-vue3-js\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const NotFound = () => import('@/views/error/404.vue')
const Home = () => import('@/views/home/index.vue')
const routes = [
   { path: '/', name: 'Home', component: Home },
   //全局404
   { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
]
const scrollBehavior = (to, from, savedPosition) => {
   // 始终滚动到顶部
   return { top: 0 }
}
const router = createRouter({
   history: createWebHashHistory(),//哈希路由
   routes,
   scrollBehavior
})
export default router