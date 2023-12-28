import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LeftArrow } from '~assets';
import { useAppSelector, useGlobalStyles } from '~shared/hooks';

export const Home = () => {
  const { t } = useTranslation();
  const user = useAppSelector(state => state.user);
  const globalStyle = useGlobalStyles();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <View>
      <Text style={[globalStyle.title]}>{t('Home:Greeting')}</Text>
      <AntDesign name="home" />
      <LeftArrow />
    </View>
  );
};
