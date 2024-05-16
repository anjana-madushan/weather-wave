import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../../components/rowText';
import { WeatherType } from '../../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {

  const { wrapper, container, tempStyle, feels, highLowWrapper, highLow, bodyWrapper, description, msg } = styles;

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={[wrapper, { backgroundColor: WeatherType[weatherCondition]?.backgroundColor }]}>
      <View style={container}>
        <Feather name={WeatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyle}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels Like ${feels_like}°`}</Text>
        <RowText
          container={highLow}
          msgOne={`High: ${temp_max}°`}
          msgTwo={`Low: ${temp_min}°`}
          msgOneStyle={highLow}
          msgTwoStyle={highLow} />
      </View>
      <RowText
        container={bodyWrapper}
        msgOne={weather[0]?.description}
        msgTwo={WeatherType[weatherCondition]?.message}
        msgOneStyle={description}
        msgTwoStyle={msg} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyle: {
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
    fontSize: 43
  },
  msg: {
    fontSize: 25
  }
});

export default CurrentWeather