import {useCallback, useState} from 'react';
import {setCurrentPokemonId} from '../compare.action';
import {Alert} from 'react-native';

export const useCompare = () => {
  const [loading, setLoading] = useState(false);

  const handleSelectPokemon = useCallback(
    async ({
      pokemonId,
      queueNumber,
      closeModal,
    }: {
      pokemonId?: string;
      queueNumber: number;
      closeModal: () => void;
    }) => {
      if (!pokemonId) {
        return;
      }

      setLoading(true);
      const result = await setCurrentPokemonId({pokemonId, queueNumber});
      setLoading(false);

      if (!result.success) {
        return Alert.alert('Error', 'Failed to fetch data');
      }

      closeModal();
    },
    [],
  );

  return {
    handleSelectPokemon,
    loadingSelectPokemon: loading,
  };
};
