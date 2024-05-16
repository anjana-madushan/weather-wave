import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, StatusBar } from 'react-native';
import IconText from '../../components/iconText';
import moment from 'moment';

const City = ({ weatherData }) => {

  const { name, country, population, sunrise, sunset } = weatherData;
  const { container, city, cityText, countryStyle, image, riseSetText, rowLayout, riseSetWrapper, populationText, populationWrapper } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../../assets/images/city.jpg')} style={image}>
        <Text style={[city, cityText]}>{name}</Text>
        <Text style={[countryStyle, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText iconName={'user'} iconColor={'green'} bodyText={`Population: ${population}`} bodyTextStyles={populationText} />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText iconName={'sunrise'} iconColor={'red'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={riseSetText} />
          <IconText iconName={'sunset'} iconColor={'red'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={riseSetText} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    marginTop: 0
  },
  image: {
    flex: 1
  },
  city: {
    fontSize: 40,
  },
  countryStyle: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 30,
    color: 'red',
    marginLeft: 7.5,
    fontWeight: 'bold',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default City