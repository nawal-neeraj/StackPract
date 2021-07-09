import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
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
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const [round, setRound] = useState(0);

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(round)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Really!!', 'You kmow you are wrong', [
                { text: 'Sorry', style: 'cancel' }
            ]);
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber)
        setRound(currRound => currRound + 1)
    }



    return (
        <View>
            <View style={{ padding: 10 }}>
                <Text style={{ textAlign: 'center' }}>Opponent's Guess</Text>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={{ flex: 1, }}>
                    <Button bordered block onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Text>Lower</Text>
                    </Button>
                </View>
                <View style={{ flex: 0.1 }}></View>
                <View style={{ flex: 1, }}>
                    <Button bordered block onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Text>Greater</Text>
                    </Button>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        padding: 30
    }
})