<!--
 * @Date: 2022-07-23 14:46:51
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 16:22:08
 * @FilePath: \vite-vue3-js\src\components\a-test.vue
-->
<script setup>
defineProps({
  msg: String
})

</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
