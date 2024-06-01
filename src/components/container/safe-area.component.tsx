import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaViewProps} from './container.entity';
import {globalStyle} from '../../utils';

const SafeAreaComponent = ({children}: SafeAreaViewProps) => {
  return <SafeAreaView style={globalStyle.container}>{children}</SafeAreaView>;
};

export default SafeAreaComponent;
