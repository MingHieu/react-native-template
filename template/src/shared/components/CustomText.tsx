import { Text, TextStyle } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { fontTheme } from '~shared/theme';

interface IProps {
  children: ReactNode;
  style?: TextStyle;
}

export const CustomText: FC<IProps> = (props) => {
  return (
    <Text
      style={{
        fontFamily: fontTheme.primary,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
};
