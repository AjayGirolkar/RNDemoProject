import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet, Linking, TouchableOpacity, TextInput, AppRegistry} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Button } from 'react-native-vector-icons/dist/FontAwesome';


const ContactUs = () => {
return (
<ScrollView style ={styles.MainContainer}>
         <Text style ={styles.headingLabel}>
        Banking Questions
        </Text>
    
    <DateComponent number = {'888-882-3837'}></DateComponent>
    <Text style ={styles.textStyle}>
        Outside of U.S
    </Text>
    <DateComponent number = {'+1-631-234-8815 ext. 3501'} ></DateComponent>

    <Text style ={styles.headingLabel}>
       Home Loan Questions
    </Text>

    <Text style ={styles.textMedium}>
       Existing loan inquiries
    </Text>
    <DateComponent number = {'844-436-0374'}></DateComponent>

   
    <TouchableOpacity 
    style = {styles.paddingStyle}
    onPress={() => Linking.openURL('http://google.com')} activeOpacity={0.7} style={styles.button} >
    <Text style ={styles.textBlue}>
       TiaaBank.myloancare.com
    </Text>
          </TouchableOpacity>


    <Text style ={[styles.text16Bold, styles.topPadding]} >
        Retirement Plan and Individual {'\n'}
        Retirement Account (IRA) Questions
    </Text>

    <Text style ={[styles.textSmall, styles.topPadding, styles.bottomPadding]} >
    <Text style ={styles.textSmall}>You may request a call </Text>
    <Text style ={styles.textSmallBold}>(for retirement questions only) </Text>
    <Text style ={styles.textSmall}>. This options is available in the U.S. and Canada. Cellular data rates may apply.
    </Text>
    </Text>

    <TouchableOpacity
    style = {styles.requestCallButtonStyle}
    onPress= {console.log('request call clicked')}>
    <Text
    style = {styles.textSmallBold}>
        Request a call
    </Text>
        </TouchableOpacity>

    </ScrollView>
) 
};

DateComponent = ({number}) => {
    return (
    <View>
        <View style ={styles.hStack}>
            <FontAwesome 
            size={20}
            style ={styles.img} 
            name='phone'/>
            <TouchableOpacity onPress={this.dialCall(phoneNumber = number)} activeOpacity={0.7} style={styles.button} >
            <Text style = {styles.phoneNumber}>
            {number} 
            </Text>
            </TouchableOpacity>
       </View>

        <View style = {styles.hStack}>
            <EvilIcons x
            size={20}
            name='clock'/>
            <View style = {styles.vStack}>
                <Text>
                    MON-FRI: 8 AM - 8 PM (ET)
                </Text>
                <Text>
                    SAT-SUN: 9 AM - 7 PM (ET)
                </Text>
            </View>
        </View>
    </View>
    )
};

dialCall = (phoneNumber) => {
    let phoneNumberToCall = '';
    if (Platform.OS === 'android') {
        phoneNumberToCall = 'tel:${1234567890}';
    }
    else {
        phoneNumberToCall = 'telprompt:${1234567890}';
    }
    console.log(phoneNumberToCall)
    Linking.openURL(phoneNumberToCall);
  };

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
       padding: 20,
       paddingBottom: 50,
       bottomPadding: 80,
      },

    topPadding: {
        paddingTop: 30
      },
    bottomPadding: {
        paddingBottom: 30
    },
    paddingStyle: {
        padding: 20,
        paddingVertical: 20,
        marginBottom: 20,
        paddingTop: 20
    },
    headingLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 20
    },

    textStyle: {
        fontSize: 14,
        fontWeight: 'normal',
        marginTop: 30,
    },

    marginRightStyle: {
        marginRight: 20
    },

    hStack: {
    flexDirection: 'row',
       marginTop: 10,
       marginLeft: 5,
        letterSpacing: 5,
        margin: 5
    },
    vStack: {
       flexDirection: 'column',
    },
    phoneNumber: {
        fontSize: 14,
        color: '#0080ff'
    },

    button: {
        width: '80%',       
        borderRadius: 7,
      },
     
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
    textMedium: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    textSmall: {
        fontSize: 14,
        fontWeight: 'normal'
    },
    textSmallBold: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    textBlue: {
        fontSize: 14,
        color: '#0080ff',
        paddingTop: 20,
        paddingLeft: 30
    },
    icon: {
        width: 50,
        height: 50,
    },

    text16Bold: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    img: {
        width : 30,
        height : 30,
        borderRadius : 1,
    },
    requestCallButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9dc4a',
        borderRadius: 25,
        color: '#0a1d2e',
        width : '100%',
        height: 50,
        marginBottom: 50
    },
});

export default ContactUs;
AppRegistry.registerComponent('ContactUs', () => ContactUs);
