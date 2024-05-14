import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, StatusBar } from 'react-native';
import IconText from '../../components/iconText';

const City = () => {

  const { container, city, cityText, country, image, riseSetText, rowLayout, riseSetWrapper, populationText, populationWrapper } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../../assets/images/city.jpg')} style={image}>
        <Text style={[city, cityText]}>London</Text>
        <Text style={[country, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText iconName={'user'} iconColor={'green'} bodyText={'8000'} bodyTextStyles={populationText} />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText iconName={'sunrise'} iconColor={'red'} bodyText={'10:46:57 AM'} bodyTextStyles={riseSetText} />
          <IconText iconName={'sunset'} iconColor={'red'} bodyText={'15:56:42 PM'} bodyTextStyles={riseSetText} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1
  },
  city: {
    fontSize: 40,
  },
  country: {
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