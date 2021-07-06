import React, { useState } from 'react';
import { StyleSheet, View, TextInput ,Dimensions} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root, Input, List, ListItem } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";
import StyleConfig from "../Config/StyleConfig";
const winds = Dimensions.get('window')

export default Home = ({ navigation }) => {

    const [title, setTitle] = useState("");
    const [name, setName] = useState([])


    handlePage = () => {
        // console.log(navigation.na,"check")
        // navigation.navigate('Profile', { title: title })
        setName([...name, title])
        
    }

    const handleTitel = (value) => {
        setTitle(value)
        // console.log(value)
    }

    // const handleName = (value) => {
        
    // }

    // const MyStatusBar = ({ backgroundColor, ...props }) => (
    //     <View style={[styles.statusBar, { backgroundColor }]}>
    //         <SafeAreaView>
    //             <StatusBar translucent={true} backgroundColor={backgroundColor} {...props} />
    //         </SafeAreaView>
    //     </View>
    // );

    return (
        <Container>
            <StyleConfig />
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back-outline' size={20} />
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
                <View style={{padding:10}}>
                    <TextInput value={title} onChangeText={handleTitel} placeholder="Enter Title" />
                </View>
                {/* <View style={{padding:10}}>
                    <TextInput value={name} onChangeText={handleName} placeholder="Enter Names" />
                </View> */}
                {/* <View style={{padding:10}}>
                    <Input value = {state} onChangeText={(e) => setState(e)} placeholder="Enter Title" />
                </View> */}
                <View style={{padding:10}}>
                    <Text style={{ textAlign: 'center' }}>
                        Hello This is Ios
                    </Text>
                </View>
                <View >
                    <Button style={{ alignSelf: 'center' }} onPress={handlePage.bind(this)}>
                        <Text>Go To</Text>
                    </Button>
                </View>
                <View style={{padding:10}}>
                    {name.map(item => (
                        <View>
                            <List>
                                <ListItem><Text>{item}</Text></ListItem>
                            </List>
                        </View>
                    ))}
                </View>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    Cont: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    }
})