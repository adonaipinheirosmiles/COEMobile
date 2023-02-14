import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

interface FeatureListItemProps {
  name: string;
  icon: string;
}

export function FeatureListItem({name, icon}: FeatureListItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Icon name={icon} style={styles.icon} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    height: 75,
    borderRadius: 8,
    shadowColor: '#00000030',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ff5e00',
    marginTop: 7.5,
  },
  icon: {
    fontSize: 20,
    color: '#ff5e00',
  },
});
