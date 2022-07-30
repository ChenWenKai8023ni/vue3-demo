/*
 * @Date: 2022-07-30 11:17:46
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 16:01:48
 * @FilePath: \vite-vue3-js\src\store\index.js
 */
import { acceptHMRUpdate, defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 0,
        }
    },
    //state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
    },
})
//热更新
if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))