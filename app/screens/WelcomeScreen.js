import React from 'react';
import { Button, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/couch.jpg')}>
            <Text style={styles.logo}>My store</Text>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}



const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logo:  {
        fontSize:32,
        fontWeight:"bold",
        color: "#fc5c65",
        position: "absolute",
        top: 70,
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: "100%",
        height: 70, 
        backgroundColor: "#4ecdc4"
    }
})


export default WelcomeScreen;