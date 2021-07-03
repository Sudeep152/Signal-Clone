import React, { Component, useLayoutEffect, useState } from 'react'
import { ToastAndroid } from 'react-native'
import { StyleSheet, View ,Image,KeyboardAvoidingView } from 'react-native'
import {Button,Input,Text} from 'react-native-elements'
import { auth } from '../firebase'

const RegisterScreen = ({navigation})=> {
    var firebase = require('firebase');
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [name,setName] = useState('');


 

  const Register=()=>{
   
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    ToastAndroid.show("Successfully Done",ToastAndroid.SHORT)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    ToastAndroid.show(errorMessage,ToastAndroid.SHORT)
    // ..
  });


  }





        return (
            <KeyboardAvoidingView style={styles.container}>
                  
                 <Image source={require('../assets/signal.png')}

                  
                    style={{width:150 ,height:150}}
                 />
                 <Text style={{fontWeight:'700'}} h7>Create a Signal account</Text> 
              <View style={styles.inputContainer}>
                 <Input  placeholder='Full Name' type='name' autoFocus value={name} onChangeText={(text)=> setName(text)}/> 
                 <Input placeholder='Email' type='email' value={email} onChangeText={(text)=> setEmail(text)}/>
                 <Input  placeholder='Password' type='password'    value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry/>
              </View>
              <Button  containerStyle= {styles.BtnSign}title='Register' type='outline' onPress={Register} />
              
            </KeyboardAvoidingView>
        )
    
}

export default RegisterScreen

const styles = StyleSheet.create({
   
    container:{
        flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    inputContainer:{
     width:300
     ,marginTop:80
    },
    BtnSign:{
      
        marginTop:10,
        width:300
    }


})