type PokemonType = {
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
  spriteSrc: string,
  pokedexEntries: PokedexEntry[],
  maxNumberOfPokemons: number,
  varieties: Variety[],
  evolutionChain: ChainLink,
  isDefault: boolean
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

export type GenPage = {
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

type FormDescription = {
  description: string,
  language: NamedAPIResource 
}

type Genera = {
  genus: string,
  language: NamedAPIResource
}

type PalParkEncounter = {
  area: NamedAPIResource,
  base_score: number,
  rate: number
}

type PokedexNumber = {
  entry_number: number,
  pokedex: NamedAPIResource
}

export type Variety = {
  is_default: boolean,
  pokemon: NamedAPIResource
}

export type SpeciesPage = {
  base_hapiness: number,
  capture_rate: number,
  color: NamedAPIResource,
  egg_groups: NamedAPIResource[],
  evolution_chain: { url: string },
  evolves_from_species: NamedAPIResource | null,
  flavor_text_entries: PokedexEntry[],
  form_description: FormDescription[],
  forms_switchable: boolean,
  gender_rate: number,
  genera: Genera[],
  generation: NamedAPIResource,
  growth_rate: NamedAPIResource,
  habitat: NamedAPIResource,
  has_gender_differences: boolean,
  hatch_counter: number,
  id: number,
  is_baby: boolean,
  is_legendary: boolean,
  is_mythical: boolean,
  name: string,
  names: Name[],
  order: number,
  pal_park_encounters: PalParkEncounter[],
  pokedex_numbers: PokedexNumber[],
  shape: NamedAPIResource,
  varieties: Variety[]
}

type Ability = {
  ability: NamedAPIResource,
  is_hidden : boolean,
  slot: number
}

type Cries = {
  latest: string,
  legacy: string | null
}

type GameIndiceVersion = {
  game_index: number,
  version: NamedAPIResource
}

type VersionDetail = {
  rarity: number,
  version: NamedAPIResource
}

type HeldItem = {
  item: NamedAPIResource,
  version_details: VersionDetail[]
}

type VersionGroupDetail = {
  level_learned_at: number,
  move_learn_method: NamedAPIResource,
  version_group: NamedAPIResource
}

type Move = {
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

type Sprites = {
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

type StatDetails = {
  base_stat: number,
  effort: number,
  stat: NamedAPIResource
}

export type PokemonPage = {
  abilities: Ability[]
  base_experience: number,
  cries: Cries,
  forms: NamedAPIResource[],
  game_indices: GameIndiceVersion[],
  height: number,
  held_items: HeldItem[]
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Move[],
  name: string,
  order: number,
  past_abilities: NamedAPIResource[],
  past_types: NamedAPIResource[],
  species: NamedAPIResource,
  sprites: Sprites,
  stats: StatDetails[],
  types: PokemonType[],
  weight: number
}


type GameIndiceGen = {
  game_index: number,
  generation: NamedAPIResource
}

type TypeRelations = {
  double_damage_from: NamedAPIResource[],
  double_damage_to: NamedAPIResource[]
  half_damage_from: NamedAPIResource[]
  half_damage_to: NamedAPIResource[]
  no_damage_from: NamedAPIResource[]
  no_damage_to: NamedAPIResource[]
}

type TypePokemon = {
  pokemon: NamedAPIResource,
  slot: number
}

export type PokemonTypePage = {
  damage_relations: TypeRelations,
  game_indices: GameIndiceGen[],
  generation: NamedAPIResource,
  id: number,
  move_damage_class: NamedAPIResource | null,
  moves: NamedAPIResource[],
  name: string,
  names: Name[],
  past_damage_relations: {
    damage_relations: TypeRelations,
    generation: NamedAPIResource
  }[],
  pokemon: TypePokemon[]
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

export type EvolutionChainPage = {
  baby_trigger_item: NamedAPIResource | null,
  chain: ChainLink
  id: number
}

export type PokemonFormPage = {
  form_name: string,
  form_names: {
    language: NamedAPIResource,
    name: string
  }[],
  form_order: number,
  id: number,
  is_battle_only: boolean,
  is_default: boolean,
  is_mega: boolean,
  name: string,
  names: {
    language: NamedAPIResource,
    name: string
  }[],
  order: number,
  pokemon: NamedAPIResource,
  sprites: {
    back_default: string | null,
    back_female: string | null,
    back_shiny: string | null,
    back_shiny_female: string | null,
    front_default: string | null,
    front_female: string | null,
    front_shiny: string | null,
    front_shiny_female: string | null
  },
  types: PokemonType[],
  version_group: NamedAPIResource
}