import React, {memo} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {CardImagePokemon} from '../../assets';
import {hp, wp} from '../../utils';
import {BoxContainerComponent, ButtonContainerComponent} from '../container';
import {ImageComponent} from '../image';
import {TextSmallBigComponent} from '../text';
import {CardPokemonComponentProps} from './card.entity';

const CardPokemonComponent = ({
  image,
  name,
  id,
  onPress,
}: CardPokemonComponentProps) => {
  return (
    <ButtonContainerComponent onPress={onPress}>
      <ImageBackground source={CardImagePokemon} style={styles.container}>
        <BoxContainerComponent
          width={wp(192)}
          alignItems="center"
          justifyContent="center">
          <ImageComponent
            isSvg
            image={{
              uri: image,
            }}
            width={wp(140)}
            height={wp(140)}
          />
        </BoxContainerComponent>
        <BoxContainerComponent width={wp(192)} justifyContent="center">
          <TextSmallBigComponent smallText="Pokemon Name" bigText={name} />
          <TextSmallBigComponent
            smallText="Pokemon ID"
            bigText={id ? id : '-'}
            noMargin
          />
        </BoxContainerComponent>
      </ImageBackground>
    </ButtonContainerComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(384),
    height: wp(160),
    marginBottom: hp(15),
    flexDirection: 'row',
    marginHorizontal: wp(15),
    borderRadius: wp(10),
    overflow: 'hidden',
  },
});

export default memo(CardPokemonComponent);
