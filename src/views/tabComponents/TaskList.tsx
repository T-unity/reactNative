// dependencies
import React, { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Define footer tabs
function TaskList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>

        <StatusBar style="auto" />

        <View style={[styles.base]}>
          <Text style={styles.text}>タスク一覧</Text>
        </View>

      </View>
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
  }
});
