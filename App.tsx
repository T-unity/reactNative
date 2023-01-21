// dependencies
import React from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import TaskList from './src/views/tabComponents/TaskList';
import TabBar from './src/views/TabBar';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigationBar"
        // Set options to be used in the overall navigation bar
        screenOptions = {{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Define TabBar */}
        <Stack.Screen name="TabNavigationBar" component={TabBar} options={{ headerShown: false }} />

        {/* Define Screen Navigation */}
        <Stack.Screen name="ホーム" component={TaskList} options={{ title: 'ホーム' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

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
