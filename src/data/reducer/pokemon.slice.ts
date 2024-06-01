import {createSlice} from '@reduxjs/toolkit';
import {PokemonState} from '../entity';
import pokemonReducer from './pokemon.reducer';

export const initialState: PokemonState = {
  listPokemon: [],
  currentPokemonId: '0',
};

const reportSlice = createSlice({
  name: 'front-office',
  initialState: initialState,
  reducers: pokemonReducer,
});

export const {actions, reducer} = reportSlice;
