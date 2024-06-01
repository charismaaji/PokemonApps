import React, {useMemo} from 'react';
import {ImageSourcePropType, Platform} from 'react-native';

// Types
import {BottomTabProps} from './bottom-tab.type';

// Asset
import {
  IconCompare,
  IconCompareActive,
  IconHome,
  IconHomeActive,
} from '../../assets';

// Components
import {
  BoxContainerComponent,
  ButtonContainerComponent,
  ImageComponent,
  TextComponent,
} from '../../components';

// Utils
import {colors, wp} from '../../utils';

const Icon = ({
  image,
  isFocused,
  label,
}: {
  image: ImageSourcePropType;
  isFocused: boolean;
  label: string;
}) => {
  return (
    <BoxContainerComponent>
      <BoxContainerComponent alignItems="center" marginBottom={wp(5)}>
        <ImageComponent image={image} width={wp(24)} height={wp(24)} />
      </BoxContainerComponent>
      <TextComponent
        textAlign="center"
        variant="small"
        color={isFocused ? colors.textHE : colors.textLE}>
        {label}
      </TextComponent>
    </BoxContainerComponent>
  );
};

const BottomTab = ({label, isFocused, onPress}: BottomTabProps) => {
  const IconTab = useMemo(() => {
    switch (label) {
      case 'HomeScreen':
        return (
          <Icon
            label="Home"
            image={isFocused ? IconHomeActive : IconHome}
            isFocused={isFocused}
          />
        );
      case 'CompareScreen':
        return (
          <Icon
            label="Kasir"
            image={isFocused ? IconCompareActive : IconCompare}
            isFocused={isFocused}
          />
        );
      default:
        return (
          <Icon
            label="Home"
            image={isFocused ? IconHomeActive : IconHome}
            isFocused={isFocused}
          />
        );
    }
  }, [label, isFocused]);

  return (
    <ButtonContainerComponent
      justifyContent="center"
      paddingVertical={wp(10)}
      paddingHorizontal={wp(50)}
      onPress={onPress}
      activeOpacity={0.7}>
      <BoxContainerComponent
        paddingTop={wp(10)}
        paddingBottom={Platform.OS === 'ios' ? wp(0) : wp(10)}>
        {IconTab}
      </BoxContainerComponent>
    </ButtonContainerComponent>
  );
};
export default BottomTab;
