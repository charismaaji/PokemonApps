import {PayloadAction} from '@reduxjs/toolkit';
import {BasePokemonEntity, PokemonState} from '../entity';

export default {
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
};
