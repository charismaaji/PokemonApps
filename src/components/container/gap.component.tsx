import React from 'react';
import BoxContainerComponent from './box-container.component';

const GapComponent = ({height, width}: {height?: number; width?: number}) => {
  return <BoxContainerComponent height={height} width={width} />;
};
export default GapComponent;
