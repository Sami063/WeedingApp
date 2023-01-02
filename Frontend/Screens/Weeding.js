import { View, Text, Alert, StyleSheet, Pressable, ScrollView,
        TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useContext} from 'react'
import {AuthContext} from '../Authentication/Context/AuthContext';
import axios from 'axios';

function Weeding() {    

    const {goBackToDefaultScreen} = useContext(AuthContext);
    const navigation = useNavigation();
    const [id, setId] = useState()
    const [data, setData] = useState([])

    const [partySize, setPartySize] = useState(0)
    
    axios.get('http://localhost:4000/api/get/weeding')
        .then(response => {
            // console.log(response.data)
            setData(response.data)
        })
    // The choiced Wedding party
    const handleWeeding = (id) => { 
        setId(id)
        setPartySize(1)
        navigation.navigate('Join', {
            partySize: partySize})
    } 
    // A list over upcomming wedding
    return (
    <SafeAreaView style={styles.screen}>
        <Pressable onPress={() => goBackToDefaultScreen()}>
            <Image source={require('../assets/icons-back.png')} style={{width: 50, height: 12, margin: 5}}/>
        </Pressable>
        <ScrollView>
        <View>  
                {data.map((option) => { 
                    return (
                    <View style={styles.card} key={option.id} >
                        <View style={styles.cardChild}>
                            <Text style={styles.text} >Name: {option.herName} </Text>
                            <Text style={styles.text} >Date: {option.date} </Text>
                            <Text style={styles.text} >Location: {option.location} </Text>
                        </View>
                        <Pressable onPress={() => handleWeeding(option.id)} style={styles.textJoin}>
                           <Text style={styles.textStyle}>Join Us</Text>
                        </Pressable>
                    </View>
                    )
                })}
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    screen : {
        // alignItems: 'center',
        backgroundColor: 'grey',
        },
        card : {
            width: 350,
            marginBottom: 10,
            backgroundColor: 'green',
            borderRadius: 5,
            margin: 5,
        },
        text: {
            color: 'white',
        },
        cardChild: {
            margin: 5,
        },
        textStyle: {
            color: 'white',
            fontSize: 20,
        },
        textJoin: { 
            backgroundColor: 'blue',
            marginTop: 10,
        },

        // -------- ---------- ------- 
        title: {
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
        },
        screen: {
            backgroundColor: '#004742',
            height: '100%',
        }, 
        containerScreen: {
            backgroundColor: '#004242',
            height: '80%',
            marginTop: '20%',
            borderRadius: 15,
        },
        inputGroup: {
            marginTop: 15,
            marginLeft: 10,
        }, 
        textInput: {
            width: '95%',
            fontSize: 16,
            color: 'black',
            borderWidth: 1,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: 'white',
            marginVertical: 0,
            marginHorizontal: 5,
        },
        btnRegister: {
            backgroundColor: 'green',
            width: '90%',
            height: 30,
            marginLeft: 15, marginTop: 25,
            alignItems: 'center',
            alignContent: 'center',
            borderRadius: 5,
        }, 
        btnLogin: {
            alignItems: 'center',
            alignContent: 'center',
        },
        btnText: {
            fontSize: 18,
            color: 'white',
        },
        link: {
            fontSize: 18,
    
        },

        // ------------- ------ ------------- ---
        MenuScreenContainer: {
            alignItems: 'center',
            alignContent: 'center',
    
        },
        filterButton: {
            width : 50,
            height : 30,
            backgroundColor: 'blue',
            margin: 10,
            borderRadius: 5, 
            flexDirection:'row',
    
        },
        screenText: {
        }
      })


export default Weeding;
