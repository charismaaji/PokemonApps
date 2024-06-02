import {Dispatch} from '@reduxjs/toolkit';
import {dispatchable, instance} from '../../utils';
import {ActionEntity} from '../../data';
import {actions as pokemonAction} from '../../data/reducer/pokemon.slice';
import {AxiosResponse} from 'axios';
import {DetailPokemonEntity} from '../../data/entity';

export const removeSelectedPokemon = dispatchable((queue: number) => {
  return async (dispatch: Dispatch<ActionEntity>) => {
    dispatch(
      pokemonAction['pokemon/set-selected-pokemon']({
        data: null,
        queue: queue,
      }),
    );
  };
});

export const setCurrentPokemonId = dispatchable(
  ({pokemonId, queueNumber}: {pokemonId: string; queueNumber: number}) => {
    return async (dispatch: Dispatch<ActionEntity>) => {
      try {
        const result: AxiosResponse<DetailPokemonEntity> = await instance.get(
          `/pokemon/${pokemonId}`,
        );

        dispatch(
          pokemonAction['pokemon/set-selected-pokemon']({
            data: result.data,
            queue: queueNumber,
          }),
        );

        return {
          success: true,
          data: result.data,
        };
      } catch (error) {
        return {
          success: false,
          data: null,
        };
      }
    };
  },
);
