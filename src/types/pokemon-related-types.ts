export type PokemonType = {
  type: NamedAPIResource
  slot: number, 
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
  weaknesses: string[],
  spriteSrc: string,
  pokedexEntries: PokedexEntry[],
  maxNumberOfPokemons: number,
  varieties: Variety[],
  evolutionChain: ChainLink,
  isDefault: boolean,
  abilities: PokemonAbility[]
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

export type PokemonsPreviewDataStatus = {
  previewData: PokemonPreviewData[] | null,
  isLoading: boolean
}

export type FormDescription = {
  description: string,
  language: NamedAPIResource 
}

export type Genera = {
  genus: string,
  language: NamedAPIResource
}

export type PalParkEncounter = {
  area: NamedAPIResource,
  base_score: number,
  rate: number
}

export type PokedexNumber = {
  entry_number: number,
  pokedex: NamedAPIResource
}

export type Variety = {
  is_default: boolean,
  pokemon: NamedAPIResource
}

export type Ability = {
  ability: NamedAPIResource,
  is_hidden : boolean,
  slot: number
}

export type Cries = {
  latest: string,
  legacy: string | null
}

export type GameIndiceVersion = {
  game_index: number,
  version: NamedAPIResource
}

type VersionDetail = {
  rarity: number,
  version: NamedAPIResource
}

export type HeldItem = {
  item: NamedAPIResource,
  version_details: VersionDetail[]
}

type VersionGroupDetail = {
  level_learned_at: number,
  move_learn_method: NamedAPIResource,
  version_group: NamedAPIResource
}

export type Move = {
  move: NamedAPIResource,
  version_group_details: VersionGroupDetail[]
}

type OtherSprites = { 
  dream_world: {
    front_default: string,
    front_female: string | null
  },
  home: {
    front_default: string,
    front_female: string | null,
    front_shiny: string,
    front_shiny_female: string | null
  },
  "official-artwork": {
    front_default: string,
    front_shiny: string
  },
  showdown: {
    back_default: string,
    back_female: string | null,
    back_shiny: string,
    back_shiny_female: string | null,
    front_default: string,
    front_female: string | null,
    front_shiny: string,
    front_shiny_female: string | null
  }
}

export type Sprites = {
  back_default: string,
  back_female: string | null,
  back_shiny: string,
  back_shiny_female: string | null,
  front_default: string,
  front_female: string | null,
  front_shiny: string,
  front_shiny_female: string | null,
  other: OtherSprites,
  versions: {
    "generation-i": {
      "red-blue": {
        back_default: string | null,
        back_gray: string | null,
        back_transparent: string | null,
        front_default: string | null,
        front_gray: string | null,
        front_transparent: string | null
        },
      yellow: {
        back_default: string | null,
        back_gray: string | null,
        back_transparent: string | null,
        front_default: string | null,
        front_gray: string | null,
        front_transparent: string | null
      }
    },
    "generation-ii": {
      crystal: {
        back_default: string | null,
        back_shiny: string | null,
        back_shiny_transparent: string | null,
        back_transparent: string | null,
        front_default: string | null,
        front_shiny: string | null,
        front_shiny_transparent: string | null,
        front_transparent: string | null
        },
      gold: {
        back_default: string | null,
        back_shiny: string | null,
        front_default: string | null,
        front_shiny: string | null,
        front_transparent: string | null
        },
      silver: {
        back_default: string | null,
        back_shiny: string | null,
        front_default: string | null,
        front_shiny: string | null,
        front_transparent: string | null
      }
    },
    "generation-iii": {
      emerald: {
        front_default: string | null,
        front_shiny: string | null
      },
      "firered-leafgreen": {
        back_default: string | null,
        back_shiny: string | null,
        front_default: string | null,
        front_shiny: string | null
      },
      "ruby-sapphire": {
        back_default: string | null,
        back_shiny: string | null,
        front_default: string | null,
        front_shiny: string | null
      }
    },
    "generation-iv": {
      "diamond-pearl": {
        back_default: string | null,
        back_female: string | null,
        back_shiny: string | null,
        back_shiny_female: string | null,
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null
      },
      "heartgold-soulsilver": {
        back_default: string | null,
        back_female: string | null,
        back_shiny: string | null,
        back_shiny_female: string | null,
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null
      },
      platinum: {
        back_default: string | null,
        back_female: string | null,
        back_shiny: string | null,
        back_shiny_female: string | null,
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null
      }
    },
    "generation-v": {
      "black-white": {
        animated: {
          back_default: string | null,
          back_female: string | null,
          back_shiny: string | null,
          back_shiny_female: string | null,
          front_default: string | null,
          front_female: string | null,
          front_shiny: string | null,
          front_shiny_female: string | null
        },
        back_default: string | null,
        back_female: string | null,
        back_shiny: string | null,
        back_shiny_female: string | null,
        front_default: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null
      }
    },
    "generation-vi": {
      "omegaruby-alphasapphire": {
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null
      },
      "x-y": {
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null
      }        
    },
    "generation-vii": {
      icons: {
        front_default: string | null,
        front_female: string | null
      },
      "ultra-sun-ultra-moon": {
        "front_default": string | null,
        "front_female": string | null,
        "front_shiny": string | null,
        "front_shiny_female": string | null
      }
    },
    "generation-viii":  {
      icons: {
        front_default: string | null,
        front_female: string | null
      }
    }
 }
}

export type StatDetails = {
  base_stat: number,
  effort: number,
  stat: NamedAPIResource
}

export type GameIndiceGen = {
  game_index: number,
  generation: NamedAPIResource
}

export type TypeRelations = {
  double_damage_from: NamedAPIResource[],
  double_damage_to: NamedAPIResource[]
  half_damage_from: NamedAPIResource[]
  half_damage_to: NamedAPIResource[]
  no_damage_from: NamedAPIResource[]
  no_damage_to: NamedAPIResource[]
}

export type TypePokemon = {
  pokemon: NamedAPIResource,
  slot: number
}

export type ChainLink = {
  is_baby: boolean,
  species: NamedAPIResource,
  evolution_details: EvolutionDetail[]
  evolves_to: ChainLink[]
}

type EvolutionDetail = {
  item: NamedAPIResource | null,
  trigger: NamedAPIResource,
  gender: number | null,
  held_item: NamedAPIResource | null,
  known_move: NamedAPIResource | null,
  known_move_type: NamedAPIResource | null,
  location: NamedAPIResource | null,
  min_affection: number | null,
  min_beauty: number | null,
  min_happiness: number | null,
  min_level: number | null,
  needs_overworld_rain: boolean,
  party_species: NamedAPIResource | null,
  party_type: NamedAPIResource | null,
  relative_physical_stats: number | null,
  time_of_day: string,
  trade_species: NamedAPIResource | null,
  turn_upside_down: boolean
}

export type EffectEntry = {
  effect: string,
  language: NamedAPIResource,
  short_effect: string
}

type EffectChangeEntry = {
  effect: string,
  language: NamedAPIResource
}

export type EffectChange = {
  effect_entries:  EffectChangeEntry[],
  version_group: NamedAPIResource
}

export type AbilityEntry = {
  flavor_text: string,
  language: NamedAPIResource,
  version_group: NamedAPIResource
}

export type PokemonAbility = {
  name: string,
  description: string
}