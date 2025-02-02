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
