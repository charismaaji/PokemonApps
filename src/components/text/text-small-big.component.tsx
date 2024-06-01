import React from 'react';
import TextComponent from './text.component';
import {wp} from '../../utils';
import {TextSmallBigProps} from './text.entity';
import {BoxContainerComponent} from '../container';

const TextSmallBigComponent = ({
  smallText,
  bigText,
  noMargin,
  horizontal,
}: TextSmallBigProps) => {
  if (horizontal) {
    return (
      <BoxContainerComponent
        flexDirection="row"
        alignItems="flex-end"
        marginBottom={noMargin ? 0 : wp(10)}>
        <TextComponent variant="small" marginBottom={wp(2)}>
          {smallText}
        </TextComponent>
        <TextComponent marginLeft={wp(5)} variant="big bold">
          {bigText}
        </TextComponent>
      </BoxContainerComponent>
    );
  }

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
