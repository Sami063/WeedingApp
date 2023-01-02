import { StyleSheet, Text, Alert, View, SafeAreaView, TextInput, Form, onChangeText, Pressable } from 'react-native';
import React, {useState, useEffect, route} from 'react'; 
import axios from 'axios';
import { useNavigation} from '@react-navigation/native';
function RegisterScreen() {
    // Object 
    // const [userInfo, setUserInfo] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const navigation = useNavigation(); 

    const register = () => {
        axios.post('http://localhost:4000/api/register', {
            firstName,
            lastName,
            email
            })
            .then((res) => {
                console.log(res.data)
            })
        navigation.navigate('Food & Drink', {
            email: email,
        })
    }

    return (
    <View style={styles.screen}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 20, marginTop: 5}}>Partcipant Information</Text>
        <View style={styles.containerScreen}>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Your first name' onChangeText={(firstName) => setFirstName(firstName)} style={styles.textInput}/>     
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Your last name' onChangeText={(lastName) => setLastName(lastName)} style={styles.textInput}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Your email' onChangeText={(email) => setEmail(email)} style={styles.textInput}/>     
            </View>
            {/* Continue btn - we will link to the 'food & drink' screen */}
            <View style={styles.btnRegister}>
                <Pressable onPress={() => register()}>
                    <Text style={styles.btnText}>Join</Text> 
                </Pressable>
            </View>
        </View>
    </View>
    )}

// Form styles
const styles = StyleSheet.create({
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

    }
})

export default RegisterScreen;
