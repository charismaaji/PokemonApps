/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {
  DetailPokemonEntity,
  PokemonChartStatsEntity,
} from '../../../data/entity';
import {getDetailPokemon} from '../detail.action';
import {colors} from '../../../utils';

export const useDetailPokemon = ({
  pokemonId,
  setListAbilityId,
}: {
  pokemonId?: string;
  setListAbilityId: (listId: number[]) => void;
}) => {
  const [detailPokemon, setDetailPokemon] =
    useState<DetailPokemonEntity | null>(null);
  const [pokemonChartStats, setPokemonChartStats] = useState<
    PokemonChartStatsEntity[]
  >([]);
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleGetPokemonDetail = async () => {
      if (!pokemonId) {
        return;
      }
      const result = await getDetailPokemon({pokemonId});

      if (!result.data) {
        return;
      }

      const newPokemonChartStats: PokemonChartStatsEntity[] =
        result.data?.stats.map(val => {
          return {
            label: val.stat.name,
            value: val.base_stat,
            frontColor: colors.primary,
          };
        });

      setDetailPokemon(result.data);
      setPokemonChartStats(newPokemonChartStats);

      const listAbilityId: number[] = result.data.abilities.map(val => {
        const urlParts = val.ability.url.split('/').filter(Boolean);
        const id = urlParts.pop();

        return id ? Number(id) : 0;
      });

      setListAbilityId([...listAbilityId]);
    };

    handleGetPokemonDetail();
  }, [pokemonId]);

  return {
    detailPokemon,
    pokemonChartStats,
    imageLoading,
    setImageLoading,
  };
};
