import { StyleSheet, TextInput, View } from 'react-native';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useAppSelector } from '~shared/hooks';
import { CTText } from './CTText';
import { COLOR } from '~shared/theme';

interface IProps {
  label: string;
}

export interface CTInputHandle {
  setStatus: (status: CTInputStatus, text?: string) => void;
  getValue(): string;
}

export enum CTInputStatus {
  normal = 0,
  invalid = 1,
}

export const CTInput = forwardRef<CTInputHandle, IProps>((props, ref) => {
  const { label } = props;
  const { color } = useAppSelector((state) => state.theme);
  const [invalid, setInvalid] = useState(false);
  const [invalidText, setInvalidText] = useState<string>();
  const inputRef = useRef<string>('');

  useImperativeHandle(ref, () => ({ setStatus, getValue }), []);

  const setStatus: CTInputHandle['setStatus'] = (status, text) => {
    switch (status) {
      case CTInputStatus.invalid:
        setInvalid(true);
        setInvalidText(text);
        break;

      case CTInputStatus.normal:
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
      <CTText style={{ color: invalid ? COLOR.red : color.primary }}>
        {label}
      </CTText>
      <TextInput
        onChangeText={(text) => (inputRef.current = text)}
        style={{
          ...styles.input,
          borderBottomColor: invalid ? COLOR.red : '#CDD1D0',
        }}
      />
      {invalid && <CTText style={styles.invalidText}>{invalidText}</CTText>}
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
