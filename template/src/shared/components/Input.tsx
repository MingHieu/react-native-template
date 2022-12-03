import { StyleSheet, TextInput, View } from 'react-native';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useAppSelector } from '~shared/hooks';
import { AppText } from './AppText';
import { COLOR } from '~shared/theme';

interface IProps {
  label: string;
}

export interface CustomInputHandle {
  setStatus: (status: 'normal' | 'invalid', text?: string) => void;
  getValue(): string;
}

export const CustomInput = forwardRef<CustomInputHandle, IProps>((props, ref) => {
  const { label } = props;
  const { color } = useAppSelector((state) => state.theme);
  const [invalid, setInvalid] = useState(false);
  const [invalidText, setInvalidText] = useState<string>();
  const inputRef = useRef<string>('');

  useImperativeHandle(ref, () => ({ setStatus, getValue }), []);

  const setStatus: CustomInputHandle['setStatus'] = (status, text) => {
    switch (status) {
      case 'normal':
        setInvalid(true);
        setInvalidText(text);
        break;

      case 'invalid':
        setInvalid(false);
        setInvalidText('');
        break;
    }
  };

  const getValue = () => {
    return inputRef.current;
  };

  return (
    <View style={styles.container}>
      <AppText style={{ color: invalid ? COLOR.red : color.primary }}>
        {label}
      </AppText>
      <TextInput
        onChangeText={(text) => (inputRef.current = text)}
        style={{
          ...styles.input,
          borderBottomColor: invalid ? COLOR.red : '#CDD1D0',
        }}
      />
      {invalid && <AppText style={styles.invalidText}>{invalidText}</AppText>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 6,
    marginTop: 2,
  },
  invalidText: {
    marginTop: 8,
    textAlign: 'right',
    color: COLOR.red,
  },
});
