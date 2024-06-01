import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonContainerProps} from './container.entity';

const ButtonContainerComponent = ({
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
  activeOpacity,
  zIndex,
  opacity,
  onPress,
  disabled,
  borderStyle,
}: ButtonContainerProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity ? activeOpacity : 0.5}
      style={[
        {
          flex,
          flexDirection,
          alignSelf,
          width,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomWidth,
          flexWrap,
          height,
          backgroundColor,
          marginBottom,
          marginTop,
          marginLeft,
          marginRight,
          borderRadius,
          borderWidth,
          borderColor,
          marginHorizontal,
          marginVertical,
          margin,
          alignItems,
          justifyContent,
          padding,
          position,
          bottom,
          left,
          right,
          top,
          paddingVertical,
          paddingHorizontal,
          paddingLeft,
          paddingBottom,
          paddingRight,
          paddingTop,
          zIndex,
          opacity,
          overflow,
          borderStyle,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonContainerComponent;
