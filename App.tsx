// dependencies
import React from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import TaskList from './src/views/tabComponents/TaskList';
import TabBar from './src/views/TabBar';

// Data Driving
import getDataFromFirebase from './src/Auth/WelcomeAndAuth';
import FirestoreDB from './firebase'

const Stack = createNativeStackNavigator();
function App() {
  getDataFromFirebase;

  function saveDataToFirebase(data: string) {
    FirestoreDB.collection("users").add({ user_id: data })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
  saveDataToFirebase( 'hoge' );

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
