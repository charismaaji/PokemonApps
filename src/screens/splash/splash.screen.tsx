import React, {useEffect} from 'react';

// Navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParamList} from '../../routes/routes.type';

// Components
import {BoxContainerComponent, ImageComponent} from '../../components';

// Utils
import {globalStyle, hp, wp} from '../../utils';

// Assets
import {PokemonLogoImage, SplashImage} from '../../assets';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainAppStack');
    }, 2000);
  }, [navigation]);

  return (
    <BoxContainerComponent style={globalStyle.container}>
      <BoxContainerComponent
        position="absolute"
        width={wp(414)}
        height={hp(896)}
        alignItems="center"
        justifyContent="center">
        <ImageComponent image={SplashImage} width={wp(150)} height={wp(210)} />
      </BoxContainerComponent>

      <BoxContainerComponent
        flex={1}
        alignItems="center"
        justifyContent="flex-end"
        paddingBottom={hp(110)}>
        <ImageComponent
          image={PokemonLogoImage}
          width={wp(150)}
          height={wp(50)}
        />
      </BoxContainerComponent>
    </BoxContainerComponent>
  );
};
export default SplashScreen;
