import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root } from 'native-base';
import StyleConfig from "./src/Config/StyleConfig";
import Icon from "react-native-vector-icons/Ionicons";
import GameScreen from './src/screens/GameScreen';
import Game from './src/screens/Game';
import GameOver from "./src/screens/GameOver";

import Routes from "./src/route/Routes";


export default function App() {

  const [userChNumber, setUserChNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const configNewGame = () => {
    setGuessRound(0)
    setUserChNumber(null)
  }

  const startGameHandler = (userNumber) => {
    setUserChNumber(userNumber)
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRound(numOfRounds)
  }

  let contents = <Game onStartGame={startGameHandler} />

  if (userChNumber && guessRound <= 0) {
    contents = <GameScreen userChoice={userChNumber} onGameOver={gameOverHandler} onRestart={configNewGame}/>
  } else if (guessRound > 0) {
    contents = <GameOver roundsNumber={guessRound} onRestart={configNewGame}/>
  }
  return (
    // <Routes />
    <Container>
      <StyleConfig />
      <Header>
        <Left>
          <Button transparent>
            <Icon name="chevron-back-outline" />
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

