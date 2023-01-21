// dependencies
import React, { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';

// Components
import BaseStyle from '../../styles/BasicStyles';

// DemoData
import { DemoData } from '../../tmp/SampleData';

// Define footer tabs
function TaskList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={BaseStyle.container}>

        <StatusBar style="auto" />

        <FlatList
          data={ DemoData }
          renderItem={({item}) => <Text style={BaseStyle.item}>{item.key}</Text>}
        />

      </View>
    </View>
  );
}

export default TaskList;
