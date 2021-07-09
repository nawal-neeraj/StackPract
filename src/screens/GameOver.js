import {Text, Button, Container } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default GameOver =(props) => {
    return (
        <Container style={styles.containor}>
            <View style={{padding:5}}>
                <Text>Game is Over!</Text>
            </View>
            <View style={{padding:5}}>
                <Text>Number of Rounds: {props.roundsNumber}</Text>
            </View>
            <View style={{padding:5}}>
                <Button onPress={props.onRestart}>
                    <Text>Restart the Game</Text>
                </Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    containor: {
        alignItems: 'center',
        justifyContent: 'center', flex: 1
    }
})