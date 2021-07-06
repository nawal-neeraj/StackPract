import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Container } from 'native-base';
import { marginTop } from 'styled-system';


export default function App() {
  return (
    <NativeBaseProvider>
      <Container style={styles.Cont}>
        <View>
          <Text style={{textAlign:'center'}}>
            Hello This is Ios
          </Text>
        </View>
      </Container>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Cont: {
    justifyContent: 'center',
    flex: 1,
    alignItems:'center'
  }
})