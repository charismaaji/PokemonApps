import {PayloadAction} from '@reduxjs/toolkit';
import {BasePokemonEntity, DetailPokemonEntity, PokemonState} from '../entity';

export default {
  'pokemon/set-loading': (
    state: PokemonState,
    action: PayloadAction<boolean>,
  ) => {
    state.loading = action.payload;
  },
  'pokemon/set-list-pokemon': (
    state: PokemonState,
    action: PayloadAction<{data: BasePokemonEntity[]; previous: string | null}>,
  ) => {
    const {data, previous} = action.payload;
    if (previous === null) {
      return {
        ...state,
        listPokemon: data,
      };
    }
    state.listPokemon = [...state.listPokemon, ...data];
  },
  'pokemon/set-current-pokemon-id': (
    state: PokemonState,
    action: PayloadAction<string>,
  ) => {
    state.currentPokemonId = action.payload;
  },
  'pokemon/add-pokemon-offset': (state: PokemonState) => {
    if (!state.loading) {
      state.listPokemonOffset = state.listPokemonOffset + 25;
    }
  },
  'pokemon/set-selected-pokemon': (
    state: PokemonState,
    action: PayloadAction<{data: DetailPokemonEntity | null; queue: number}>,
  ) => {
    if (action.payload.queue === 1) {
      state.selectedPokemon1 = action.payload.data;
    } else {
      state.selectedPokemon2 = action.payload.data;
    }
  },
};
