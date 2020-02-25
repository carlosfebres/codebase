import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/Home';
import UserScreen from './src/screens/User/User';
import 'antd-mobile/dist/antd-mobile.css';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
