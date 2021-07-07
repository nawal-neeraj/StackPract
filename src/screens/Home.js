import React, { useState } from 'react';
import { StyleSheet, View, TextInput ,Dimensions, FlatList} from 'react-native';
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

    const handleTouch = (item) => {
        console.log(item.id,"<===")
        setName(name => {
            return name.filter((rmv) => rmv.id !== item.id)
        })
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
                    <List>
                        <ListItem noBorder>
                            <Text>Page Title: </Text>
                    <TextInput style={{backgroundColor:'#d0cccc', padding:10, width:winds.width * 0.5}} value={title} onChangeText={handleTitel} placeholder="Enter Title" />
                        </ListItem>
                    </List>
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
                <View style={{padding:10}}>
                    {/* {name.map(item => (
                        <View key={item.id}>
                            <List>
                                <ListItem><Text>{item.value}</Text></ListItem>
                            </List>
                        </View>
                    ))} */}
                    <FlatList
                    data = {name}
                    keyExtractor = {item => item.id}
                    renderItem = {({item}) => (
                        <View>
                            <List>
                                <ListItem onPress={handleTouch.bind(this, item)}><Text>{item.value}</Text></ListItem>
                            </List>
                        </View>
                    )}
                    />
                </View>
            </View>
                <View style={{flexDirection:'row', marginBottom:winds.height * 0.03, width: winds.width * 0.9, alignSelf:'center'}}>
                    <View style={{flex:1}}>
                    <Button block onPress={handlePage.bind(this)}>
                        <Text>Go To</Text>
                    </Button>
                    </View>
                    <View style={{flex: 0.1}} />
                    <View style={{flex:1}}>
                        <Button block onPress={handleList.bind(this)}>
                        <Text>Add Name</Text>
                        </Button>
                    </View>
                </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    Cont: {
        flex: 1
    }
})