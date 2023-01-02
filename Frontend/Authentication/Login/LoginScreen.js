import { StyleSheet, Text, View, ActivityIndicator,
    TextInput, Pressable, onChangeText, TouchableOpacity, Image } from 'react-native';
import React, {useState, useContext} from 'react'
import { useNavigation} from '@react-navigation/native';
import {AuthContext} from '../Context/AuthContext';


function LoginScreen() {
    const navigation = useNavigation();
    // A useState variable that can hold the users email and password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Importing login function from AuthContext file 
    const {login, isLoading, goBackToDefaultScreen} = useContext(AuthContext);

    return (
        <View style={styles.screen}>
            <Pressable onPress={() => goBackToDefaultScreen()}>
                <Image source={require('../../assets/icons-back.png')} style={{marginTop: 30}}/>
            </Pressable>
            <View style={styles.containerScreen}>
                <View style={styles.inputGroup}>
                    {/*  */}
                   <TextInput placeholder='Your email' onChangeText={(email) => setEmail(email)} style={styles.buttons}/>     
                </View>
                <View style={styles.inputGroup}>
                   <TextInput placeholder='Your password' onChangeText={(password) => setPassword(password)} 
                   secureTextEntry={true} style={styles.buttons}  />     
                </View>

                {/* Buttons for login and signup */}
                <View style={styles.btnLogin}>
                    {/* I have a login function in the '../Context/AuthContext' file */}
                    <TouchableOpacity onPress={() => {login(email, password)} }>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
                {isLoading === true ? <ActivityIndicator size='large' color='#00ff00' /> : null}
            </View>
        </View>
    )
}

// 15b103f6
const styles = StyleSheet.create({
    // Screen style
    screen: {
        backgroundColor: '#004242',
        height: '100%',
    }, 
    // Container that holds all the connect elements
    containerScreen: {
        backgroundColor: '#004242',
        height: '80%',
        marginTop: '15%',
        borderRadius: 20,
    },
    inputGroup: {
        marginTop: 15,
        marginLeft: 10,
    }, 
    // Input buttons styles
    buttons: {
        width: '95%',
        fontSize: 16,
        color: 'black',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        marginVertical: 1,
        marginHorizontal: 5,
    },
    // Button style for login 
    btnLogin: {
        backgroundColor: '#66FFFF',
        width: '92%',
        height: 30,
        fontSize: 16,
        marginLeft: 15,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 5,
        marginTop: 40,
    },
    btnText: {
        fontSize: 20,
        color: 'black',
    },
})

export default LoginScreen;