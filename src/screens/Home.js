import React, { useState } from 'react';
import { StyleSheet, View, TextInput ,Dimensions} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Root, Input, List, ListItem } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";
import StyleConfig from "../Config/StyleConfig";
const winds = Dimensions.get('window')

export default Home = ({ navigation }) => {

    const [title, setTitle] = useState("");
    const [addname, setAddname] = useState("");
    const [name, setName] = useState([])


    const handlePage = () => {
        // console.log(navigation.na,"check")
        navigation.navigate('Profile', { title: title })
    }

    const handleList = () => {
        setName([...name, {id: Math.random().toString(), value:addname}])
    }

    const handleTitel = (value) => {
        setTitle(value)
        // console.log(value)
    }

    const handleName = (value) => {
        setAddname(value)
    }

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
                    <Text style={{ textAlign: 'center' }}>
                        Hello This is Ios
                    </Text>
                </View>
                <View style={{padding:10}}>
                    <TextInput style={{backgroundColor:'#d0cccc', padding:10, width:winds.width * 0.5}} value={title} onChangeText={handleTitel} placeholder="Enter Title" />
                </View>
                <View style={{padding:10}}>
                    <List>
                        <ListItem noBorder>
                            <Text >Add List: </Text>
                    <TextInput style={{backgroundColor:'#d0cccc', padding:10, width:winds.width * 0.5}} value={addname} onChangeText={handleName} placeholder="Enter Names" />
                        </ListItem>

                    </List>
                </View>
                {/* <View style={{padding:10}}>
                    <Input value = {state} onChangeText={(e) => setState(e)} placeholder="Enter Title" />
                </View> */}
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                    <Button style={{ alignSelf: 'center' }} onPress={handlePage.bind(this)}>
                        <Text>Go To</Text>
                    </Button>
                    </View>
                    <View style={{flex:1}}>
                        <Button style={{ alignSelf: 'center' }} onPress={handleList.bind(this)}>
                        <Text>Add Name</Text>
                        </Button>
                    </View>
                </View>
                <View style={{padding:10}}>
                    {name.map(item => (
                        <View key={item.id}>
                            <List>
                                <ListItem><Text>{item.value}</Text></ListItem>
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