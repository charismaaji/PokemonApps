import React from 'react';
import {ScrollView} from 'react-native';
import {
  BoxContainerComponent,
  ButtonComponent,
  CardComparePokemonComponent,
  CardSelectPokemonComponent,
  DropDownButtonComponent,
  GapComponent,
  SafeAreaComponent,
  TextComponent,
} from '../../components';
import {hp, wp} from '../../utils';

const CompareScreen = () => {
  return (
    <SafeAreaComponent>
      <ScrollView>
        <BoxContainerComponent paddingHorizontal={wp(15)}>
          <TextComponent variant="very big bold" marginBottom={hp(30)}>
            Compare Pokemon
          </TextComponent>
          <DropDownButtonComponent onPress={() => {}} marginBottom={hp(20)} />
          <DropDownButtonComponent onPress={() => {}} marginBottom={hp(30)} />

          <BoxContainerComponent
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={hp(30)}>
            <CardSelectPokemonComponent />

            <CardSelectPokemonComponent />
          </BoxContainerComponent>

          <ButtonComponent title="Compare" />

          <TextComponent variant="big bold" marginTop={hp(30)}>
            Compare Result
          </TextComponent>

          <BoxContainerComponent flexDirection="row" marginTop={hp(20)}>
            <CardComparePokemonComponent />
            <CardComparePokemonComponent />
          </BoxContainerComponent>

          <GapComponent height={hp(120)} />
        </BoxContainerComponent>
      </ScrollView>
    </SafeAreaComponent>
  );
};
export default CompareScreen;
