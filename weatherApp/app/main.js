import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from '../src/components/tabs';
import { UseGetWeather } from '../src/hooks/useGetWeather';
import ErrorItem from '../src/components/errorItem';

const App = () => {

  const [loading, error, weather] = UseGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer independent={true}>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }


  if (loading) {
    return (
      <View style={styles.container}>
        {error ? (<ErrorItem />) : (<ActivityIndicator size={50} color={'blue'} />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App