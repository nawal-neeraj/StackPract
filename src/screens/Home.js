import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root} from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";
import  StyleConfig from "../Config/StyleConfig";

export default Home = ({navigation}) => {

    handlePage = () => {
        // console.log(navigation.na,"check")
        navigation.navigate('Profile',{title:"Profile Form"})
    }

    const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
          <SafeAreaView>
            <StatusBar translucent={true} backgroundColor={backgroundColor} {...props} />
          </SafeAreaView>
        </View>
      );

  return (
    <Container>
        <StyleConfig />
        <Header>
          <Left>
            <Button transparent> 
                <Icon name='arrow-back-outline' size={20}/>
            </Button>
          </Left>
          <Body>
            <Title>
              Home Page
            </Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.Cont}>
            <View>
          <Text style={{textAlign:'center'}}>
            Hello This is Ios
          </Text>
            </View>
          <View style={{padding:10}}>
          <Button style={{alignSelf:'center'}} onPress={handlePage.bind(this)}>
              <Text>Go To</Text>
          </Button>
          </View>
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