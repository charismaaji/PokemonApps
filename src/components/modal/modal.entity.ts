import {Ref} from 'react';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {BasePokemonEntity} from '../../data/entity';

export interface BottomSheetModalComponentProps {
  bottomSheetRef: Ref<BottomSheetMethods>;
  snapPoints: (string | number)[];
  backgroundClose: () => void;
  disabled?: boolean;
  data: BasePokemonEntity[];
  onSelectPokemon: (pokemon: BasePokemonEntity) => void;
  loadMore: () => void;
  loading: boolean;
  loadingSelectPokemon: boolean;
}
