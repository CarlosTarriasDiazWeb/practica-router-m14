<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <header class="px-2 py-3 w-100">
    <TheNavigation></TheNavigation>
  </header>
  <div class="box">
    <RouterView v-slot="{ Component }">
      <Transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </RouterView>
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

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate(-20%);
}
</style>
