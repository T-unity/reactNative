// dependencies
import React from 'expo-status-bar';
import { Text, View } from 'react-native';

function RunningTasks() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>実行されているタスクのみをソートして表示する</Text>
    </View>
  );
}

export default RunningTasks;
