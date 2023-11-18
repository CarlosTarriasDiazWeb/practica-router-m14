<script setup lang="ts">
import type { Experience } from "../interfaces/Experience";

const props = defineProps<{
    experience: Experience
}>()
</script>
<template>
    <article>
        <div class="img-experience-box">
            <img :src="`/${props.experience.image}`" alt="Experience image">
            <p>{{ props.experience.name }}</p>
        </div>
    </article>
</template>
<style scoped>
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