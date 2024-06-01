import {StyleSheet} from 'react-native';
import {wp} from '../../utils';

export const styles = StyleSheet.create({
  veryBig: {
    fontSize: wp(35),
    fontWeight: '400',
  },
  veryBigBold: {
    fontSize: wp(35),
    fontWeight: '700',
  },
  big: {
    fontSize: wp(20),
    fontWeight: '400',
  },
  bigBold: {
    fontSize: wp(20),
    fontWeight: '700',
  },
  semiBig: {
    fontSize: wp(18),
    fontWeight: '400',
  },
  semiBigBold: {
    fontSize: wp(18),
    fontWeight: '700',
  },
  normal: {
    fontSize: wp(15),
    fontWeight: '400',
    fontFamily: 'Popins-ExtraLight',
  },
  normalSemiBold: {
    fontSize: wp(16),
    fontWeight: '500',
  },
  normalBold: {
    fontSize: wp(16),
    fontWeight: '800',
  },
  small: {
    fontSize: wp(10),
    fontWeight: '400',
  },
  smallBold: {
    fontSize: wp(10),
    fontWeight: '700',
  },
  verySmall: {
    fontSize: wp(8),
    fontWeight: '400',
  },
  verySmallBold: {
    fontSize: wp(8),
    fontWeight: '800',
  },
});
