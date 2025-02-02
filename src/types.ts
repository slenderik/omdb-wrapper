export interface Film {
  Id: string
  Title: string
  Type: string
  Year: string
  Poster: string
}

export interface SearchResults {
  Response: string
  totalResults: string
  Search: Film[]
}