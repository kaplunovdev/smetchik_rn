import React from 'react';
import {
    TouchableOpacity,
    StyleSheet, Text
} from 'react-native';


export const SmetaList = ({ navigation, route }) => {
    return (

        <Text style={{ textAlign: 'center', marginTop: 10 }}>Список пуст</Text>
    )
};


const styles = StyleSheet.create({
    button: {
        minWidth: '100%',
        fontSize: 23,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        textShadowColor: '#ccc',
        color: '#303030',
        marginBottom: 30,
        shadowColor: '#171717',
        elevation: 5

    },
    textButton: {
        fontSize: 20,
        textAlign: 'center'
    }
})