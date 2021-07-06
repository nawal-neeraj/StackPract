import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";


export default function App() {
  
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  return (
      <Container>
        <MyStatusBar />
        <Header>
          <Left>
            <Button transparent> 
                <Icon name='arrow-back-outline' size={20}/>
            </Button>
          </Left>
        </Header>
        <View style={styles.Cont}>
          <Text style={{textAlign:'center'}}>
            Hello This is Ios
          </Text>
        </View>
      </Container>
  );
}

const styles = StyleSheet.create({
  Cont: {
    justifyContent: 'center',
    flex: 1,
    alignItems:'center'
  }
})