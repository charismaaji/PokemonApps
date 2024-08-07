import {useMemo, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {hp} from '../../../utils';

export const useCompareModal = () => {
  const selectedPokemonModalRef = useRef<BottomSheet>(null);

  const [showModalPokemon, setShowModalPokemon] = useState(false);
  const [queueNumber, setQueueNumber] = useState(0);
  const [showCompare, setShowCompare] = useState(false);

  const snapPoints = useMemo(() => {
    return [hp(800), hp(800)];
  }, []);

  const handleCloseModal = () => {
    selectedPokemonModalRef.current?.close();
    setTimeout(() => {
      setShowModalPokemon(false);
    }, 250);
  };

  return {
    selectedPokemonModalRef,
    showModalPokemon,
    setShowModalPokemon,
    snapPoints,
    handleCloseModal,
    queueNumber,
    setQueueNumber,
    showCompare,
    setShowCompare,
  };
};
