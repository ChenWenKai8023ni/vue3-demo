<!--
 * @Date: 2022-07-23 14:46:51
 * @LastEditors: chenwk
 * @LastEditTime: 2022-07-30 14:31:52
 * @FilePath: \vite-vue3-js\src\App.vue
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>
<template>
  <div>
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/404">404</router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" :key="$route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
</style>
