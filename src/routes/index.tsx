import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteParamList} from './routes.type';
import {DetailScreen, SplashScreen} from '../screens';
import MainAppStack from './bottom-tab/main-app-stack';
import {Alert} from 'react-native';
import {useAppSelector} from '../data';
import {getListPokemon, setLoading} from './pokemon.action';

const Stack = createNativeStackNavigator<RouteParamList>();

const Routes = () => {
  const {listPokemonOffset} = useAppSelector(state => state.pokemon);

  useEffect(() => {
    const handleGetListPokemon = async () => {
      setLoading(true);

      const result = await getListPokemon({offset: listPokemonOffset});

      setLoading(false);

      if (!result.success) {
        return Alert.alert('Error', 'Failed to get list pokemon');
      }
    };

    handleGetListPokemon();
  }, [listPokemonOffset]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={SplashScreen} name="SplashScreen" />
      <Stack.Screen component={MainAppStack} name="MainAppStack" />
      <Stack.Screen component={DetailScreen} name="DetailScreen" />
    </Stack.Navigator>
  );
};

export default Routes;
