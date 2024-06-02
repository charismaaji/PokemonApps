import React from 'react';
import {
  BoxContainerComponent,
  ButtonComponent,
  CardDataPokemonComponent,
  GapComponent,
  ImageComponent,
  LoadingComponent,
  NavbarComponent,
  SafeAreaComponent,
  TextComponent,
} from '../../components';
import {colors, hp, imageBaseUrl, wp} from '../../utils';
import {ImageGalaxy} from '../../assets';
import {useAbilitiesPokemon, useDetailPokemon, useDetailTab} from './hooks';
import {BarChart} from 'react-native-gifted-charts';
import {Alert, ScrollView} from 'react-native';
import {useAppSelector} from '../../data';
import {setCurrentPokemonId} from './detail.action';

const DetailScreen = () => {
  const {currentPokemonId, selectedPokemon1} = useAppSelector(
    state => state.pokemon,
  );

  // Hooks
  // useDetailTab
  const {handleGoBack, loading, setLoading} = useDetailTab();

  // useAbilitiesPokemon
  const {setListAbilityId, abilityLoading, listAbilities, setAbilitiesToText} =
    useAbilitiesPokemon();

  // useDetailPokemon
  const {detailPokemon, pokemonChartStats, imageLoading, setImageLoading} =
    useDetailPokemon({
      pokemonId: currentPokemonId,
      setListAbilityId,
    });

  const handleSetPokemon = async () => {
    setLoading(true);
    const result = await setCurrentPokemonId({
      pokemonId: detailPokemon?.id,
      queueNumber: !selectedPokemon1 ? 1 : 2,
    });
    setLoading(false);

    if (!result.success) {
      return Alert.alert('Error', 'Failed to set pokemon');
    }

    Alert.alert('Success', 'Pokemon has been set');
  };

  return (
    <SafeAreaComponent>
      <ScrollView>
        <NavbarComponent
          onPress={handleGoBack}
          title="Detail"
          disabled={loading}
        />

        {detailPokemon && (
          <BoxContainerComponent>
            <BoxContainerComponent position="absolute" marginTop={wp(70)}>
              <ImageComponent
                image={ImageGalaxy}
                width={wp(414)}
                height={wp(200)}
              />
            </BoxContainerComponent>

            <BoxContainerComponent alignItems="center">
              <TextComponent variant="very big bold">
                {detailPokemon.id}
              </TextComponent>

              <BoxContainerComponent zIndex={99}>
                {imageLoading && (
                  <BoxContainerComponent
                    width={wp(240)}
                    height={wp(240)}
                    alignItems="center"
                    justifyContent="center">
                    <LoadingComponent />
                  </BoxContainerComponent>
                )}
                <ImageComponent
                  isSvg
                  image={{
                    uri: imageBaseUrl(detailPokemon.id),
                  }}
                  width={wp(240)}
                  height={wp(240)}
                  onLoad={() => setImageLoading(false)}
                />
              </BoxContainerComponent>
              <CardDataPokemonComponent
                name={detailPokemon.name.toUpperCase()}
                height={detailPokemon.height}
                weight={detailPokemon.weight}
                types={detailPokemon.types
                  .map(val => val.type.name)
                  .join(', ')
                  .toUpperCase()}
              />
            </BoxContainerComponent>

            <BoxContainerComponent alignItems="flex-start">
              <TextComponent
                marginBottom={hp(10)}
                marginTop={hp(15)}
                variant="normal semi bold"
                marginLeft={wp(5)}>
                Stats:
              </TextComponent>

              <BarChart
                barWidth={wp(25)}
                barBorderRadius={4}
                frontColor="lightgray"
                data={pokemonChartStats}
                yAxisThickness={0}
                yAxisTextStyle={{color: colors.textHE, fontSize: wp(12)}}
                xAxisThickness={0}
                xAxisLabelTextStyle={{
                  color: colors.textHE,
                  fontSize: wp(12),
                }}
                xAxisTextNumberOfLines={2}
                width={wp(340)}
                height={wp(340)}
                spacing={wp(35)}
                initialSpacing={wp(10)}
              />
            </BoxContainerComponent>

            <BoxContainerComponent marginTop={hp(15)} marginHorizontal={wp(15)}>
              <TextComponent marginBottom={hp(10)}>Abilities:</TextComponent>
              {abilityLoading ? (
                <LoadingComponent />
              ) : (
                <>
                  {listAbilities.map(val => {
                    return (
                      <BoxContainerComponent
                        flexDirection="row"
                        key={val.name}
                        marginBottom={hp(15)}>
                        <TextComponent
                          marginRight={wp(10)}
                          variant="semi big bold">
                          -
                        </TextComponent>
                        <BoxContainerComponent>
                          <TextComponent
                            variant="semi big bold"
                            marginBottom={hp(5)}>
                            {val.name.toUpperCase()}
                          </TextComponent>
                          <TextComponent>
                            {setAbilitiesToText(val.effect_entries)}
                          </TextComponent>
                        </BoxContainerComponent>
                      </BoxContainerComponent>
                    );
                  })}
                </>
              )}
            </BoxContainerComponent>
          </BoxContainerComponent>
        )}

        <GapComponent height={hp(150)} />
      </ScrollView>

      <BoxContainerComponent marginHorizontal={wp(20)} paddingVertical={hp(15)}>
        <ButtonComponent
          title="Compare"
          onPress={handleSetPokemon}
          loading={loading}
          disabled={loading}
        />
      </BoxContainerComponent>
    </SafeAreaComponent>
  );
};
export default DetailScreen;
