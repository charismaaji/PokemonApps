import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {reducer as pokemonReducer} from './reducer/pokemon.slice';

const reducers = {
  pokemon: pokemonReducer,
};

export const store = configureStore({
  reducer: reducers,
  enhancers: [],
});

export type ActionEntity = {
  type: string;
  payload?: any;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
