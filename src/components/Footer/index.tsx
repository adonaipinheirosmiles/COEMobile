import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Footer() {
  return (
    <>
      <View style={styles.divider} />
      <View style={styles.footerArea}>
        <Text style={styles.footerText}>
          COE <Text style={styles.footerText}>Mobile</Text>
        </Text>
        <Text style={styles.footerSubText}>fev/2023</Text>
        <Text>Adonai Pinheiro - Arquiteto Mobile</Text>
        <Text style={styles.textBold}>Native Modules com React Native</Text>
        <Text>Utilizando libs nativas no RN</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  divider: {
    height: 5,
    width: '100%',
    backgroundColor: '#ff5e00',
    marginVertical: 20,
    borderRadius: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 20,
  },
  footerArea: {},
  footerText: {
    fontSize: 32,
    color: '#ff5e00',
    fontWeight: 'bold',
  },
  footerSubText: {
    fontSize: 28,
    color: '#ff5e00',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
