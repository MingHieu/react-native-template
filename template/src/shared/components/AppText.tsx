import { Text, TextProps } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { fontTheme } from '~shared/theme';

interface IProps extends TextProps {
  children: ReactNode;
}

export const AppText: FC<IProps> = (props) => {
  const { children, style, ...textProps } = props;

  return (
    <Text
      style={[
        {
          fontSize: 16,
          fontFamily: fontTheme.primary,
        },
        ...(Array.isArray(style) ? style : [style]),
      ]}
      {...textProps}
    >
      {children}
    </Text>
  );
};
