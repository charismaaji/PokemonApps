import React from 'react';
import {BoxContainerComponent, ButtonContainerComponent} from '../container';
import {wp} from '../../utils';
import {ImageComponent} from '../image';
import {TextComponent} from '../text';
import {IconArrowBack} from '../../assets';

const NavbarComponent = ({
  onPress,
  title,
  disabled,
}: {
  onPress: () => void;
  title: string;
  disabled: boolean;
}) => {
  return (
    <BoxContainerComponent flexDirection="row" alignItems="center">
      <ButtonContainerComponent
        padding={wp(20)}
        onPress={onPress}
        disabled={disabled}>
        <ImageComponent image={IconArrowBack} width={wp(24)} height={wp(24)} />
      </ButtonContainerComponent>

      <TextComponent variant="big bold">{title}</TextComponent>
    </BoxContainerComponent>
  );
};
export default NavbarComponent;
