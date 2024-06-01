import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {SvgUri} from 'react-native-svg';

interface ImageComponentProps {
  image: ImageSourcePropType;
  width: number;
  height: number;
  isSvg?: boolean;
  onLoad?: () => void;
}

const ImageComponent = ({
  height,
  image,
  width,
  isSvg,
  onLoad,
}: ImageComponentProps) => {
  if (isSvg) {
    return (
      <SvgUri
        width={`${width}`}
        height={`${height}`}
        uri={(image as any).uri}
        onLoad={onLoad}
      />
    );
  }
  return <Image source={image} style={{width: width, height: height}} />;
};
export default ImageComponent;
