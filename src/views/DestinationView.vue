<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import dades from "@/data.json";
import ExperienceCard from '@/components/ExperienceCard.vue';


const destinations = reactive(dades);

const route = useRoute();
const router = useRouter();

let destinationId = ref(Number(route.params.id));

watch(route, () => {
    destinationId.value = Number(route.params.id);
}
)
</script>

<template>
    <main class="w-100 px-5 py-3 d-flex flex-column gap-1 align-items-left justify-content-start">
        <h1>{{ destinations.destinations[destinationId - 1].name }}</h1>
        <div>
            <button @click="router.back()">go back</button>
        </div>

        <section class="d-flex gap-5 align-items-center">
            <div class="img-destination-box">
                <img :src="`/${destinations.destinations[destinationId - 1].image}`" alt="destination image">
            </div>
            <div class="destination-description-box">
                <p>
                    {{ destinations.destinations[destinationId - 1].description }}
                </p>
            </div>
        </section>
        <section class="my-4">
            <h2>Top experiences in {{ destinations.destinations[destinationId - 1].name }}</h2>
            <section class="d-flex gap-2">
                <!-- <article v-for="experience in destinations.destinations[destinationId - 1].experiences">
                    <div class="img-experience-box">
                        <img :src="`/public/${experience.image}`" alt="Experience image">
                        <p>{{ experience.name }}</p>
                    </div>
                </article> -->
                <RouterLink v-for="experience in destinations.destinations[destinationId - 1].experiences"
                    :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
                    <ExperienceCard :experience="experience"></ExperienceCard>
                </RouterLink>
            </section>
        </section>
        <section class="d-flex flex-column gap-2 w-100">
            <RouterView></RouterView>
        </section>
    </main>
</template>
<style scoped>
h1,
h2 {
    font-weight: bold;
}

.destination-description-box p {
    width: 80ch;
}

.img-destination-box {
    overflow: hidden;
    width: 30%;
    border: 6px solid rgb(255, 255, 255);
    box-shadow: 0px 1px 11px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 11px 0px rgba(0, 0, 0, 0.75);
}

.img-experience-box {
    position: relative;
    overflow: hidden;
    width: 75%;
}

.img-experience-box p {
    position: absolute;
    bottom: -15px;
    background-color: #2C3E50;
    color: white;
    width: 100%;
    text-align: center;
    font-weight: bold;

}
</style>