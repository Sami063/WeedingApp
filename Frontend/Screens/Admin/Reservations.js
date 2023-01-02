import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, onPress, Pressable, Image} from 'react-native';
import axios from 'axios';

const Reservations = () => {
    const [guests, setGuests] = useState([])
    const [option, setOption] = useState([
        {name: 'Participants', id: 1},
        {name: 'Orders', id: 2},
    ]);

        // Each click event have its own screen it depand on what you click, by default there is no screen displayed.
    const [screen, setScreen] = useState(null)
    function handleOption(name) {
        switch (name) {
            case 'Participants':
                setScreen(Participants())
                break;
            case 'Orders':
                setScreen(Orders())
                break;
        }  
    }

    axios.get('http://10.33.21.222:4000/api/guests')
        .then(response => {
            setGuests(response.data)
        })
    const Participants = () => {
        return (
            <SafeAreaView>
                <Pressable onPress={() => setScreen(null)}>
                    <Image source={require('../../assets/icons-back.png')} style={{width: 50, height: 12, margin: 5}}/>
                </Pressable>
                <ScrollView>
                  <View style={{ height: '100%', width: '100%', backgroundColor: 'green', flexDirection: 'row', flexWrap: 'wrap'}}>
                     {guests.map((guest) => {
                         return (
                         <View style={styles.card} key={guest.id} >
                             <View style={{margin: 10}}>
                                 <Text style={{color: 'black', fontSize: 14 }} >First name: {guest.firstName} </Text>
                                 <Text style={{color: 'black', fontSize: 14 }} >Last name: {guest.lastName} </Text>
                                 <Text style={{color: 'black', fontSize: 14 }} >Email: {guest.email} </Text>
                             </View>
                         </View>
                     )
                     })}
                 </View>   
                </ScrollView>    
            </SafeAreaView>
            
            
        )
    }

    const Orders = () => {
        return (
            <SafeAreaView>
                <Pressable onPress={() => setScreen(null)}>
                    <Image source={require('../../assets/icons-back.png')} style={{width: 50, height: 12, margin: 5}}/>
                </Pressable>
                <ScrollView>
                    <View style={{backgroundColor: 'orange', height: '100%', width: '100%'}}>
                    
                    </View>
                </ScrollView>
            </SafeAreaView>
            
        )
    }
    if(!screen) {
        return (
        <View style={styles.screen}>
            <Text style={styles.textHeader}>Here is your account info, and reservations.</Text>
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

export default Reservations;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#177',
        height: '100%',
    },
    container: {
        alignItems: 'center', 
    },
    card : {
        width: '45%',
        height: 90,
        marginTop: 5,
        marginLeft: 12,
        backgroundColor: 'white',
        borderRadius: 5,
        // flexDirection: 'row'
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
    // card : {
    //     borderRadius: 5,
    //     margin: 5,
    //     backgroundColor: 'white',
    //     width: 50,
    //     height: 25,
    //     flexDirection: 'row',
    // },
})
