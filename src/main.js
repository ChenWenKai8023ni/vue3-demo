/*
 * @Date: 2022-07-23 14:46:51
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 14:31:40
 * @FilePath: \vite-vue3-js\src\main.js
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/style/style.css'
import App from './App.vue'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia).use(router).mount('#app')

