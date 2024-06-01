import React from 'react';
import {ImageBackground} from 'react-native';
import {ButtonContainerComponent} from '../container';
import {ImageSelectPokemon} from '../../assets';
import {wp} from '../../utils';
import {TextComponent} from '../text';

const CardSelectPokemonComponent = () => {
  return (
    <ButtonContainerComponent>
      <ImageBackground
        source={ImageSelectPokemon}
        style={{width: wp(175), height: wp(175)}}>
        <ButtonContainerComponent
          alignSelf="flex-end"
          justifyContent="center"
          position="absolute"
          width={wp(40)}
          height={wp(40)}
          alignItems="center">
          <TextComponent variant="big bold">X</TextComponent>
        </ButtonContainerComponent>
      </ImageBackground>
    </ButtonContainerComponent>
  );
};
export default CardSelectPokemonComponent;
