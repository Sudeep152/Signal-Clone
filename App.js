import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';

const Stack  = createStackNavigator();
const config ={
  animation: 'spring',
  config:{
    stiffness:1000,
    damping:50,
    mass:3,
    overshootClamping:false,

  }
}


const globalScreenOption ={
  headerStyle : {backgroundColor:'#2C6BED'},
  headerTitleStyle:{color:'white'},
  headerTintColor:'white'

}

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator  screenOptions= {globalScreenOption }>

    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='Register' component={RegisterScreen}/>
    
    </Stack.Navigator>
    {/* <StatusBar barStyle = "dark-content" backgroundColor = "#2C6BED"  translucent = {true} /> */}
    <StatusBar/>
    </NavigationContainer>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
