<script setup lang="ts">
import FilmCard from './components/FilmCard.vue'
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
      <div v-for="film in films" :key="film.Id">
        <FilmCard :Id="film.Id" :Title="film.Title" :Type="film.Type" :Year="film.Year" :Poster="film.Poster" />
      </div>
    </section>

  </main>
</template>

<style scoped>
@import "tailwindcss";

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
