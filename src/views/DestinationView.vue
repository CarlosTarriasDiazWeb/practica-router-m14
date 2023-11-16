<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import dades from "@/data.json";


const destinations = ref(dades.destinations);

const route = useRoute();
const destination: any | null = ref(null);

onMounted(() => {
    destination.value = dades.destinations.find(destination => destination.id === Number(route.params.id));
})

</script>

<template>
    <main class="w-100 px-5 py-3 d-flex flex-column align-items-left justify-content-start">
        <h1>{{ destination.name }}</h1>
        <div>
            <div></div>
            <div></div>
        </div>
    </main>
</template>
<style scoped></style>