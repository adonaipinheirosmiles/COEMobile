import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BackgroundProps {
  children: React.ReactElement[];
}

export function Background({children}: BackgroundProps) {
  return (
    <LinearGradient colors={['#FFF', '#f2f2f2']} style={styles.container}>
      <SafeAreaView>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
