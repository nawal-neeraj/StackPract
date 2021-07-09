import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

export default Card = (props) => {
  return (
    <View style={{...styles.cardBox, ...props.style}}>
      {props.children}
     </View>
  );
}

const styles = StyleSheet.create({
    cardBox:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        alignSelf:'center',
        shadowColor:'#000',
        shadowOffset:{width:0, height: 2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        backgroundColor:'#fff',
        padding:20,
        alignContent:'center'
    }
})