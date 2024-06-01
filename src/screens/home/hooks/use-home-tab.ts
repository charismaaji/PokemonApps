import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParamList} from '../../../routes/routes.type';
import {useCallback} from 'react';
import {setCurrentPokemonId} from '../home.action';

export const useHomeTab = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>();

  const navigateDetailPokemon = useCallback(
    async (pokemonId?: string) => {
      if (!pokemonId) {
        return;
      }
      await setCurrentPokemonId({pokemonId});
      navigation.navigate('DetailScreen');
    },
    [navigation],
  );
  return {
    navigateDetailPokemon,
  };
};
