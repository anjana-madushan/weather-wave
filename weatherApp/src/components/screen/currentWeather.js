import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../../components/rowText';
import { WeatherType } from '../../utilities/weatherType';

const CurrentWeather = () => {

  const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, msg } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          container={highLow}
          msgOne={'High: 8'}
          msgTwo={'Low: 6'}
          msgOneStyle={highLow}
          msgTwoStyle={highLow} />
      </View>
      <RowText
        container={bodyWrapper}
        msgOne={'It is Sunny'}
        msgTwo={WeatherType['ThunderStorm'].message}
        msgOneStyle={description}
        msgTwoStyle={msg} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'orange'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: ' black'
  },
  highLow: {
    fontSize: 20,
    color: ' black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  msg: {
    fontSize: 25
  }
});

export default CurrentWeather