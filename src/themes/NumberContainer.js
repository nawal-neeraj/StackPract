import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppTheme } from './AppThemes';

export default NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:AppTheme.primary,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },

    number: {
       color:AppTheme.primary,
       fontSize:22 
    }
})