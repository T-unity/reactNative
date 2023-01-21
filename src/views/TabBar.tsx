// dependencies
import React from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import First from '../views/tabComponents/First';
import Second from '../views/tabComponents/Second';
import Third from '../views/tabComponents/Third';

const Tab = createBottomTabNavigator();
function NestedNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="First" component={First} />
      <Tab.Screen name="Second" component={Second} />
      <Tab.Screen name="Third" component={Third} />
    </Tab.Navigator>
  );
}

export default NestedNavigation;
