<template>
  <div class="bg-white p-2 m-2 rounded-xs">
    <img :src="film.Poster" :alt="film.Title" />
    <h3>{{ film.Title }}</h3>
    <p>{{ film.Year }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Film } from './../types';

const film = defineProps<Film>()
</script>

<style scoped>
</style>
