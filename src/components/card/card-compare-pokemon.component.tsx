import React from 'react';
import {BoxContainerComponent} from '../container';
import {hp, wp} from '../../utils';
import {ImageComponent} from '../image';
import {TextComponent, TextSmallBigComponent} from '../text';

const CardComparePokemonComponent = () => {
  return (
    <BoxContainerComponent width={wp(192)} alignItems="center">
      <ImageComponent
        isSvg
        image={{
          uri: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg',
        }}
        width={wp(140)}
        height={wp(140)}
      />

      <TextComponent
        variant="big bold"
        marginTop={hp(15)}
        marginBottom={hp(15)}>
        BULBASAUR
      </TextComponent>

      <TextSmallBigComponent horizontal smallText="Height" bigText="7 m" />

      <TextSmallBigComponent horizontal smallText="Height" bigText="50 kg" />
    </BoxContainerComponent>
  );
};
export default CardComparePokemonComponent;
