import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {FeatureListItem} from './FeatureListItem';

interface FeatureListProps {
  data: {name: string; icon: string}[];
}

export function FeatureList({data}: FeatureListProps) {
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      contentContainerStyle={styles.container}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => (
        <FeatureListItem name={item.name} icon={item.icon} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#e6e6e690',
  },
});
