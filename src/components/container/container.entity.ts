import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ViewProps} from './style.entity';

export interface ContainerProps extends ViewProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface RowContainerProps extends ContainerProps {
  rowCenterBetween?: boolean;
  rowCenterCenter?: boolean;
}

export interface SafeAreaViewProps {
  children: ReactNode;
}

export interface BottomContainerComponentProps {
  children: ReactNode;
}

export interface ButtonContainerProps extends ContainerProps {
  onPress?: () => void;
  activeOpacity?: number;
  disabled?: boolean;
}
