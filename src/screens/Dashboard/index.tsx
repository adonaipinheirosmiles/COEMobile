import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {Background, Card, FeatureList, Footer, HeaderButton} from '@components';
import useDashboard from './hooks/useDashboard';

export default function Dashboard() {
  const {features, cardInfo} = useDashboard();
  const {cardName} = cardInfo;

  return (
    <Background>
      <HeaderButton />
      <Text style={styles.title}>Olá, {cardName}</Text>
      <Card cardInfo={cardInfo} />
      <FeatureList data={features} />
      <Footer />
    </Background>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
});
