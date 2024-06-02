import React, {useCallback} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';

import {BoxContainerComponent, GapComponent} from '../container';
import {BottomSheetModalComponentProps} from './modal.entity';
import {colors, hp, wp} from '../../utils';
import {FlatList} from 'react-native-gesture-handler';
import {CardPokemonComponent} from '../card';
import {Portal} from '@gorhom/portal';
import {LoadingComponent} from '../other';
import {BasePokemonEntity} from '../../data/entity';

const BottomSheetModalComponent = ({
  bottomSheetRef,
  snapPoints,
  backgroundClose,
  disabled,
  data,
  onSelectPokemon,
  loadMore,
  loading,
  loadingSelectPokemon,
}: BottomSheetModalComponentProps) => {
  const renderItem = useCallback(
    ({item}: {item: BasePokemonEntity}) => {
      if (loadingSelectPokemon) {
        return null;
      }
      return (
        <CardPokemonComponent
          key={item.id}
          image={item.image}
          name={item.name}
          id={item.id}
          onPress={() => onSelectPokemon(item)}
        />
      );
    },
    [loadingSelectPokemon, onSelectPokemon],
  );

  const keyExtractor = useCallback((item: BasePokemonEntity) => item.name, []);

  return (
    <Portal>
      <BoxContainerComponent
        width={wp(414)}
        height={hp(896)}
        position="absolute"
        zIndex={999}>
        <Pressable
          disabled={disabled}
          style={styles.backgroundDarken}
          onPress={backgroundClose}
        />
        <BottomSheet
          onChange={(index: number) => {
            if (index < 0) {
              backgroundClose();
            }
          }}
          ref={bottomSheetRef}
          enablePanDownToClose
          index={0}
          snapPoints={snapPoints}
          style={styles.bottomSheetContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListFooterComponent={
              <>
                {loading && <LoadingComponent />}
                {loadingSelectPokemon && <LoadingComponent />}
                <GapComponent height={hp(120)} />
              </>
            }
            style={styles.flatList}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
          />
        </BottomSheet>
      </BoxContainerComponent>
    </Portal>
  );
};

const styles = StyleSheet.create({
  backgroundDarken: {
    width: wp(414),
    height: hp(896),
    position: 'absolute',
    backgroundColor: colors.darkTransparent,
  },
  bottomSheetContainer: {
    zIndex: 999,
  },
  flatList: {
    backgroundColor: colors.dark,
    paddingTop: hp(15),
  },
});
export default BottomSheetModalComponent;
