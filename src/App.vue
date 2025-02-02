<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { searchFilms } from './api'
import type { Film } from './types'


const films = ref<Film[]>([])
const loading = ref(false) 
const searchQuery = ref<string>('')

onMounted(async () => {
  const response = await searchFilms("joker")
  films.value = response.Search
})

</script>
 
<template>
  <header>
    <form className="p-1 bg-gray-200">
      <input type="search" v-model="searchQuery" :disabled="loading"  placeholder="Search for a film"
        className="border border-black text-yellow"/>
    </form> 
  </header>

  <main>
    <section>
      <h2>Results</h2>
      <ul>
        <li v-for="film in films" :key="film.Id">
          <img :src="film.Poster" :alt="film.Title" />
          <h3>{{ film.Title }}</h3>
          <p>{{ film.Year }}</p>
        </li>
      </ul>
    </section>

  </main>
</template>

<style scoped>
@import "tailwindcss";
</style>
