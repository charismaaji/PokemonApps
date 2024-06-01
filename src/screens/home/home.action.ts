import {dispatchable} from '../../utils';
import {Dispatch} from '@reduxjs/toolkit';
import {ActionEntity} from '../../data';
import {actions as pokemonAction} from '../../data/reducer/pokemon.slice';

export const setCurrentPokemonId = dispatchable(
  ({pokemonId}: {pokemonId: string}) => {
    return async (dispatch: Dispatch<ActionEntity>) => {
      dispatch(pokemonAction['pokemon/set-current-pokemon-id'](pokemonId));
    };
  },
);
