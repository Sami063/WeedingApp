import { View, Text, Alert, StyleSheet, Pressable, ScrollView,
        TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useContext} from 'react'
import axios from 'axios';

function Weeding() {    
    const navigation = useNavigation();
    const [id, setId] = useState()

    const [hisName, setHisName] = useState()
    const [herName, setHerName] = useState()
    const [date, setDate] = useState()
    const [location, setLocation] = useState()
    const [partySize, setPartySize] = useState(0)

    const [screen, setScreen] = useState(null)
    const [option, setOption] = useState([
        {
            name: 'Samuel & Kewanit',
            address: 'addis Ababa', 
            date: '15.10.2022',
            id: 1 
        },

        {
            name: 'Samuel & Kewanit',
            address: 'addis Ababa', 
            date: '15.10.2022',
            id: 2 
        },

        {
            name: 'Samuel & Kewanit',
            address: 'addis', 
            date: '15.10.2022',
            id: 6 
        },

        {
            name: 'Samuel & Kewanit',
            address: 'addis', 
            date: '15.10.2022',
            id: 8 
        },
        
        {
            name: 'Samuel & Kewanit',
            address: 'addis', 
            date: '15.10.2022',
            id: 10 
        },
    ])

    // The choiced Wedding party
    const handleWeeding = (id) => { 
        setId(id)
    } 

    function createScreenForm() {
        const create = () => {
            axios.post('http://10.33.21.222:4000/api/weeding/create', {
                hisName, herName, date, location, partySize
            })
            .then((res) => {
                console.log(res.data)
                alert('Please enter')
                setScreen(null);
            })
            .catch((err) => {
                console.log(err)
            })
        }

        return (
        <View style={styles.screen}>
            <Pressable onPress={() => setScreen(null)}>
                <Image source={require('../../assets/icons-back.png')} style={{marginTop: 2}}/>
            </Pressable>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 20 }}>Partcipant Information</Text>
            <View style={styles.containerScreen}>
                <View style={styles.inputGroup}>
                    <TextInput placeholder='His name' onChangeText={(hisname) => setHisName(hisname)} style={styles.textInput}/>     
                </View>
                <View style={styles.inputGroup}>
                    <TextInput placeholder='her name' onChangeText={(hername) => setHerName(hername)} style={styles.textInput}/>
                </View>
                <View style={styles.inputGroup}>
                    <TextInput placeholder='Date' onChangeText={(date) => setDate(date)} style={styles.textInput}/>     
                </View>
                <View style={styles.inputGroup}>
                    <TextInput placeholder='Weeding address' onChangeText={(location) => setLocation(location)} style={styles.textInput}/>     
                </View>
                {/* Continue btn - we will link to the 'food & drink' screen */}
                <View style={styles.btnRegister}>
                    <Pressable onPress={() => create()}>
                        <Text style={styles.btnText}>Add weeding</Text> 
                    </Pressable>
                </View>
            </View>
        </View>
        )   
    }
    
    const [data, setData] = useState([])
    axios.get('http://localhost:4000/api/get/weeding')
        .then(response => {
            // console.log(response.data)
            setData(response.data)
        })
    // console.log(data)
    function weedingList() {
        return (
        <SafeAreaView style={styles.screen}>
            <Pressable onPress={() => setScreen('something')} style={styles.btnCreate}>
                <Text style={styles.textStyle}> Create </Text>
            </Pressable>
            <ScrollView>
                <View>
                    {data.map((option) => {
                        return (
                            <View style={styles.card} key={option.id} >
                                <View style={styles.cardChild}>
                                    <Text style={styles.text} >Name: {option.hisName} & {option.herName} </Text>
                                    <Text style={styles.text} >Date: {option.date} </Text>
                                    <Text style={styles.text} >Location: {option.location} </Text>
                                </View>
                                <Text style={{marginLeft: 320, marginTop: -20}}>{partySize}</Text>
                                <View style={styles.buttons}>
                                    <Pressable onPress={() => handleEdit(option.id)} style={styles.btnDelete}>
                                        <Text style={styles.textStyle}>Edit</Text>
                                    </Pressable> 
                                    <Pressable onPress={() => handleDelete(option.id)} style={styles.btnEdit}>
                                       <Text style={styles.textStyle}>Delete</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                        })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
    }
    // A list over upcomming wedding - Main Screen return 
    return (
        <View>
            {
                screen === null ? weedingList() : createScreenForm()
            }
        </View>
    )
}

const styles = StyleSheet.create({ 
    screen: {
        backgroundColor: '#004242',
        height: '100%',
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
        // flexDirection: 'row'
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttons: {
        flexDirection: 'row',
        padding: 5,
    },
    btnDelete: { 
        backgroundColor: 'gray',
        marginRight: 'auto',
        borderRadius: 5,
        
        height: 25,
        width: 100
    },
    btnEdit: { 
        backgroundColor: 'red',
        marginRight: 'auto',
        borderRadius: 5,
        
        height: 25,
        width: 100
    },
    btnCreate: {
        backgroundColor: 'black',
        borderRadius: 5,
        margin: 10,
        // height: 25,
        // width: '50%',
    },

    // --------- Create Screen --------------------------------

    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    // screen: {
    //     backgroundColor: '#004742',
    //     height: '100%',
    // }, 
    containerScreen: {
        backgroundColor: '#004242',
        height: '80%',
        marginTop: '0%',
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


export default Weeding;
