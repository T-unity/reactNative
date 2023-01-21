// dependencies
import React from 'expo-status-bar';
import { Text, View } from 'react-native';

// define stack navigations
function DetailsScreen({route}) {
  // get params from root page
  const { indexId, subText } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>番号: {JSON.stringify(indexId)}</Text>
      <Text>サブタイトル: {JSON.stringify(subText)}</Text>
    </View>
  );
}

export default DetailsScreen;
