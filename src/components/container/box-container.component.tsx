import React from 'react';
import {View} from 'react-native';
import {ContainerProps} from './container.entity';

const BoxContainerComponent = ({
  flex,
  flexDirection,
  children,
  alignSelf,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  margin,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  position,
  alignItems,
  backgroundColor,
  borderRadius,
  bottom,
  height,
  justifyContent,
  left,
  right,
  top,
  width,
  borderWidth,
  borderBottomWidth,
  borderColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  flexWrap,
  overflow,
  style,
  borderStyle,
}: ContainerProps) => {
  return (
    <View
      style={[
        {
          flex,
          flexDirection,
          marginBottom,
          marginHorizontal,
          marginLeft,
          marginRight,
          marginTop,
          marginVertical,
          margin,
          padding,
          paddingHorizontal,
          paddingVertical,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          position,
          alignItems,
          backgroundColor,
          borderRadius,
          bottom,
          height,
          justifyContent,
          left,
          right,
          top,
          width,
          borderWidth,
          borderBottomWidth,
          borderColor,
          borderTopLeftRadius,
          borderTopRightRadius,
          flexWrap,
          overflow,
          alignSelf,
          borderStyle,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
export default BoxContainerComponent;
