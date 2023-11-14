<script setup lang="ts">
import { ref } from 'vue';
//import countries from './assets/users.json';


//const countryData = ref(countries);
</script>

<template>
  <main class="w-100 px-5 py-3 d-flex flex-column align-items-left justify-content-start">
    <h1>All destinations</h1>
    <section class="imgs-box">
      <article>
        <h2>
          <RouterLink to="/">Brazil</RouterLink>
        </h2>
        <div class="img-box">
          <img src="../assets/brazil.png" alt="country-img">
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

.imgs-box {
  display: flex;

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