import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CardProps {
  cardInfo: {
    cardNumber: string;
    cardName: string;
    cardDueDate: string;
  };
}

const CardInitialInfo = {cardName: '', cardNumber: '', cardDueDate: ''};

const colors = ['#FF7020', '#ff5e00'];

export function Card({cardInfo = CardInitialInfo}: CardProps) {
  const {cardName, cardNumber, cardDueDate} = cardInfo;

  return (
    <LinearGradient colors={colors} style={styles.container}>
      <Text style={cardNumberStyle}>{cardNumber}</Text>
      <Icon name="table" style={styles.chip} />
      <View style={styles.contentName}>
        <Text style={styles.text}>{cardName.toUpperCase()}</Text>
        <Text style={styles.text}>{cardDueDate}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    height: 175,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
  contentName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chip: {
    color: '#FFFFFF50',
    fontSize: 32,
    textAlign: 'right',
    marginRight: 20,
  },
});

const cardNumberStyle = StyleSheet.compose(styles.text, {fontSize: 20});
