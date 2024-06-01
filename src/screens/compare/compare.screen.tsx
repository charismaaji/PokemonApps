import React from 'react';
import {ScrollView} from 'react-native';
import {
  BottomSheetModalComponent,
  BoxContainerComponent,
  ButtonComponent,
  CardComparePokemonComponent,
  CardSelectPokemonComponent,
  DropDownButtonComponent,
  GapComponent,
  SafeAreaComponent,
  TextComponent,
} from '../../components';
import {colors, hp, wp} from '../../utils';
import {BarChart} from 'react-native-gifted-charts';
import {useCompareModal} from './hooks';
import {useAppSelector} from '../../data';
import {addPokemonOffset} from '../../routes/pokemon.action';

const data = [
  {
    value: 2500,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'special-defense',
  },
  {value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {
    value: 3500,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'Feb',
  },
  {value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {
    value: 4500,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'Mar',
  },
  {value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {
    value: 5200,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'Apr',
  },
  {value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {
    value: 3000,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'May',
  },
  {value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {
    value: 3500,
    frontColor: '#006DFF',
    gradientColor: '#009FFF',
    spacing: 6,
    label: 'Feb',
  },
  {value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
];

const CompareScreen = () => {
  // Redux
  const {listPokemon, loading} = useAppSelector(state => state.pokemon);

  const {
    selectedPokemonModalRef,
    setShowModalPokemon,
    showModalPokemon,
    snapPoints,
    handleCloseModal,
  } = useCompareModal();

  return (
    <SafeAreaComponent>
      <ScrollView>
        <BoxContainerComponent paddingHorizontal={wp(15)}>
          <TextComponent variant="very big bold" marginBottom={hp(30)}>
            Compare Pokemon
          </TextComponent>
          <DropDownButtonComponent
            onPress={() => setShowModalPokemon(true)}
            marginBottom={hp(20)}
          />
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

          <BoxContainerComponent flexDirection="row" marginVertical={hp(20)}>
            <CardComparePokemonComponent />
            <CardComparePokemonComponent />
          </BoxContainerComponent>

          <BoxContainerComponent
            flexDirection="row"
            alignItems="center"
            marginBottom={hp(10)}>
            <BoxContainerComponent
              width={wp(30)}
              height={wp(10)}
              backgroundColor="#006DFF"
            />
            <TextComponent marginLeft={wp(10)}>BULBASAUR</TextComponent>
          </BoxContainerComponent>
          <BoxContainerComponent
            flexDirection="row"
            alignItems="center"
            marginBottom={hp(20)}>
            <BoxContainerComponent
              width={wp(30)}
              height={wp(10)}
              backgroundColor="#93FCF8"
            />
            <TextComponent marginLeft={wp(10)}>BULBASAUR</TextComponent>
          </BoxContainerComponent>

          <BarChart
            barWidth={wp(25)}
            barBorderRadius={4}
            frontColor="lightgray"
            data={data}
            yAxisThickness={0}
            yAxisTextStyle={{color: colors.textHE, fontSize: wp(12)}}
            xAxisThickness={0}
            xAxisLabelTextStyle={{
              color: colors.textHE,
              fontSize: wp(12),
            }}
            xAxisTextNumberOfLines={10}
            width={wp(340)}
            height={wp(340)}
            spacing={wp(15)}
            initialSpacing={wp(10)}
          />

          <GapComponent height={hp(120)} />

          {showModalPokemon && (
            <BottomSheetModalComponent
              bottomSheetRef={selectedPokemonModalRef}
              snapPoints={snapPoints}
              data={listPokemon}
              backgroundClose={handleCloseModal}
              onSelectPokemon={() => {}}
              loadMore={addPokemonOffset}
              loading={loading}
            />
          )}
        </BoxContainerComponent>
      </ScrollView>
    </SafeAreaComponent>
  );
};
export default CompareScreen;
