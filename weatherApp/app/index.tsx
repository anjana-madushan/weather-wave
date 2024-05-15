import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from '../src/components/tabs';
import { UseGetWeather } from '../src/hooks/useGetWeather';

const App = () => {

  const [loading, error, weather] = UseGetWeather();

  console.log(loading, error, weather);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} color={'blue'} />
      </View>
    )
  }

  return (
    <NavigationContainer independent={true}>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App