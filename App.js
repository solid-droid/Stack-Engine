import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Header from './components/Header';



const Stack = createStackNavigator();
export default function App() {

  const [isDev, showDev] = React.useState(false);

  const homePage = ()=> <Home isDev = {isDev} />
  const header = () => <Header isDev = {isDev} showDev = {showDev} />

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{animationEnabled:false, header:header}}>
      <Stack.Screen name="home" component={homePage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


