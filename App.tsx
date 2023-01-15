import React, { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const MainComponent = () => {
  return (
    <NavigationContainer>{/* Rest of your app code */}
      <View style={styles.container}>

        <StatusBar style="auto" />

        <View style={[styles.base]}>
          <Text style={styles.text}>Hoge</Text>
        </View>

      </View>
    </NavigationContainer>
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
