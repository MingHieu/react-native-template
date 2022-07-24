import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAppSelector} from '~shared/hooks';

export const Home = () => {
  const {t} = useTranslation();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <View>
      <Text>{t('Home:Greeting')}</Text>
      <AntDesign name="home" />
    </View>
  );
};
