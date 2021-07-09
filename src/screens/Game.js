import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root, List, ListItem } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";
import StyleConfig from "../Config/StyleConfig";
import { AppTheme } from "../themes/AppThemes";

import Input from "../components/Input";
import Card from "../themes/Card";
import NumberContainer from "../themes/NumberContainer";
const window = Dimensions.get('window')

export default Game = (props) => {

    const [takeNum, setTakeNum] = useState('')
    const [userNumber, setUserNumber] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [numRegex, setNumregex] = useState(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)

    const handleInput = (value) => {
        setTakeNum(value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''))
    }

    const HandleConfirm = () => {
        const userChodenNumber = parseInt(takeNum)
        //    console.log(parseInt(takeNum),"user number")
        if (isNaN(userChodenNumber) || userChodenNumber <= 0 || userChodenNumber > 99) {
            setUserNumber('')
            Alert.alert('Ivalid Number!', "Number should between 1 and 99.", [{ text: "Okay", style: 'destructive', onPress: handleRest }])
            return;
        }
        setConfirm(true);
        setTakeNum('')
        setUserNumber(userChodenNumber)
    }

    const handleRest = () => {
        setTakeNum('')
        setConfirm(false)
    }

    let confirmdOutput;

    if (confirm) {
        confirmdOutput = (
            <Card style={{ marginTop: 10 }}>
                <Text style={{ textAlign: 'center' }}>You Selected </Text>
                <NumberContainer>{userNumber}</NumberContainer>
                <View>
                    <Button bordered onPress={() => props.onStartGame(userNumber)}><Text>Start Game</Text></Button>
                </View>
            </Card>
        );
    }

    return (
        <Container>
            <StyleConfig />
            {/* <Header>
           <Left>
               <Button transparent>
                    <Icon name="chevron-back-outline" />
               </Button>
           </Left>
           <Body style={{flex:3}}>
               <Title>Guess the Number</Title>
           </Body>
           <Right />
       </Header> */}
            <Content>
                <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center' }}>Start a New Game !</Text>
                </View>
                <Card style={styles.cardBox}>
                    <View>
                        <Text>Select a Number</Text>
                    </View>
                    <Input style={styles.inputBox}
                        keyboardType="numeric"
                        maxLength={2}
                        value={takeNum}
                        onChangeText={handleInput}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Button block transparent onPress={handleRest}>
                                <Text style={{ color: AppTheme.primary }}>Reset</Text>
                            </Button>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button block transparent onPress={HandleConfirm}>
                                <Text style={{ color: AppTheme.warning }}>Confirm</Text>
                            </Button>
                        </View>
                    </View>
                </Card>
                <View>
                    {confirmdOutput}
                </View>
            </Content>
            {/* {!confirm || userNumber === "" || userNumber === NaN ? <View>{console.log(userNumber,"check dekhte")}</View> :
        <View>{console.log(userNumber,"check")}<Text style={{textAlign:'center', marginBottom: '4%'}}>Your number is: {userNumber}</Text></View> } */}
        </Container>
    );
}
const styles = StyleSheet.create({

    inputBox: {
        width: "60%",
    }
})