import {BasePokemonEntity} from '../../data/entity';

export interface CardDataPokemonComponentProps {
  name: string;
  height: number;
  weight: number;
  types: string;
}

export interface CardPokemonComponentProps extends BasePokemonEntity {
  onPress?: () => void;
}
