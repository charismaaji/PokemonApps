import React from 'react';
import TextComponent from './text.component';
import {wp} from '../../utils';
import {TextSmallBigProps} from './text.entity';
import {BoxContainerComponent} from '../container';

const TextSmallBigComponent = ({
  smallText,
  bigText,
  noMargin,
}: TextSmallBigProps) => {
  return (
    <BoxContainerComponent>
      <TextComponent variant="small" marginBottom={wp(2)}>
        {smallText}
      </TextComponent>
      <TextComponent variant="big bold" marginBottom={noMargin ? 0 : wp(15)}>
        {bigText}
      </TextComponent>
    </BoxContainerComponent>
  );
};
export default TextSmallBigComponent;
