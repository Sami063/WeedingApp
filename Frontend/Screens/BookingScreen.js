import { StyleSheet, Alert, Text, View, SafeAreaView, ScrollView,Image, Pressable } from 'react-native';
import React, {useState, useContext} from 'react'; 
import axios from 'axios';
import { useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from '../Authentication/Context/AuthContext';
import Recipt from './Recipt';

const BookingScreen = () => {

    const route = useRoute()
    const navigation = useNavigation();
    const [cart, setCart] = useState([])
    // Filter screen data
    const [menuScreen, setMenuScreen] = useState([
        {name: 'Burger', id: 1},
        {name: 'Drink', id: 2},
    ]) 
    const food = [
        {
            name: 'Vaggie Burger', 
            description: 'House made vegan patty with tomate...', 
            id: 1
        }, 
        {
            name: 'Bacon cheese Burger', 
            description: 'Lorem Ipsum is simply dummy', 
            id: 2
        }, 
        {
            name: 'Classic Burger', 
            description: 'Lorem Ipsum is simply dummy', 
            id: 3
        },
        {
            name: 'Double Fish Burger', 
            description: 'Lorem Ipsum is simply dummy', 
            id: 4
        }, 
        {
            name: 'Greek Burger', 
            description: 'Lorem Ipsum is simply dummy', 
            id: 5
        },
        {
            name: 'Grilled Chicken', 
            description: 'With mayo advaado & tomate', 
            id: 6
        },
        {
            name: 'Turkey Burger', 
            description: 'With tomate onion lettuce & garlic mayo', 
            id: 99
        }
    ]
    const drink = [
        {
            name: 'mongo',
            // image: '../assets/mongo.png',
            description: 'Lorem Ipsum is simply dummy', 
            id: 7
        },
        {
            name: 'Avacado',
            // image: '../assets/avacado.png',
            description: 'Lorem Ipsum is simply dummy', 
            id: 8
        },
        {
            name: 'cocacola', 
            // image: '../assets/cocacola.jpg',
            description: 'Lorem Ipsum is simply dummy', 
            id: 9
        },
        {
            name: 'cocacola', 
            // image: '../assets/cocacola.jpg',
            description: 'Lorem Ipsum is simply dummy', 
            id: 10
        },
        {
            name: 'Avacado', 
            // image: '../assets/avacado.png',
            description: 'Lorem Ipsum is simply dummy', 
            id: 11
        },
        {
            name: 'cocacola', 
            // image: '../assets/cocacola.jpg',
            description: 'Lorem Ipsum is simply dummy', 
            id: 12
        },
        {
            name: 'cocacola', 
            // image: '../assets/cocacola.jpg',
            description: 'Lorem Ipsum is simply dummy', 
            id: 13
        },
    ]
    // for burger and drink screen
    const [filterScreen, setFilterScreen] = useState()
    function handleScreenChange(name) {
        switch (name) {
            case 'Burger':
                setFilterScreen(burgerScreen)
                break;
            case 'Drink':
                setFilterScreen(drinkScreen)
                break;
            }
        }
        console.log(cart)
    // List of burger/menu
    
    function burgerScreen() {
        
        return (
        <ScrollView>
            <View style={styles.container}>
                {food.map((food) => { 
                return ( 
                    <View style={styles.box} key={food.id}> 
                        <View style={styles.inner}>
                            <Text style={styles.innerText} > {food.name}</Text>
                            <Image source={require('../assets/double-cheeseburger.png')} style={styles.imageStyle}/>
                        </View>
                        <Pressable style={styles.btnAdd} onPress={() => setCart([...cart, food])}>
                            <Text  style={{color: 'white', fontSize: 16, letterSpacing: 0.3}}>Add</Text>
                        </Pressable>
                    </View> 
                ) 
            })}
            </View>
        </ScrollView>
        )
    }
  
    // displays item add by the guest user
    const cartScreen = () => {
        
        const removeItem = (id) => {
            Alert.alert('Delete', 'are you sure you want to delete this item?', [
                {
                    text: 'Cancel',
                    onPress: () => {
                        console.log('cancel pressed');
                    }, 
                    style: 'cancel',
                },
                {
                    text: 'Ok',
                    onPress: () => {
                        // finding & storing the item id === id, of the item 
                        // const item = cart.find((i) => {
                        //     return i.id === id;
                        // })
                        const cart_Item = cart.findIndex((item) => {
                            item.id !== id;
                        });
                        setCart(cart_Item);
                        Alert.alert('Your item has been updated')
                    }
                }
            ])
        }
        return (
            <ScrollView>
            <View style={styles.container}>
                
                {
                    cart.map((cartItem) => {
                        return (
                            <View style={styles.cartItem} key={cartItem.id} >
                                <View style={styles.cartItemInfo}>
                                    <Text style={styles.innerText}>Item Name: {cartItem.name}</Text>
                                    <Text style={styles.innerText}>Desc: {cartItem.description}</Text>
                                </View>
                                <View style={styles.cartItemButton}>
                                    <Pressable onPress={() => removeItem(cartItem.id)} style={styles.removeButton}>
                                        <Text style={{color: 'green', fontSize: 16, letterSpacing: 0.3}}>Remove</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            </ScrollView>
        )
    }
    // drink screen 
    console.log(cart)
    function drinkScreen() {
        setStep(1)
        setName('Next')
        return (
            <ScrollView>
                <View style={styles.container}>
                    {drink.map((drink) => { 
                    return (
                        <View style={styles.box} key={drink.id} >
                            <Text style={styles.innerText} > {drink.name}</Text>
                            <Image source={require('../assets/mongo.png')} style={styles.imageStyle}/>
                            <Pressable style={styles.btnAdd} onPress={() => setCart([...cart, drink])}>
                                <Text style={{color: 'white', fontSize: 16, letterSpacing: 0.3}}>Add</Text>
                            </Pressable>
                        </View> 
                    ) 
                })}
                </View>
            </ScrollView>
        ) 
    }
    // it will display the next screen
    // it will change it's name, when there is no screen to complete the order
    const [name, setName] = useState('Next')
    const [step, setStep] = useState(0)
    const showNextScreen = () => {
        if(step === 0) {
            setFilterScreen(drinkScreen())
            setStep(1)
        } else if(step === 1) {
            setFilterScreen(cartScreen())
            setStep(2)
            setName('Confirm')
        } else if(step === 2) {
            axios.post('http://10.33.21.222:4000/api/order', {
                orderName: cart.name,
                orderDescription: cart.description,
                email: route.params.email
            }).then((res) => {
                console.log(res.data)
                Alert.alert('Your order has been successfully add')
                navigation.navigate('Upcomming weeding')
            })
        }
    }

    // Menu Screen 
    const MenuScreen = () => {
        return (
        <View style={{width: '100%', height: '100%', backgroundColor: 'black' }}>
            <View style={styles.filterButtons}> 
            {menuScreen.map((screen) => { 
                return (
                <View key={screen.id}>
                    <Pressable onPress={() => handleScreenChange(screen.name)} style={{marginLeft: 90}}>
                        <Text style={{color: 'white'}} > {screen.name}</Text>
                    </Pressable>
                </View>
                )
            })}
            </View>
            {
            // by default it is set to burger screen, then u can filter after what u want
            filterScreen ? filterScreen : burgerScreen()
            }
            {/* Displays the next screen */}
            <Pressable onPress={() => showNextScreen()} style={{width: '100%', backgroundColor: 'green'}}>
                <Text style={{color: 'white', fontSize: 18, letterSpacing: 0.3, textAlign: 'center'}}>{name}</Text>
            </Pressable>
        </View>
            )
        }
        // End of menu screen

        // The booking screen will return ... menu Screen
        return (
        <View style={styles.screen}>
            {
                MenuScreen() 
            }
        </View>
        )
    }

// Styles for the ...
const styles = StyleSheet.create({
    filterButtons: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        padding: 5,
    }, 
    container: {
        width: '100%',
        height: '100%',
        padding: 5,
        flexWrap: 'wrap',
        flexDirection: 'row',
        // justifyContent: 'center',
    },
    box: {
        width: 155,
        height: 160,
        backgroundColor: 'orange',
        borderRadius: 10,
        margin: 8,
        alignItems: 'center',
        alignContent: 'center',
    },
    imageStyle: {
        width: 155,
        height: 100,
        borderRadius: 10,
    },
    btnAdd: {
        // marginTop: '95%',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        height: 21,
    },
    innerText: {
        color: 'green',
        letterSpacing: 0.3,
        padding: 5,
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center'
    }, 
    cartItem: {
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
    },
    cartItemInfo: {
        width: '75%',
        height: 100
    },
    cartItemButton: {
        backgroundColor: 'red',
        width: 100,
        height: 100
    },
    removeButton: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})

export default BookingScreen; 