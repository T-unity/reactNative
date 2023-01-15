import React, { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const MainComponent = () => {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={[styles.base]}>
        <Text style={styles.text}>Remid Me</Text>
      </View>

    </View>
  );
}
export default MainComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
