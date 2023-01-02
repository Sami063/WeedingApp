import { View, Text, Alert, StyleSheet, Pressable, ScrollView,
    TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Location = () => {

    return (
        <View style={styles.container}>
            {/* <MapView style={{ flex: 1, backgroundColor: 'red'}}>
                provider={PROVIDER_GOOGLE}
                showUserLocation 
                initialRegion={{latitude: 37.78825,
                    longitude: -122.4324, 
                    latitudeDelta: 0.0922, 
                    longitudeDelta: 0.0421}}
            </MapView> */}
            <Pressable onPress={() => press}>
                <Text>Press</Text>
            </Pressable>
        </View>
    )
}

export default Location;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        height: '100%',
        width: '100%'
    }
})