import React, {useMemo} from 'react';
import {Text} from 'react-native';
import {TextProps} from './text.entity';
import {colors} from '../../utils';
import TextType from './text.enum';
import {styles} from './styles';

const TextComponent = ({
  children,
  color,
  style,
  variant,
  numberOfLines,
  textAlign,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  width,
  backgroundColor,
}: TextProps) => {
  const {
    VerySmall,
    VerySmallBold,
    Small,
    SmallBold,
    NormalSemiBold,
    NormalBold,
    SemiBig,
    SemiBigBold,
    Big,
    BigBold,
    VeryBig,
    VeryBigBold,
  } = TextType;

  const fontStyle = useMemo(() => {
    switch (variant) {
      case VerySmall:
        return styles.verySmall;
      case VerySmallBold:
        return styles.verySmallBold;
      case Small:
        return styles.small;
      case SmallBold:
        return styles.smallBold;
      case NormalSemiBold:
        return styles.normalSemiBold;
      case NormalBold:
        return styles.normalBold;
      case SemiBig:
        return styles.semiBig;
      case SemiBigBold:
        return styles.semiBigBold;
      case Big:
        return styles.big;
      case BigBold:
        return styles.bigBold;
      case VeryBig:
        return styles.veryBig;
      case VeryBigBold:
        return styles.veryBigBold;
      default:
        return styles.normal;
    }
  }, [
    variant,
    VerySmall,
    VerySmallBold,
    Small,
    SmallBold,
    NormalSemiBold,
    NormalBold,
    SemiBig,
    SemiBigBold,
    Big,
    BigBold,
    VeryBig,
    VeryBigBold,
  ]);

  const fontColor = color ? color : colors.textHE;

  return (
    <Text
      style={[
        fontStyle,
        {
          color: fontColor,
          textAlign,
          marginBottom,
          marginTop,
          marginLeft,
          marginRight,
          width,
          backgroundColor,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
export default TextComponent;
