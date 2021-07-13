import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Header from './components/Header';
import Settings from './screens/Settings';



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{animationEnabled:false, header:({ scene, previous, navigation }) => {return <Header navigation={navigation} />}}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


