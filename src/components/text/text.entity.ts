import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export type textVariant =
  | 'normal'
  | 'normal semi bold'
  | 'normal bold'
  | 'small'
  | 'small bold'
  | 'big'
  | 'big bold'
  | 'semi big'
  | 'semi big bold'
  | 'very small'
  | 'very small bold'
  | 'very big'
  | 'very big bold';

export interface TextProps {
  children: ReactNode;
  variant?: textVariant;
  style?: StyleProp<TextStyle>;
  color?: string;
  numberOfLines?: number;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify';
  marginBottom?: number;
  marginTop?: number;
  marginRight?: number;
  marginLeft?: number;
  width?: number;
  backgroundColor?: string;
}

export interface TextSmallBigProps {
  smallText: string;
  bigText: string;
  noMargin?: boolean;
  horizontal?: boolean;
}
