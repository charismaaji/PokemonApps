import {Dispatch} from '@reduxjs/toolkit';
import {dispatchable, imageBaseUrl, instance} from '../utils';
import {ActionEntity} from '../data';
import {actions as pokemonAction} from '../data/reducer/pokemon.slice';
import {AxiosResponse} from 'axios';
import {BasePokemonEntity} from '../data/entity';
import {ResultListPokemonEntity} from '../screens/home/dto';

export const addPokemonOffset = dispatchable(() => {
  return async (dispatch: Dispatch<ActionEntity>) => {
    dispatch(pokemonAction['pokemon/add-pokemon-offset']());
  };
});

export const setLoading = dispatchable((load: boolean) => {
  return async (dispatch: Dispatch<ActionEntity>) => {
    dispatch(pokemonAction['pokemon/set-loading'](load));
  };
});

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
          image: imageBaseUrl(id),
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
