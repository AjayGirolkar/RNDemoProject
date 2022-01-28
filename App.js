/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {userState, useState} from 'react';
import type {Node} from 'react';
import ShoppingListHeader from './CustomComponents/ShoppingListHeader';
import DefautUser from './CustomComponents/DefautUser';
import uuid from 'react-native-uuid';
import AddItem from './CustomComponents/AddItem';
import ContactUs from './CustomComponents/ContactUs';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextBase,
  useColorScheme,
  View,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ListItem from './CustomComponents/ListItem';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  const scrollViewStyle = {
    flex: 1,
    backgroundColor: '#FFFFFF'
  };

  const [items, setItems] = useState([
          {id: uuid.v4(), text: "Milk"},
          {id: uuid.v4(), text: "Eggs"},
          {id: uuid.v4(), text: "Bread"},
          {id: uuid.v4(), text: "Juice"}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    } else if (items.some(item => item.text == text)) {
      Alert.alert('Error', 'Already exist item', {text: 'Ok'})
    } else {
    setItems(prevItems => {
      return [{id: uuid.v4(), text}, ...prevItems];
    })
  }
  }

  return (
     
      <ScrollView
         contentInsetAdjustmentBehavior="automatic"
        style={scrollViewStyle}>
      <View style={scrollViewStyle}>
        <ShoppingListHeader />
        <ContactUs/>
        <DefautUser/>
      <View style = {[styles.sectionContainer]}> 
          <Text style = {styles.shoppingHeaderStyle}>Shopping List</Text>
          <AddItem addItem={addItem}></AddItem>

          {items.map((item, index) => <ListItem key={index} item = {item}
          deleteItem = {deleteItem}/>) }

          </View>
     </View>
    
       </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize : 24,
    backgroundColor : '#D2F4F4F',
  },

  shoppingHeaderStyle: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },

  textProperties: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

