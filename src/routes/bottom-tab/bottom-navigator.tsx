import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import BottomTab from './bottom-tab';
import {colors, wp} from '../../utils';

const BottomNavigator = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // @ts-ignore
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <BottomTab
            key={index}
            label={`${label}`}
            onPress={onPress}
            isFocused={isFocused}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: colors.dark2,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: wp(0),
      height: wp(4),
    },
    shadowOpacity: wp(0.3),
    shadowRadius: wp(4.65),

    elevation: wp(8),
  },
});
