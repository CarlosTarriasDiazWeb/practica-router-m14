<script setup lang="ts">
import { useRoute } from 'vue-router';
import dades from "@/data.json";
import { computed, reactive } from 'vue';

const route = useRoute();
const destinations: any = reactive(dades);
const experience = computed(() => destinations.destinations.experiences.find((experience: any) => experience.slug = route.params.experienceSlug));

</script>
<template>
    <h3>{{ route.params.experienceSlug }}</h3>
    <!-- <div class="img-destination-box">
        <img :src="`/${experience.image}`" alt="experience image">
    </div>
    <div class="destination-description-box">
        <p>
            {{ experience.description }}
        </p>
    </div> -->
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
    width: 400px;
    height: 400px;
}
</style>