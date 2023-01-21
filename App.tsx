// dependencies
import React, { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import DetailsScreen from './src/views/DetailsScreen';
import TabBar from './src/views/TabBar';

// Define footer tabs
function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>

        <StatusBar style="auto" />

        <View style={[styles.base]}>
          <Text style={styles.text}>Hoge</Text>
          <Button
            title="詳細を見る"
            onPress={() => {
              // navigate with params
              navigation.navigate('詳細画面', {
                indexId: 1,
                subText: 'hogehogehoge',
              });
            }}
          />
        </View>

      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NestedNavigation"
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
        <Stack.Screen name="NestedNavigation" component={TabBar} options={{ headerShown: false }} />
        <Stack.Screen name="ホーム" component={Main} options={{ title: 'ホーム' }} />
        <Stack.Screen name="詳細画面" component={DetailsScreen} options={{ title: '詳細画面' }} />
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
