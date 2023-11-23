<script setup lang="ts">
import { useRoute } from 'vue-router';
import dades from "@/data.json";
import { computed, reactive, type ComputedRef } from 'vue';

const props = defineProps<{
    id: number,
    experienceSlug: string
}>()

interface Destination {
    name: string;
    slug: string;
    image: string;
    description: string;
    id: number
    experiences: Experience[]
}

interface Experience {
    name: string;
    slug: string;
    image: string;
    description: string;
}

const destination: Destination = reactive(dades.destinations[props.id - 1]);
const experience: ComputedRef<Experience | undefined> = computed(() => destination.experiences.find((experience: Experience) => experience.slug === props.experienceSlug));

</script>
<template>
    <h3>{{ experienceSlug }}</h3>
    <div class="img-destination-box">
        <img :src="`/${experience?.image}`" alt="experience image">
    </div>
    <div class="destination-description-box">
        <p>
            {{ experience?.description }}
        </p>
    </div>
</template>

<style scoped>
h3 {
    font-weight: bold;
}

.img-destination-box {
    width: 50%;
    overflow: hidden;
}

.img-destination-box>img {
    width: 600px;
    height: 400px;
}
</style>