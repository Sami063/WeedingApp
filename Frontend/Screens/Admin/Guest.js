import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, onPress, Pressable} from 'react-native';
import axios from 'axios';

const Guest = () => {
    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: 'green' }}>
            <Pressable>
                <Text>Go back </Text>
            </Pressable>
        </View>
    )
}