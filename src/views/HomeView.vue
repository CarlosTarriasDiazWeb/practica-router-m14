<script setup lang="ts">
import { ref } from 'vue';
import dades from "@/data.json";
const destinations = ref(dades.destinations);
</script>

<template>
  <main class="w-100 px-5 py-3 d-flex flex-column align-items-left justify-content-start">
    <h1>All destinations</h1>
    <section class="imgs-box d-flex gap-2">
      <article v-for="destination in destinations" :key="destination.id">
        <h2>
          <RouterLink :to="{ name: 'destination', params: { id: destination.id } }">{{
            destination.name }}</RouterLink>
        </h2>
        <div class="img-box">
          <img :src="destination.image" alt="country-img">
        </div>
      </article>
    </section>
  </main>
</template>
<style scoped>
h1,
h2 {
  font-weight: bold;
}

main {
  height: 2000px;
  background-color: rgb(248, 248, 248);
}


.imgs-box>* {
  width: 20%;
}

.imgs-box a {
  color: black;
}

.img-box {
  overflow: hidden;
}
</style>