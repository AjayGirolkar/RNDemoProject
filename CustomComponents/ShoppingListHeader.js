import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'


const ShoppingListHeader = () => {

    return (
         <View style= {styles.header}>
             <Text style = {styles.text}>
               Shopping List
             </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    header : {
        height: 60,
        padding: 15,
        backgroundColor: '#4682b4'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    img: {
        width : 100,
        height : 100,
        borderRadius : 100
    }
});

export default ShoppingListHeader;