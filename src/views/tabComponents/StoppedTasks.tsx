// dependencies
import React from 'expo-status-bar';
import { Text, View } from 'react-native';

function StoppedTasks() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>停止されているタスク一覧をソートして表示する</Text>
    </View>
  );
}

export default StoppedTasks;
