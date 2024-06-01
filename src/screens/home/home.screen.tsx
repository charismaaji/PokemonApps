import React from 'react';
import {FlatList} from 'react-native';

// Components
import {
  BoxContainerComponent,
  CardPokemonComponent,
  GapComponent,
  ImageComponent,
  LoadingComponent,
  SafeAreaComponent,
} from '../../components';

// Assets
import {HomeHeaderImage} from '../../assets';

// Utils
import {hp, wp} from '../../utils';

// State
import {useAppSelector} from '../../data';
import {useHomeTab} from './hooks';
import {addPokemonOffset} from '../../routes/pokemon.action';

const HomeScreen = () => {
  const {listPokemon, loading} = useAppSelector(state => state.pokemon);

  const {navigateDetailPokemon} = useHomeTab();

  return (
    <SafeAreaComponent>
      <FlatList
        data={listPokemon}
        renderItem={({item}) => {
          return (
            <CardPokemonComponent
              key={item.id}
              image={item.image}
              name={item.name}
              id={item.id}
              onPress={() => navigateDetailPokemon(item.id)}
            />
          );
        }}
        ListHeaderComponent={
          <BoxContainerComponent>
            <ImageComponent
              image={HomeHeaderImage}
              width={wp(414)}
              height={wp(450)}
            />

            <GapComponent height={hp(30)} />
          </BoxContainerComponent>
        }
        ListFooterComponent={
          <>
            {loading && <LoadingComponent />}
            <GapComponent height={hp(120)} />
          </>
        }
        onEndReached={addPokemonOffset}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaComponent>
  );
};
export default HomeScreen;
