import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useTheme } from '~shared/hooks';
import { AppText } from './AppText';
import { COLOR } from '~shared/theme';

interface IProps extends TextInputProps {
  label: string;
  icon?: React.ReactElement;
  onIconPress?: () => void;
}

export interface CustomInputHandle {
  setStatus: (status: 'normal' | 'invalid', text?: string) => void;
  getValue(): string;
}

export const CustomInput = forwardRef<CustomInputHandle, IProps>(
  (props, ref) => {
    const { label, icon, onIconPress, ...inputProps } = props;
    const { color } = useTheme();
    const [invalid, setInvalid] = useState(false);
    const [invalidText, setInvalidText] = useState<string>();
    const inputRef = useRef<string>('');

    useImperativeHandle(ref, () => ({ setStatus, getValue }), []);

    const setStatus: CustomInputHandle['setStatus'] = (status, text) => {
      switch (status) {
        case 'normal':
          setInvalid(false);
          setInvalidText('');
          break;

        case 'invalid':
          setInvalid(true);
          setInvalidText(text);
          break;
      }
    };

    const getValue = () => {
      return inputRef.current;
    };

    return (
      <View style={styles.container}>
        <AppText style={{ color: invalid ? COLOR.red : color.on_surface }}>
          {label}
        </AppText>
        <View
          style={[
            styles.inputContainer,
            { borderBottomColor: invalid ? COLOR.red : '#CDD1D0' },
          ]}
        >
          <TextInput
            onChangeText={(text) => (inputRef.current = text)}
            style={[styles.input, { paddingRight: icon ? 4 : 0 }]}
            {...inputProps}
          />
          <TouchableOpacity onPress={onIconPress}>{icon}</TouchableOpacity>
        </View>
        {invalid && <AppText style={styles.invalidText}>{invalidText}</AppText>}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginTop: 2,
  },
  input: {
    flex: 1,
    paddingVertical: 6,
  },
  invalidText: {
    marginTop: 8,
    textAlign: 'right',
    color: COLOR.red,
  },
});
