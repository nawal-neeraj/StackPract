import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

export default Input = (props) => {
  return (
    <TextInput {...props} style={{...styles.InputStyle, ...props.style}} />
  );
}

const styles = StyleSheet.create({
    InputStyle : {
        height:30,
        borderColor:'green',
        borderWidth:0.5,
        marginVertical:10,
        borderRadius:15,
        paddingLeft:10
    }
})
