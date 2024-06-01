import {AxiosResponse} from 'axios';
import {instance} from '../../utils';
import {DetailPokemonEntity} from '../../data/entity';

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
