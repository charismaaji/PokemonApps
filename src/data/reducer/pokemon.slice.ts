import {createSlice} from '@reduxjs/toolkit';
import {PokemonState} from '../entity';
import pokemonReducer from './pokemon.reducer';

export const initialState: PokemonState = {
  listPokemon: [],
  currentPokemonId: '0',
  listPokemonOffset: 0,
  loading: false,
  selectedPokemon1: null,
  selectedPokemon2: null,
  comparedStatistic: [],
  showCompare: false,
};

const reportSlice = createSlice({
  name: 'front-office',
  initialState: initialState,
  reducers: pokemonReducer,
});

export const {actions, reducer} = reportSlice;
