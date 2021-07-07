import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root, List, ListItem } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";
import StyleConfig from "../Config/StyleConfig";
import { AppTheme } from "../themes/AppThemes";

import Input from "../components/Input";

export default Game =({navigation}) => {

   const [takeNum, setTakeNum] = useState('')

   const handleInput = (value) => {
        setTakeNum(value.replace(/[^0-9]/g), '')
        console.log(value)
   }

  return (
   <Container>
       <StyleConfig />
       <Header>
           <Left>
               <Button transparent onPress={navigation.goBack}>
                    <Icon name="chevron-back-outline" />
               </Button>
           </Left>
           <Body style={{flex:3}}>
               <Title>Guess the Number</Title>
           </Body>
           <Right />
       </Header>
        <Content>
            <View style={{paddingTop:10, paddingBottom:10}}>
                <Text style={{fontSize:24, textAlign:'center'}}>Start a New Game !</Text>
            </View>
            <View style={styles.cardBox}>
                <View>
                    <Text>Select a Number</Text>
                </View>
                <Input style={styles.inputBox} 
                keyboardType="numeric" 
                maxLength={2} 
                value={takeNum}
                onChangeText={handleInput}
                />
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Button block transparent>
                            <Text style={{color:AppTheme.primary}}>Reset</Text>
                        </Button>
                    </View>
                    <View style={{flex:1}}>
                        <Button block transparent>
                            <Text style={{color:AppTheme.warning}}>Confirm</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </Content>
   </Container>
  );
}
const styles = StyleSheet.create({
    cardBox:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        alignSelf:'center',
        shadowColor:'#000',
        shadowOffset:{width:0, height: 2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8,
        backgroundColor:'#fff',
        padding:20,
    },

    inputBox:{
        width:"60%",
    }
})