import React from 'react';
import { StyleSheet } from 'react-native';
import { IThemeColor } from '~types';
import { TYPO } from '~shared/theme/index';
import { useTheme } from './useTheme';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

interface IGlobalStyleProps {
  color: IThemeColor;
  insets: EdgeInsets;
}

const getGlobalStyles = (props: IGlobalStyleProps) => {
  const { color, insets } = props;

  return StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      backgroundColor: color.background,
      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    container: {
      flex: 1,
      backgroundColor: color.background,
    },
    title: {
      ...TYPO.h3,
    },
    label: {
      ...TYPO.h4,
    },
    text: {
      ...TYPO.p,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
      margin: 2,
    },
  });
};

export const useGlobalStyles = () => {
  const { color } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = React.useMemo(
    () => getGlobalStyles({ color, insets }),
    [color, insets]
  );
  return styles;
};
