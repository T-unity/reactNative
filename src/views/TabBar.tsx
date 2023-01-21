// dependencies
import React from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import TaskList from './tabComponents/TaskList';
import RunningTasks from './tabComponents/RunningTasks';
import StoppedTasks from './tabComponents/StoppedTasks';

const Tab = createBottomTabNavigator();
function NestedNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="タスク一覧" component={TaskList} />
      <Tab.Screen name="実行中のタスク" component={RunningTasks} />
      <Tab.Screen name="停止中のタスク" component={StoppedTasks} />
    </Tab.Navigator>
  );
}

export default NestedNavigation;
