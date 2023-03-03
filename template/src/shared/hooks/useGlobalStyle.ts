import React from 'react';
import { StyleSheet } from 'react-native';
import { IThemeColor } from '~types';
import { useAppSelector } from './useAppSelector';
import { TYPO } from '~shared/theme';

interface IGlobalStyleProps {
  color: IThemeColor;
}

const getGlobalStyles = (props: IGlobalStyleProps) => {
  const { color } = props;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
    },
    title: {
      ...TYPO.h2,
    },
    label: {
      ...TYPO.h3,
    },
    text: {
      ...TYPO.p,
    },
  });
};

export const useGlobalStyle = () => {
  const { color } = useAppSelector((state) => state.theme);
  const styles = React.useMemo(() => getGlobalStyles({ color }), [color]);
  return styles;
};
