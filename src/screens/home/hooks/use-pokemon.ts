import {useCallback, useEffect, useState} from 'react';
import {getListPokemon} from '../home.action';
import {Alert} from 'react-native';

export const usePokemon = () => {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const handleNextPage = useCallback(() => {
    if (!loading) {
      setOffset(prev => prev + 25);
    }
  }, [loading]);

  useEffect(() => {
    const handleGetListPokemon = async () => {
      setLoading(true);

      const result = await getListPokemon({offset});

      setLoading(false);

      if (!result.success) {
        return Alert.alert('Error', 'Failed to get list pokemon');
      }
    };

    handleGetListPokemon();
  }, [offset]);

  return {
    loading,
    handleNextPage,
  };
};
