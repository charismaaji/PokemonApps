import {
  AnimatableNumericValue,
  DimensionValue,
  FlexAlignType,
} from 'react-native';

export interface ViewProps {
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  borderRadius?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingBottom?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  margin?: number;
  disabled?: boolean;
  position?: 'absolute' | 'relative';
  right?: number;
  left?: number;
  bottom?: number;
  top?: number;
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
  alignItems?: FlexAlignType;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  borderBottomWidth?: number;
  borderWidth?: number;
  borderColor?: string;
  zIndex?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  overflow?: 'visible' | 'hidden' | 'scroll';
  opacity?: AnimatableNumericValue;
  alignSelf?: FlexAlignType | 'auto';
  borderStyle?: 'solid' | 'dotted' | 'dashed';
}
