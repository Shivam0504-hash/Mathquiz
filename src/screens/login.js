import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { screenNames } from '../navigatior/screenNames'
import {  TextInput } from 'react-native-paper'
import GenderInput from '../component/genderinput'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/diemention'

const LogIn = ({navigation}) => {
    const [firstname,setFirstName]=useState('')
    const [lastname,setLastName]=useState('')
    const [gender, setGender] = useState('');
    const handleStartQuiz =()=>{
      if(!firstname.trim())
      {
        alert("Please enter the name")
        return;
      }
     navigation.navigate(screenNames.QuizScreen,{firstname:firstname});

    };
  return (
    <View style={styles.container}>
        <Text style={styles.headingtext}>
            Welcome to Math quiz
        </Text>
       <View style={styles.middlecontainer}>
        <TextInput
            label={'First Name'}
            value={firstname}
            onChangeText={setFirstName}
            keyboardType={'default'}
            mode={'outlined'}
            style={styles.input}
            outlineColor='#E7EBF3'
            theme={{roundness:30}}
          />
            <TextInput
            label={'lastname'}
            value={lastname}
            onChangeText={setLastName}
            keyboardType={'default'}
            mode={'outlined'}
            style={styles.input}
            outlineColor='#E7EBF3'
            theme={{roundness:30}}
          />
          <GenderInput
              label='Gender'
              value={gender}
              onChangeValue={setGender}
            />
            </View>
            <TouchableOpacity onPress={handleStartQuiz}>
      <View style={styles.button}>
        <Text style={styles.buttontext}>Start Quiz</Text>
       
      </View>
      </TouchableOpacity > 
         

       
     
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:'#cfc7d6',
        flex:1,   
    },
    headingtext:
    {
        fontSize:30,
        fontWeight:"Bold",
        marginTop:SCREEN_HEIGHT*0.11737089201,
        marginLeft:SCREEN_WIDTH*0.13811704834,
        marginBottom:SCREEN_HEIGHT*0.0469483568,

    },
    input:
    {
        marginBottom:10,
        backgroundColor:"#e7e4eb"
    },
    middlecontainer:
    {
        marginTop:80,
        marginBottom:80,
    },
    button:
    {
      
      width:SCREEN_WIDTH-2*40,
      height:SCREEN_HEIGHT*0.07042253521,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#2c2136',
      marginLeft:35,
      borderRadius:10,
    },
    buttontext:
    {
      color:'white',
      fontSize:20,
    }
    
})