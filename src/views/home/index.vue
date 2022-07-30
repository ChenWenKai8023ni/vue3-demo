<!--
 * @Date: 2022-07-30 11:17:04
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 13:36:41
 * @FilePath: \vite-vue3-js\src\views\home\index.vue
-->
<template>
    <div>
        <h1>
            index
        </h1>
        <HelloWorld msg="Vite + Vue" />
    </div>
</template>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
console.log(_VITE_APP_API_,'_VITE_APP_API_')

</script>
<style lang="scss" scoped>
h1 {
    color: $blue;
}
</style>