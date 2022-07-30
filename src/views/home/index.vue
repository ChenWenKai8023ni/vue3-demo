<!--
 * @Date: 2022-07-30 11:17:04
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 16:22:15
 * @FilePath: \vite-vue3-js\src\views\home\index.vue
-->
<template>
    <div>
        <a-test :msg="useRoute().name" />
        <div>
            <p>count : {{ count }}</p>
            <button @click="increment">
                增加
            </button>
        </div>
        <div>
            <p> storeCount:{{ storeCount }}</p>
            <button @click="counter.increment">增加</button>
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia"
import { useCounterStore, } from '@/store/index.js'
const count = $ref(0)
const increment = () => { count++ }
const counter = useCounterStore()
const { count: storeCount } = storeToRefs(counter)
</script>
<style lang="scss" scoped>
h1 {
    color: $blue;
}
</style>