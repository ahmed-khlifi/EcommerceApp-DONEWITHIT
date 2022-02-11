import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/couch.jpg')}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>

        </ImageBackground>
    );
}



const styles = StyleSheet.create({
    logo:  {
        height:200,
        width:100,
        position: "absolute",
        top: 70,
    },
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: 'center'
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