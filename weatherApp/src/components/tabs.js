import React from 'react';
import CurrentWeather from '../components/screen/currentWeather';
import UpcomingWeather from '../components/screen/upcomingWeather';
import City from '../components/screen/city';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

//tab object initialization
const Tab = createBottomTabNavigator();

export const Tabs = ({ weather }) => {

  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'grey',
      tabBarStyle: {
        backgroundColor: 'lightblue'
      },
      headerStyle: {
        backgroundColor: 'lightblue',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'tomato',
      }
    }}>
      <Tab.Screen name={'CURRENT'} options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name={'droplet'}
            size={25}
            color={focused ? 'tomato' : 'black'} />)
      }}>
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen name={'UPCOMING'} options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name={'clock'}
            size={25}
            color={focused ? 'tomato' : 'black'} />)
      }} >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen name={'CITY'} options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name={'home'}
            size={25}
            color={focused ? 'tomato' : 'black'} />)
      }} >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}