import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParamList} from '../../../routes/routes.type';
import {useCallback, useState} from 'react';

export const useDetailTab = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>();

  const [loading, setLoading] = useState<boolean>(false);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return {
    handleGoBack,
    loading,
    setLoading,
  };
};
