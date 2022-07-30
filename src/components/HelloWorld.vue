<!--
 * @Date: 2022-07-23 14:46:51
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 14:32:01
 * @FilePath: \vite-vue3-js\src\components\HelloWorld.vue
-->
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
