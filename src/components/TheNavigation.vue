<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <ul class="w-100 d-flex flex-row justify-content-start align-items-center gap-3">
        <li>
            <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="/">Home</RouterLink>
        </li>
    </ul>
</template>
<style scoped>
ul {
    height: 100%;
}

a {
    font-size: 1.5rem;
    color: antiquewhite;
    font-weight: bold;
}

a:active,
a:focus {
    text-decoration: underline;
    color: white;
}
</style>