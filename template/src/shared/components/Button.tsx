import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { useAppSelector } from '~shared/hooks';
import { AppText } from './AppText';

interface IProps {
  label: string;
  onPress(): void;
  disabled?: boolean;
}

export const CustomButton: FC<IProps> = (props) => {
  const { label, onPress, disabled } = props;
  const { color } = useAppSelector((state) => state.theme);

  return (
    <TouchableOpacity
      style={[
        { backgroundColor: disabled ? '#F3F6F6' : color.primary },
        styles.container,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <AppText
        style={[
          styles.label,
          { color: disabled ? '#797C7B' : color.on_primary },
        ]}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
