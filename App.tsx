import React, { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MainComponent({ navigation }) {
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

// Define footer tabs
const Tab = createBottomTabNavigator();
function NestedNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

function Feed() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}
function Messages() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages Screen</Text>
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
        <Stack.Screen name="NestedNavigation" component={NestedNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="ホーム" component={MainComponent} options={{ title: 'ホーム' }} />
        <Stack.Screen name="詳細画面" component={DetailsScreen} options={{ title: '詳細画面' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

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
