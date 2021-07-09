import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root} from 'native-base';
import StyleConfig from "./src/Config/StyleConfig";
import Icon from "react-native-vector-icons/Ionicons";
import GameScreen from './src/screens/GameScreen';
import Game from './src/screens/Game';

import Routes from "./src/route/Routes";


export default function App() {
  const [userChNumber, setUserChNumber] = useState();

const startGameHandler = (userNumber) => {
  setUserChNumber(userNumber)
}

let contents = <Game onStartGame= {startGameHandler} />

if(userChNumber) {
    contents = <GameScreen userChoice= {userChNumber} />
}
  return (
      // <Routes />
      <Container>
        <StyleConfig />
        <Header>
            <Left>
                <Button transparent>
                    <Icon name="chevron-back-outline"/>
                </Button>
            </Left>
                <Body>
                    {/* {route.params.title ? <Title>{route.params.title}</Title> :  */}
                    <Title>Guess the number</Title>
                </Body>
                <Right />
        </Header>
        <Content>
            {contents}
        </Content>
    </Container>
  );

}

