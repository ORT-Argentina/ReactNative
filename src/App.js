import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonExample from './components/ButtonExample'
import AppBar from './components/AppBar'
import EmailInput from './components/EmailInput'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function App() {
    return (
        <View style={{ flex: 1}}>
            <View>
                <Text>Información del Login</Text>
                
            </View>
            <View style={styles.container}>
                
                <Text>Texto de prueba</Text>
                <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
                
                <ActivityIndicator animating={true} color={Colors.red800} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
