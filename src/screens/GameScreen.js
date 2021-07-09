import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "native-base";

import Card from "../themes/Card";
import NumberContainer from '../themes/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
        return (generateRandomBetween(min, max, exclude))
    } else {
        return rndNum;
    }

}

export default GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    return (
        <View>
            <View style={{padding:10}}>
            <Text style={{textAlign:'center'}}>Opponent's Guess</Text>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={{flex:1,}}>
                    <Button bordered block><Text>Lower</Text></Button>
                </View>
                <View style={{flex:0.1}}></View>
                <View style={{flex:1,}}>
                    <Button bordered block><Text>Greater</Text></Button>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        padding:30
    }
})