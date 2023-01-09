import React,{createContext, useState, useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { Alert } from 'react-native';

export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [partySize, setPartySize] = useState(0);

    function handleWeeding(id) {
        axios.get('http://localhost:4000/api/get/weeding')
        .then((response) => {
            // console.log(response.data._id === id);
            if(response.status === 200) {
                console.log(response.data);
            }
        })
    }

    // Login function: A user can only be LogedIn when the response, status code is 200
    function login(email, password) {
        // When it is true we set the loading true, otherwise it will not load
        if(email && password !== '') {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
        // The login system is developed using .net core api C#
        // Post req to backend, it will send status code/response
        axios.post('http://localhost:5001/api/User/login', {
            email, password
        })
        .then((response) => {
            if(response.status === 200) {
                console.log(response.status) // returns 200 if it's true
                setIsLoading(false)
                setUserToken('verified') // The user is verified, Login is Successfully
            } else {
                setIsLoading(false)
            }
        })
        // Catching any erorrs
        .catch(err => {
            setIsLoading(false)
            setUserToken('login')
        })
    }

    // Verified will be false so the user can be signed out.
    function logout() {
        setUserToken('something')
    }
    // User will be able to return from weeding to default screen/first screen that shows when the guests opens the app
    function goBackToDefaultScreen() {
        setUserToken('something')
    }

    // Default/first screen will navigate between partcipant/admin screen
    // The user will be prompted- to login as admin, or continue as participant/guest
    function admin() {
        // When user token is 'adminstack, takes to admin login
        // We will navigate first to login the to AdminStack if success
        setUserToken('login')
    }
    function participant() {
        // it´s default screen/page that guest can access without logged in
        setUserToken('guest') 
    }
    const addData = (name) => {
        setDrinks(name)
        axios.post('http://localhost:4000/register', {
            email: email,
            firstName: burger,
            lastName: burgerDesc,
        })
        // Getting a response from the server
        .then((res) => {
            console.log(res.data)
            Alert.alert('Your order has been submited')
        })
        // If any erorr we will catch the erorr
        .catch(err => {
            console.log(`registration, ${err}`)
            });
            // setFilterScreen(<Recipt/>)
        }

    // Children will accept from parentices -? Two curl brackets
    // We can access all those functions in any files in our application by importing them
    return (
        <AuthContext.Provider value={{login, logout, addData, handleWeeding,
         userToken, isLoading, admin, participant, goBackToDefaultScreen}}> 
            {children}
        </AuthContext.Provider>
    )
}





export default AuthProvider;
