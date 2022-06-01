import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const {t} = useTranslation();
  const user = useSelector(state => state.user);
  console.log(user);

  return (
    <View>
      <Text>{t('Home:Greeting')}</Text>
      <AntDesign name="home" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
