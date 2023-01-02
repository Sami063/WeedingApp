import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, onPress, Pressable} from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute} from '@react-navigation/native';
import SecondStack from '../Navigation/SecondStack';
import {AuthContext} from '../Authentication/Context/AuthContext';
const DefaultStack = () => {
    const navigation = useNavigation(null);
    const {admin, participant} = useContext(AuthContext);
    const [option, setOption] = useState([
        {name: 'Participants', id: 1},
        {name: 'Admin', id: 2},
    ]);

        // Each click event have its own screen it depand on what you click, by default there is no screen displayed.
    const [screen, setScreen] = useState()
    function handleOption(name) {
        switch (name) {
            case 'Participants':
                participant();
                break;
            case 'Admin':
                admin();
                break;
        }  
    }

    // const Participants = () => {
        
    // }

    // const Admin = () => {
    //     return (
    //         <View style={{backgroundColor: 'orange', height: '100%', width: '100%'}}>
               
    //         </View>
    //     )
    // }
    if(!screen) {
        return (
        <View style={styles.screen}>
            <Text style={styles.textHeader}>Please choose one of the folowing options!</Text>
            {option.map((option) => { 
                return (
                    <View style={styles.container} key={option.id}>
                        <Pressable onPress={() => handleOption(option.name)} style={styles.box}>
                            <Text style={styles.text} > {option.name}</Text>
                        </Pressable>
                    </View>
                ) 
            })}
        </View>
        )
    } else {
        return (
            screen
        )
    }
}

export default DefaultStack;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#177',
        height: '100%',
    },
    container: {
        alignItems: 'center', 
    },
    box : {
        width : '85%',
        height : 30,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
    },
    resBox : {
        width : '85%',
        height : 80,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
    },
    text : {
        fontSize: 20,
        textAlign : 'center',
    },
    textHeader : {
        fontSize: 20,
        textAlign : 'center',
        marginTop: 30,
        marginBottom: 60,
        color: 'white',
    }, 
    cards : {
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'white',
        width: 90,
        height: 25,
        // flexDirection: 'row',
    },
})
