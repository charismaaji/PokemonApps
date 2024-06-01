import React from 'react';
import {BoxContainerComponent, ButtonContainerComponent} from '../container';
import {TextComponent} from '../text';
import {colors, hp, wp} from '../../utils';
import {ImageComponent} from '../image';
import {IconArrowDown} from '../../assets';
import {ButtonDropDownComponentProps} from './button.entity';

const DropDownButtonComponent = ({
  onPress,
  marginBottom,
}: ButtonDropDownComponentProps) => {
  return (
    <BoxContainerComponent marginBottom={marginBottom}>
      <TextComponent variant="normal semi bold">Select Pokemon</TextComponent>

      <ButtonContainerComponent
        backgroundColor={colors.grey}
        onPress={onPress}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft={wp(15)}
        height={wp(45)}
        marginTop={hp(10)}
        borderRadius={wp(20)}
        overflow="hidden">
        <TextComponent
          variant="normal semi bold"
          width={wp(300)}
          color={colors.textHE}
          numberOfLines={1}>
          Choose Pokemon
        </TextComponent>
        <BoxContainerComponent marginRight={wp(15)}>
          <ImageComponent
            image={IconArrowDown}
            width={wp(24)}
            height={wp(24)}
          />
        </BoxContainerComponent>
      </ButtonContainerComponent>
    </BoxContainerComponent>
  );
};
export default DropDownButtonComponent;
