<script setup lang="ts">
import axios from "axios";
import { ref, watch } from 'vue'

const films = ref([])
const loading = ref(false)
const searchQuery = ref('')

async function searchFilm (searchQuery: string) {
  const OMDbAPIKey = import.meta.env.VITE_OMDB_KEY
  const BASE_URL = "https://www.omdbapi.com/";
  const response = await fetch(BASE_URL)

}

watch(searchQuery, async (searchQuery) => {

})




const OMDBApiInstance  = axios.create({ baseURL: BASE_URL});


// export interface IMovie {
//     Poster: string
//     Title: string
//     Type: string
//     Year: string
//     Id: string
// }

// interface iSearchMoviRDO {
//     Response: string,
//     totalResults: string
//     Search: IMovie[]
// }

// export const OMDBApi = {
//     searchMovie: async ( title: string ) => {
//         const res = await OMDBApiInstance.get<iSearchMoviRDO>("", { params: {apikey: API_KEY, s: title}})
//         console.log(res);
//         return(res)
//     },
// };

</script>

<template>
  <header>
    <form >
      <input type="search" v-model="searchQuery" :disabled="loading"  placeholder="Search for a film" />
    </form>
  </header>

  <main>
    <section>
      <h2>Results</h2>
      <ul>
        <li v-for="film in films" :key="film.id">
          <img :src="film.poster" alt="film.title" />
          <h3>{{ film.title }}</h3>
          <p>{{ film.year }}</p>
        </li>
      </ul>
    </section>

  </main>
</template>

<style scoped>
@import "tailwindcss";
</style>
