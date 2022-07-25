import React from 'react';
import {StyleSheet} from 'react-native';
import {IThemeColor} from '~core/redux/slice/theme/types';
import {useAppSelector} from '~shared/hooks';
import {typo} from '~shared/theme/index';

interface IGlobalStyleProps {
  color: IThemeColor;
}

const getGlobalStyles = (props: IGlobalStyleProps) => {
  const {color} = props;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
    },
    title: {
      ...typo.h2,
    },
    label: {
      ...typo.h3,
    },
    text: {
      ...typo.p,
    },
  });
};

export const useGlobalStyle = () => {
  const {color} = useAppSelector(state => state.theme);
  const styles = React.useMemo(() => getGlobalStyles({color}), [color]);
  return styles;
};
