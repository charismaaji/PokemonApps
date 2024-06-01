import {AxiosResponse} from 'axios';
import {dispatchable, instance} from '../../utils';
import {ResultListPokemonEntity} from './dto';
import {BasePokemonEntity} from '../../data/entity';
import {Dispatch} from '@reduxjs/toolkit';
import {ActionEntity} from '../../data';
import {actions as pokemonAction} from '../../data/reducer/pokemon.slice';

export const getListPokemon = dispatchable(({offset}: {offset: number}) => {
  return async (dispatch: Dispatch<ActionEntity>) => {
    try {
      const result: AxiosResponse<ResultListPokemonEntity> = await instance.get(
        `/pokemon/?offset=${offset}&limit=25`,
      );

      const {results, previous} = result.data;

      const newData: BasePokemonEntity[] = results.map(val => {
        const id = val.url.split('/').filter(Boolean).pop();
        return {
          id: id,
          name: val.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
        };
      });

      dispatch(
        pokemonAction['pokemon/set-list-pokemon']({
          data: newData,
          previous,
        }),
      );

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };
});

export const setCurrentPokemonId = dispatchable(
  ({pokemonId}: {pokemonId: string}) => {
    return async (dispatch: Dispatch<ActionEntity>) => {
      dispatch(pokemonAction['pokemon/set-current-pokemon-id'](pokemonId));
    };
  },
);
