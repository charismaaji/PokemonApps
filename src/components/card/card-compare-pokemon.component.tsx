import React from 'react';
import {BoxContainerComponent} from '../container';
import {hp, imageBaseUrl, wp} from '../../utils';
import {ImageComponent} from '../image';
import {TextComponent, TextSmallBigComponent} from '../text';
import {DetailPokemonEntity} from '../../data/entity';

const CardComparePokemonComponent = ({data}: {data: DetailPokemonEntity}) => {
  return (
    <BoxContainerComponent width={wp(192)} alignItems="center">
      <ImageComponent
        isSvg
        image={{uri: imageBaseUrl(data.id)}}
        width={wp(140)}
        height={wp(140)}
      />

      <TextComponent
        variant="big bold"
        marginTop={hp(15)}
        marginBottom={hp(15)}>
        {data.name}
      </TextComponent>

      <TextSmallBigComponent
        horizontal
        smallText="Height"
        bigText={`${data.height} m`}
      />

      <TextSmallBigComponent
        horizontal
        smallText="Weight"
        bigText={`${data.weight} kg`}
      />
    </BoxContainerComponent>
  );
};
export default CardComparePokemonComponent;
