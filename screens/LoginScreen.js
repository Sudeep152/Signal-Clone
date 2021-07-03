
import React, { Component, useLayoutEffect, useState } from 'react'
import {StyleSheet, View,Image,TextInput,KeyboardAvoidingView } from 'react-native';
import { Input,Button, Text } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar'
import { ToastAndroid } from 'react-native';
import {HeaderTitle} from '@react-navigation/stack';

const LoginScreen=({navigation})=> {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');




   const SignIn= ()=>{
    



   }






        return (
            <KeyboardAvoidingView   style={styles.container}>
            <StatusBar style='light'/>
            <Image source={require('../assets/signal.png')}  style={{width:150,height:150,}}/>
            <Text style={{fontWeight:'700'}} h7>Login a Signal account</Text> 

           <View style={styles.inputContainer}>

           <Input placeholder="Email" type="email" autoFocus value={email} onChangeText={(text) => setEmail(text)} />
           <Input placeholder="Password" type="password" secureTextEntry autoFocus value={password} onChangeText={(text) => setPassword(text)} />
           </View>

             <Button    containerStyle={styles.LoginButton} type='outline' onPress={SignIn} title='Login'  />
             <Button onPress={()=>{
                 navigation.navigate('Register')
             }}  containerStyle={styles.SingButton} type='outline'  title='Register'   />    
             

                                   

            </KeyboardAvoidingView>
        )
    
}

export default LoginScreen

const styles = StyleSheet.create({

  container:{
     
      flex:1,
     justifyContent:'center',alignItems:'center'

      
    
    },
  inputContainer:{

    marginTop:70,
    width:300
  },
  LoginButton:{
    
      marginTop:20,
      width:300,
      
  },
  SingButton:{
    marginTop:20,
    width:300
}


})
