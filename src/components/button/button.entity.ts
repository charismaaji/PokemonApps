import {ButtonContainerProps} from '../container/container.entity';

export interface ButtonProps extends ButtonContainerProps {
  title?: string;
  textColor?: string;
  loading?: boolean;
  activeOpacity?: number;
  paddingHorizontal?: number;
}
