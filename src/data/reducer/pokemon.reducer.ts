import {PayloadAction} from '@reduxjs/toolkit';
import {
  BasePokemonEntity,
  DetailPokemonEntity,
  PokemonState,
  PokemonStatsEntity,
} from '../entity';
import {colors, wp} from '../../utils';

export default {
  'pokemon/set-loading': (
    state: PokemonState,
    action: PayloadAction<boolean>,
  ) => {
    state.loading = action.payload;
  },
  'pokemon/set-show-compare': (
    state: PokemonState,
    action: PayloadAction<boolean>,
  ) => {
    state.showCompare = action.payload;
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
    const {queue, data} = action.payload;
    if (queue === 1) {
      state.selectedPokemon1 = data;

      if (!data) {
        return;
      }
      const statistic: PokemonStatsEntity[] = data?.stats.map(item => {
        return {
          frontColor: colors.statistic1,
          value: item.base_stat,
          label: item.stat.name,
          spacing: wp(6),
        };
      });
      if (state.comparedStatistic.length === 0) {
        state.comparedStatistic = statistic;
      } else {
        state.comparedStatistic = [...statistic, ...state.comparedStatistic];
      }
    } else {
      state.selectedPokemon2 = data;

      if (!data) {
        return;
      }
      const statistic: PokemonStatsEntity[] = data?.stats.map(item => {
        return {
          frontColor: colors.primary,
          value: item.base_stat,
        };
      });

      if (state.comparedStatistic.length === 0) {
        state.comparedStatistic = statistic;
      } else {
        state.comparedStatistic = [...state.comparedStatistic, ...statistic];
      }
    }
  },
  'pokemon/compare-data': (state: PokemonState) => {
    if (state.comparedStatistic.length === 12) {
      const newDataWithId: PokemonStatsEntity[] = state.comparedStatistic.map(
        (item, index) => {
          return {
            ...item,
            id: index + 1,
          };
        },
      );

      const firstData = newDataWithId.slice(0, 6);
      const secondData = newDataWithId.slice(6, 12);

      const newFirstData = firstData.map(item => {
        if (!item.id) {
          return item;
        }
        if (item.id === 1) {
          return item;
        }
        return {
          ...item,
          id: item.id * 2 - 1,
        };
      });

      const newSecondId = secondData.map((item, index) => {
        return {
          ...item,
          id: (index + 1) * 2,
        };
      });

      const sortedData = [...newFirstData, ...newSecondId].sort((a, b) =>
        a.id !== undefined && b.id !== undefined ? a.id - b.id : 0,
      );

      state.comparedStatistic = sortedData;
    }
  },
  'pokemon/remove-selected-pokemon': (
    state: PokemonState,
    action: PayloadAction<{data: DetailPokemonEntity | null; queue: number}>,
  ) => {
    const {queue, data} = action.payload;
    if (queue === 1) {
      state.selectedPokemon1 = data;

      const removeFirstPokemonStats = state.comparedStatistic.filter(item => {
        if (!item.id) {
          return;
        }
        return item.id % 2 === 0;
      });

      state.comparedStatistic = removeFirstPokemonStats;
    } else {
      state.selectedPokemon2 = data;

      const removeSecondPokemonStats = state.comparedStatistic.filter(item => {
        if (!item.id) {
          return;
        }
        return item.id % 2 !== 0;
      });

      state.comparedStatistic = removeSecondPokemonStats;
    }
  },
};
