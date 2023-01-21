// dependencies
import React, { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// Components
import BaseStyle from '../../styles/BasicStyles';

// Define footer tabs
function TaskList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={BaseStyle.container}>

        <StatusBar style="auto" />

        <View style={[BaseStyle.base]}>
          <Text style={BaseStyle.text}>タスク一覧</Text>
        </View>

      </View>
    </View>
  );
}

export default TaskList;
