<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import dades from "@/data.json";
import { ref } from 'vue';

const destinations = ref(dades.destinations);

</script>
<template>
    <ul class="w-100 d-flex flex-row justify-content-start align-items-center gap-3">
        <li class="home-link">
            <RouterLink to="/">Home</RouterLink>
        </li>
        <li v-for="destination in destinations" :key="destination.id">
            <RouterLink :to="{ name: 'destination', params: { id: destination.id } }">{{
                destination.name }}</RouterLink>
        </li>
    </ul>
</template>
<style scoped>
.home-link a {
    font-size: xx-large;
}

ul {
    height: 100%;
}

a {
    font-size: 1.5rem;
    color: antiquewhite;
    font-weight: bold;
}

a:active,
a:focus,
a:hover {
    text-decoration: underline;
    color: white;
}
</style>