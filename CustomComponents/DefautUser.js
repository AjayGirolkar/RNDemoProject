import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'


const DefautUser = () => {

    return (
         <View style= {styles.container}>
        <Image source={require('./profile-pic.jpeg')} style ={styles.img}>
        </Image>
        <View style= {styles.verticalItems}>
        <Text style= {styles.text}>
            Name: Ajay Girolkar
        </Text >
        <Text style= {styles.text}>
            Email: ajaygirolkar@gmail.com
        </Text>
        </View>
        
        </View>
    );
}

const styles = StyleSheet.create({

    container : {
        justifyContent: 'flex-start',
        alignItems: 'center', 
        padding : 30,
        flexDirection: "row",
        margin : 20,
    },

    verticalItems: {
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },

    text: {
        fontSize: 14,
        fontWeight: 'normal',
        margin : 10
    },

    img: {
        width : 100,
        height : 100,
        borderRadius : 100
    }
});

export default DefautUser;