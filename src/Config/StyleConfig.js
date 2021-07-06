import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function StyleConfig() {
    const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
          <SafeAreaView>
            <StatusBar translucent={true} backgroundColor={backgroundColor} {...props} />
          </SafeAreaView>
        </View>
      );
  return (
    <MyStatusBar ackgroundColor="#d0cccc"/>
  );
}
const styles = StyleSheet.create({})