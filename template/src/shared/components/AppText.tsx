import { Text, TextStyle, TextProps } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { fontTheme } from '~shared/theme';

interface IProps extends TextProps {
  children: ReactNode;
  style?: TextStyle;
}

export const AppText: FC<IProps> = (props) => {
  return (
    <Text
      style={{
        fontFamily: fontTheme.primary,
        ...props.style,
      }}
      {...props}
    >
      {props.children}
    </Text>
  );
};
