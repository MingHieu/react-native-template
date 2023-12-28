import { Pressable, View } from 'react-native';
import React from 'react';
import { LeftArrow } from '~assets';
import { useNavigation } from '@react-navigation/native';
import { SIZE } from '~shared/theme';

export const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: SIZE.PADDING_HORIZONTAL,
        paddingVertical: 16,
      }}>
      <Pressable onPress={() => navigation.goBack()}>
        <LeftArrow width={20} height={20} />
      </Pressable>
    </View>
  );
};
