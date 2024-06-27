import {
  Ability,
  AbilityEntry,
  ChainLink,
  Cries,
  EffectChange,
  EffectEntry,
  FormDescription,
  GameIndiceGen,
  GameIndiceVersion,
  Genera,
  HeldItem,
  Move,
  Name,
  NamedAPIResource,
  PalParkEncounter,
  PokedexEntry,
  PokedexNumber,
  PokemonType,
  Sprites,
  StatDetails,
  TypePokemon,
  TypeRelations,
  Variety
} from "./pokemon-related-types"

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



export type EvolutionChainPage = {
  baby_trigger_item: NamedAPIResource | null,
  chain: ChainLink
  id: number
}



export type PokemonFormPage = {
  form_name: string,
  form_names: Name[],
  form_order: number,
  id: number,
  is_battle_only: boolean,
  is_default: boolean,
  is_mega: boolean,
  name: string,
  names: Name[],
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



export type VersionGroupPage = {
  generation: NamedAPIResource,
  id: number,
  move_learn_methods: NamedAPIResource[],
  name: string,
  order: number,
  pokedexes: NamedAPIResource[],
  regions: NamedAPIResource[],
  versions: NamedAPIResource[]
}

export type AbilityPage = {
  effect_changes: EffectChange[],
  effect_entries: EffectEntry[],
  flavor_text_entries: AbilityEntry[],
  generation: NamedAPIResource,
  id: number,
  is_main_series: boolean,
  name: string,
  names: Name[],
  pokemon: {
    is_hidden: boolean,
    pokemon: NamedAPIResource,
    slot: number
  }[]
}