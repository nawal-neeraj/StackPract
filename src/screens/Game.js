import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root, List, ListItem } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";
import StyleConfig from "../Config/StyleConfig";
import { AppTheme } from "../themes/AppThemes";

import Input from "../components/Input";

const window = Dimensions.get('window')

export default Game =({navigation}) => {

   const [takeNum, setTakeNum] = useState('')
   const [userNumber, setUserNumber] = useState('')
   const [confirm, setConfirm] =useState(false)
   const [numRegex, setNumregex] = useState(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)

   const handleInput = (value) => {
        setTakeNum(value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,''))
   }

   const HandleConfirm = () => {
       setConfirm(true);
       const userNumber = parseInt(takeNum);
       if(userNumber === NaN || userNumber <= 0 || userNumber > 99){
           return;
       }
       setUserNumber(parseInt(takeNum))
       setTakeNum('')
   }

   const handleRest = () => {
    setTakeNum('')
       setConfirm(false)
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
                        <Button block transparent onPress={handleRest}>
                            <Text style={{color:AppTheme.primary}}>Reset</Text>
                        </Button>
                    </View>
                    <View style={{flex:1}}>
                        <Button block transparent onPress={HandleConfirm}>
                            <Text style={{color:AppTheme.warning}}>Confirm</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </Content>
        {confirm ? <View><Text style={{textAlign:'center', marginBottom: '4%'}}>Your number is: {userNumber}</Text></View> : <View></View>}
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