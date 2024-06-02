import React from 'react';
import {BoxContainerComponent, ButtonContainerComponent} from '../container';
import {ImageSelectPokemon} from '../../assets';
import {wp} from '../../utils';
import {TextComponent} from '../text';
import {ImageComponent} from '../image';

const CardSelectPokemonComponent = ({
  uri,
  onPressSelect,
  onPressCancel,
}: {
  uri: string;
  onPressSelect: () => void;
  onPressCancel: () => void;
}) => {
  return (
    <ButtonContainerComponent onPress={onPressSelect}>
      {!uri ? (
        <ImageComponent
          width={wp(175)}
          height={wp(175)}
          image={ImageSelectPokemon}
        />
      ) : (
        <BoxContainerComponent>
          <ImageComponent
            width={wp(175)}
            height={wp(175)}
            image={{uri}}
            isSvg
          />
          <ButtonContainerComponent
            onPress={onPressCancel}
            alignSelf="flex-end"
            justifyContent="center"
            position="absolute"
            width={wp(25)}
            height={wp(25)}
            borderRadius={wp(25)}
            backgroundColor="red"
            alignItems="center">
            <TextComponent variant="big bold">X</TextComponent>
          </ButtonContainerComponent>
        </BoxContainerComponent>
      )}
    </ButtonContainerComponent>
  );
};
export default CardSelectPokemonComponent;
