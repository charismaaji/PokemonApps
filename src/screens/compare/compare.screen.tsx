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
import {colors, hp, imageBaseUrl, wp} from '../../utils';
import {BarChart} from 'react-native-gifted-charts';
import {useCompare, useCompareModal} from './hooks';
import {useAppSelector} from '../../data';
import {addPokemonOffset} from '../../routes/pokemon.action';
import {removeSelectedPokemon} from './compare.action';

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
  const {listPokemon, loading, selectedPokemon1, selectedPokemon2} =
    useAppSelector(state => state.pokemon);

  // Hooks
  // useCompareModal
  const {
    selectedPokemonModalRef,
    setShowModalPokemon,
    showModalPokemon,
    snapPoints,
    handleCloseModal,
    queueNumber,
    setQueueNumber,
    setShowCompare,
    showCompare,
  } = useCompareModal();

  const {handleSelectPokemon, loadingSelectPokemon} = useCompare();

  return (
    <SafeAreaComponent>
      <ScrollView>
        <BoxContainerComponent paddingHorizontal={wp(15)}>
          <TextComponent variant="very big bold" marginBottom={hp(30)}>
            Compare Pokemon
          </TextComponent>
          <DropDownButtonComponent
            onPress={() => {
              setShowModalPokemon(true);
              setQueueNumber(1);
            }}
            marginBottom={hp(20)}
            text={
              selectedPokemon1
                ? selectedPokemon1.name.toUpperCase()
                : 'Choose Pokemon'
            }
          />
          <DropDownButtonComponent
            onPress={() => {
              setShowModalPokemon(true);
              setQueueNumber(2);
            }}
            marginBottom={hp(30)}
            text={
              selectedPokemon2
                ? selectedPokemon2?.name.toUpperCase()
                : 'Choose Pokemon'
            }
          />

          <BoxContainerComponent
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={hp(30)}>
            <CardSelectPokemonComponent
              uri={selectedPokemon1 ? imageBaseUrl(selectedPokemon1.id) : ''}
              onPressCancel={() => removeSelectedPokemon(1)}
              onPressSelect={() => {
                setShowModalPokemon(true);
                setQueueNumber(1);
              }}
            />

            <CardSelectPokemonComponent
              uri={selectedPokemon2 ? imageBaseUrl(selectedPokemon2.id) : ''}
              onPressCancel={() => removeSelectedPokemon(2)}
              onPressSelect={() => {
                setShowModalPokemon(true);
                setQueueNumber(2);
              }}
            />
          </BoxContainerComponent>

          <ButtonComponent
            title="Compare"
            onPress={() => setShowCompare(true)}
          />

          {!selectedPokemon1 ||
          !selectedPokemon2 ? null : !showCompare ? null : (
            <>
              <TextComponent variant="big bold" marginTop={hp(30)}>
                Compare Result
              </TextComponent>
              <BoxContainerComponent
                flexDirection="row"
                marginVertical={hp(20)}>
                <CardComparePokemonComponent data={selectedPokemon1} />
                <CardComparePokemonComponent data={selectedPokemon2} />
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
                <TextComponent marginLeft={wp(10)}>
                  {selectedPokemon1.name.toUpperCase()}
                </TextComponent>
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
                <TextComponent marginLeft={wp(10)}>
                  {selectedPokemon2.name.toUpperCase()}
                </TextComponent>
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
            </>
          )}

          <GapComponent height={hp(50)} />

          {showModalPokemon && (
            <BottomSheetModalComponent
              bottomSheetRef={selectedPokemonModalRef}
              snapPoints={snapPoints}
              data={listPokemon}
              backgroundClose={handleCloseModal}
              onSelectPokemon={pokemon =>
                handleSelectPokemon({
                  closeModal: handleCloseModal,
                  pokemonId: pokemon.id,
                  queueNumber: queueNumber,
                })
              }
              loadMore={addPokemonOffset}
              loading={loading}
              disabled={loadingSelectPokemon}
              loadingSelectPokemon={loadingSelectPokemon}
            />
          )}
        </BoxContainerComponent>
      </ScrollView>
    </SafeAreaComponent>
  );
};
export default CompareScreen;
