import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParamList} from '../../../routes/routes.type';
import {useCallback} from 'react';

export const useDetailTab = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return {
    handleGoBack,
  };
};
