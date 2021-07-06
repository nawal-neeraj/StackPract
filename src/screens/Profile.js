import React from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root} from 'native-base';
import StyleConfig from "../Config/StyleConfig";
import Icon from "react-native-vector-icons/Ionicons";

export default Profile =({navigation, route}) => {
  return (
    <Container>
        <StyleConfig />
        <Header>
            <Left>
                <Button onPress={navigation.goBack} transparent>
                    <Icon name="chevron-back-outline"/>
                </Button>
            </Left>
                <Body>
                    <Title>{route.params.title}</Title>
                </Body>
                <Right />
        </Header>
    </Container>
  );
}
