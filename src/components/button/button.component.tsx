import React, {useMemo} from 'react';
import {ActivityIndicator} from 'react-native';

// Helper
import {colors, wp} from '../../utils';

// Components
import {ButtonContainerComponent} from '../container';
import {TextComponent} from '../text';
import {ButtonProps} from './button.entity';

const ButtonComponent = ({
  title,
  disabled,
  onPress,
  backgroundColor,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  width,
  height,
  borderWidth,
  borderRadius,
  borderColor,
  textColor,
  loading,
  padding,
  paddingHorizontal,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  activeOpacity,
  alignSelf,
}: ButtonProps) => {
  const backgroundColorMemo = useMemo(() => {
    if (backgroundColor) {
      return backgroundColor;
    }
    return colors.primary;
  }, [backgroundColor]);

  return (
    <ButtonContainerComponent
      activeOpacity={activeOpacity ? activeOpacity : 0.7}
      marginVertical={marginVertical}
      backgroundColor={backgroundColorMemo}
      borderRadius={borderRadius ? borderRadius : wp(20)}
      alignItems="center"
      justifyContent="center"
      padding={padding}
      paddingHorizontal={paddingHorizontal}
      onPress={onPress}
      disabled={loading ? true : disabled}
      width={width}
      height={height ? height : wp(40)}
      borderWidth={borderWidth}
      borderColor={borderColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginHorizontal={marginHorizontal}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      zIndex={zIndex}
      opacity={disabled ? 0.5 : 1}
      alignSelf={alignSelf}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.textHE} />
      ) : (
        <TextComponent
          variant={'normal semi bold'}
          color={textColor ? textColor : colors.textHE}>
          {title}
        </TextComponent>
      )}
    </ButtonContainerComponent>
  );
};

export default ButtonComponent;
