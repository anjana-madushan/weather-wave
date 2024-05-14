import React from 'react';
import CurrentWeather from '../../src/components/screen/currentWeather';
import UpcomingWeather from '../../src/components/screen/upcomingWeather';
import City from '../../src/components/screen/city';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//tab object initialization
const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs.Navigator>
        <Tabs.Screen name={'current'} component={CurrentWeather} />
        <Tabs.Screen name={'upcoming'} component={UpcomingWeather} />
        <Tabs.Screen name={'city'} component={City} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App