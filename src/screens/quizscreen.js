import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icons } from '../assets/icons'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/diemention'
import { screenNames } from '../navigatior/screenNames'

const QuizScreen = ({navigation,route}) => {
    const {firstname}=route.params
    let difficulty
    
  return (
    <View >
      
      <View style={styles.header}>
        <Text style={styles.headingtext}>
           Hello' {firstname}
        </Text>
        <Image source={Icons.usericon} style={styles.img}/>
      </View>
      <View style={styles.category} >
        <TouchableOpacity onPress={()=>{navigation.navigate(screenNames.QuestionScreen,{difficulty:"easy"})}}>
        <View style={styles.level}>
        <Image source={Icons.study} style={styles.image}/>
        <Text style={styles.leveltext}>Level: Easy</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate(screenNames.QuestionScreen,{difficulty:'medium'})}}>
        <View style={styles.level}>
        <Image source={Icons.study} style={styles.image}/>
        <Text style={styles.leveltext}>Level: Medium</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate(screenNames.QuestionScreen,{difficulty:'hard'})}}>
        <View style={styles.level}>
        <Image source={Icons.study} style={styles.image}/>
        <Text style={styles.leveltext}>Level: Hard</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate(screenNames.QuestionScreen,{difficulty:'advance'})}}>
        <View style={styles.level}>
        <Image source={Icons.study} style={styles.image}/>
        <Text style={styles.leveltext}>Level: Advance</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.level}>
        <Image source={Icons.learning} style={styles.image}/>
        <Text style={styles.leveltext}>Tips and Tricks</Text>
        </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'#ddcceb'
       

    },
    header:
    {
        height:100,
        width:SCREEN_WIDTH,
        flexDirection:'row',
        backgroundColor:'#36313b',
        
    },
    headingtext:
    {
        fontSize:20,
        color:'white',
        marginTop:50,
        marginLeft:10,
    },
    img:
    {
        height:25,
        width:25,
        resizeMode:'contain',
        marginTop:SCREEN_HEIGHT*0.058685446,
        marginLeft:SCREEN_WIDTH*0.58524173028,
    },
    image:
    {
        width:100,
        height:100,
    


    },
    level:
    {
        flexDirection:'row',
        backgroundColor:'#665f6b',
        borderRadius:10,
        height:130,
        paddingTop:10,
        marginBottom:15,
        
    },
    category:
    {
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:'#ddcceb'
        
    },
    leveltext:
    {
        fontSize:20,
        fontWeight:'500',
        marginLeft:40,
        marginTop:30,
        color:'#eae8eb'
    }
})

export default QuizScreen