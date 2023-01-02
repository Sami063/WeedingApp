import { StyleSheet, Text, View,Alert, TouchableOpacity, Pressable, Image } from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useContext, } from 'react'; 
import axios from 'axios';

function Recipt() {
    const route = useRoute()
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>burger: {route.params.burger}</Text>
                <Image source={require('../assets/successful-logo.png')} style={styles.imageStyle}/>
            </View>
        </View>
    )
}

export default Recipt;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%', 
        backgroundColor: 'orange', 
    },
    innerContainer: {
        alignItems: 'center',
    },
    imageStyle: {
        width: 300,
        height: 300,

    },
})