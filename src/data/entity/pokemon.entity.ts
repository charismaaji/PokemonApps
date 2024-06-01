export interface BasePokemonEntity {
  id?: string;
  name: string;
  image: string;
}

export interface DetailPokemonEntity {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  id: number;
  name: string;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
}

export interface EffectEntryPokemonAbilityEntity {
  effect: string;
  language: {
    name: string;
  };
  short_effect: string;
}

export interface AbilitiesPokemonEntity {
  effect_entries: EffectEntryPokemonAbilityEntity[];
  name: string;
}

export interface PokemonChartStatsEntity {
  value: number;
  label: string;
  frontColor?: string;
}

export interface PokemonState {
  listPokemon: BasePokemonEntity[];
  currentPokemonId?: string;
}
