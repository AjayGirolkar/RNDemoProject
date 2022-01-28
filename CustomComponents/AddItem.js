import React, { Component, useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon  from 'react-native-vector-icons/dist/FontAwesome';

Icon.loadFont();

const AddItem = ({title, addItem}) => {

    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
    return (
        <View>
            <TextInput 
            placeholder='Add Item...' 
            style = {styles.textInput}
            onChangeText={onChange}
            value = {text}
            />
            <TouchableOpacity style = {styles.btn}
            onPress={() => {
                addItem(text)
                setText('')
            }
       }
            >
            <Text style = {styles.btnText}> 
            <Icon name='plus' size = {20}> </Icon>
                Add Item
            </Text>
         </TouchableOpacity> 
        </View>
   
    );
}

const styles = StyleSheet.create({

    btn: {  
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    }, 

    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    },

    textInput: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
});

export default AddItem;
