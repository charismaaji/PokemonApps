import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {BoxContainerComponent} from '../container';
import {ImagePentagram} from '../../assets';
import {TextComponent, TextSmallBigComponent} from '../text';
import {wp} from '../../utils';
import {CardDataPokemonComponentProps} from './card.entity';

const CardDataPokemonComponent = ({
  height,
  name,
  types,
  weight,
}: CardDataPokemonComponentProps) => {
  return (
    <BoxContainerComponent>
      <ImageBackground style={styles.container} source={ImagePentagram}>
        <TextComponent
          variant="big bold"
          textAlign="center"
          marginBottom={wp(20)}>
          {name}
        </TextComponent>
        <BoxContainerComponent
          flexDirection="row"
          justifyContent="space-between">
          <TextSmallBigComponent
            smallText="Height"
            bigText={`${height ? height : '-'} m`}
          />
          <TextSmallBigComponent
            smallText="Weight"
            bigText={`${weight ? weight : '-'} kg`}
          />
        </BoxContainerComponent>
        <TextSmallBigComponent
          smallText="Types"
          bigText={types ? types : '-'}
        />
      </ImageBackground>
    </BoxContainerComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(380),
    height: wp(300),
    justifyContent: 'center',
    paddingVertical: wp(20),
    paddingHorizontal: wp(35),
  },
});

export default CardDataPokemonComponent;
