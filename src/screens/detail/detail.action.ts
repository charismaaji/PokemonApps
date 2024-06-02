import {AxiosResponse} from 'axios';
import {dispatchable, instance} from '../../utils';
import {DetailPokemonEntity} from '../../data/entity';
import {Dispatch} from '@reduxjs/toolkit';
import {ActionEntity} from '../../data';
import {actions as pokemonAction} from '../../data/reducer/pokemon.slice';
import {removeSelectedPokemon, setShowCompare} from '../compare/compare.action';

export const getDetailPokemon = async ({pokemonId}: {pokemonId: string}) => {
  try {
    const result: AxiosResponse<DetailPokemonEntity> = await instance.get(
      `/pokemon/${pokemonId}`,
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

export const getAbilitiesPokemon = async ({
  listAbilityId,
}: {
  listAbilityId: number[];
}) => {
  try {
    const results = [];

    for (const id of listAbilityId) {
      try {
        const response = await instance.get(`/ability/${id}`);
        results.push(response.data);
      } catch (error) {
        // Handle errors here if the request fails
        console.error('Error fetching data for ID:', id, error);
      }
    }

    const filteredResult = results.filter(val => {
      return {
        name: val.name,
        effect_entries: val.effect_entries,
      };
    });

    return {
      success: true,
      data: filteredResult,
    };
  } catch (error) {
    return {
      success: false,
      data: [],
    };
  }
};

export const setCurrentPokemonId = dispatchable(
  ({
    pokemonId,
    queueNumber,
  }: {
    pokemonId?: string | number;
    queueNumber: number;
  }) => {
    return async (dispatch: Dispatch<ActionEntity>) => {
      try {
        const result: AxiosResponse<DetailPokemonEntity> = await instance.get(
          `/pokemon/${pokemonId}`,
        );

        await setShowCompare(false);

        if (queueNumber === 2) {
          removeSelectedPokemon(2);
        }

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
