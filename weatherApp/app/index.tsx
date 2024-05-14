import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from '../src/components/tabs';

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs />
    </NavigationContainer>
  )
}

export default App