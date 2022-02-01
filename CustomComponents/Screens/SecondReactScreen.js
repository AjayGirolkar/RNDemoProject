import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    View,
    StyleSheet,
    Alert,
    Text
} from 'react-native'

const SecondReactScreen = ({ navigation, route }) => {
    return (
        <View>

        </View>
    )
};

const styles = StyleSheet.create({
screen : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
}
});

export default SecondReactScreen;
