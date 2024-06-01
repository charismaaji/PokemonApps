import React from 'react';
import {ActivityIndicator} from 'react-native';
import {BoxContainerComponent} from '../container';
import {colors} from '../../utils';

const LoadingComponent = () => {
  return (
    <BoxContainerComponent alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color={colors.textHE} />
    </BoxContainerComponent>
  );
};
export default LoadingComponent;
