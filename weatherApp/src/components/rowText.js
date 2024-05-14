import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RowText = (props) => {

  const { container, msgOne, msgOneStyle, msgTwo, msgTwoStyle } = props;

  return (
    <View style={container}>
      <Text style={msgOneStyle}>{msgOne}</Text>
      <Text style={msgTwoStyle}>{msgTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
});

export default RowText