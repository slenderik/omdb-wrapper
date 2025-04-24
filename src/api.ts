import axios from "axios";
import type { SearchResults } from "./types";


const OMDBinstance = axios.create({
  baseURL: "https://www.omdbapi.com/"
})

export async function searchFilms (searchQuery: string, page: number = 1): Promise<SearchResults> {
  const OMDbAPIKey = import.meta.env.VITE_OMDB_KEY
  const response = await OMDBinstance.get<SearchResults>("", { params: { apiKey: OMDbAPIKey, s: searchQuery, page: 1 }})
  console.log(response)
  console.log(response.data.Response)
  console.log(response.data)

  return response.data
}
