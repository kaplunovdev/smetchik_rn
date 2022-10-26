
import React from 'react';
import { BigButton } from '../smetchikApp/components/BigButton'
import { HomeScreen } from '../smetchikApp/components/HomeScreen'
import { MyStack } from '../smetchikApp/components/MyStack'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  TouchableOpacity,


} from 'react-native';
import { SmetaList } from './components/SmetaList';

const Stack = createNativeStackNavigator();


const App = (props) => {


  return (



    <MyStack />





  );
};





export default App;
