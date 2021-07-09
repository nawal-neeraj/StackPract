import React, { useState } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root } from 'native-base';
import StyleConfig from "../Config/StyleConfig";
import Icon from "react-native-vector-icons/Ionicons";
import GameScreen from './GameScreen';
import Game from './Game';

export default Profile = ({ navigation }) => {

    const [userChNumber, setUserChNumber] = useState();

    const startGameHandler = (userNumber) => {
        setUserChNumber(userNumber)
    }

    let contents = <Game onStartGame={startGameHandler} />

    if (userChNumber) {
        contents = <GameScreen userChoice={userChNumber} />
    }

    return (
        <Container>
            <StyleConfig />
            <Header>
                <Left>
                    <Button onPress={navigation.goBack} transparent>
                        <Icon name="chevron-back-outline" />
                    </Button>
                </Left>
                <Body>
                    {/* {route.params.title ? <Title>{route.params.title}</Title> :  */}
                    <Title>Profile</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <View style={{ paddingTop: '5%', paddingBottom: 10 }}>
                    <View>
                    <Text>Guess the number</Text>
                    </View>
                </View>
                {contents}
            </Content>
        </Container>
    );
}
