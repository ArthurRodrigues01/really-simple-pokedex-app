export type PokemonType = {
  slot: number, 
  type: NamedAPIResource
}

export type PokedexEntry = { 
  flavor_text: string,
  language: NamedAPIResource,
  version: NamedAPIResource
}

export type PokemonData = {
  id: number,
  gen: number,
  name: string,
  weight: number,
  height: number,
  types: string[],
  spriteSrc: string,
  pokedexEntries: PokedexEntry[],
  maxNumberOfPokemons: number
}

export type PokemonPreviewData = {
  id: number,
  name: string
}

export type PokemonFilteringOptions = {
  gen?: number,
  types?: string[]
}

export type NamedAPIResource = {
  name: string,
  url: string
}

export type NamedAPIResourceList = {
  count: number,
  next: string | null,
  previous: string | null,
  results: NamedAPIResource[]
}

export type Name = {
  name: string,
  language: NamedAPIResource
}

export type Generation = {
  id: number,
  name: string,
  abilities: NamedAPIResource[],
  names: Name[],
  main_region: NamedAPIResource,
  moves: NamedAPIResource[],
  pokemon_species: NamedAPIResource[],
  types: NamedAPIResource[],
  version_groups: NamedAPIResource[]
}

export type PokemonsPreviewDataStatus = {
  previewData: PokemonPreviewData[] | null,
  isLoading: boolean
}

