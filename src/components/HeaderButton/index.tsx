import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function HeaderButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="bars" color={'#e65400'} solid size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    marginBottom: 20,
  },
});
