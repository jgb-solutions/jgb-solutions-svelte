import type { SearchResults } from "$lib/interfaces"

export const INITIAL_STATE: SearchResults = {
  searchTerm: "",
  results: {
    tracks: [],
    artists: [],
    albums: [],
  },
}

export const searchState = $state(INITIAL_STATE)
