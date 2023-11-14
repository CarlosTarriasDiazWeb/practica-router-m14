<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <header class="px-2 py-3 w-100">
    <TheNavigation></TheNavigation>
  </header>
  <div class="box">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
header {
  background-color: rgb(44, 62, 80);
  height: 100px;
}

.box {
  margin: 0;
  width: 100%;
}
</style>
