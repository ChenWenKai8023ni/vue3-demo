/*
 * @Date: 2022-07-30 11:17:46
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 14:32:23
 * @FilePath: \vite-vue3-js\src\store\index.js
 */
import { defineStore } from 'pinia'
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