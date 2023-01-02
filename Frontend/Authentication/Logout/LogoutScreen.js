import { StyleSheet, Text, View, SafeAreaView, TextInput, Form, onChangeText, TouchableOpacity } from 'react-native';
import React, {useContext } from 'react';
import {AuthContext} from '../Context/AuthContext';

export default LogoutScreen;
function LogoutScreen() {

    const {logout} = useContext(AuthContext); 

    return (
        <View style={styles.screen}>
            <View>
                <TouchableOpacity onPress={() => {logout()}}  style={styles.logout}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    }, 
    logout: {
        backgroundColor: 'green',
        width: '90%',
        height: 30,
        marginLeft: 15, marginTop: 25,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 5,
    }, 
    text: {
        color: 'white',
        fontSize: 20,
    }
})