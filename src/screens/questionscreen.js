import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { generateDifficultyQuestion } from './question';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/diemention';
import { screenNames } from '../navigatior/screenNames';


const QuestionScreen = ({navigation,route}) => {
    
  const { difficulty } = route.params; 
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(1);
  const [timeLeft, setTimeLeft] = useState(30);
  useEffect(() => {
    const newQuestion = generateDifficultyQuestion(difficulty);
    // console.log(newQuestion);
    setQuestion(newQuestion.question);
    setAnswer(newQuestion.answer);
    setTimeLeft(30); 
  }, [difficulty, questionIndex]);

  useEffect(() => {
    if (timeLeft > 0 ) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleTimeout();
    }
  }, [timeLeft]);

  const handleTimeout = () => {
    alert('Time is up! Moving to the next question.');
    setQuestionIndex(questionIndex + 1);
  };

  const handleSubmit = () => {
   
    if (parseInt(userAnswer) === answer) {
      setScore(score + 1);
   
    } else {
      alert('Incorrect!');
    }
    if(questionIndex===10)
    {
        setTimeLeft(0);
        return;
    }
    setUserAnswer('');
    setQuestionIndex(questionIndex + 1);
  };

  const handleFinish = async () => {
   
    const leaderboard = JSON.parse(await AsyncStorage.getItem('leaderboard')) || [];
    leaderboard.push(score);
    await AsyncStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    navigation.navigate(screenNames.LeaderboardScreen);
  };

    

  return (
   
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headingtext}>
           Quiz Questions
        </Text>
        <Text style={styles.score}> Score: {score}</Text>
        
        </View>
        <View style={styles.questioncontainer}>

        <Text style={styles.timer}>Time Left: {timeLeft} seconds</Text>
        <Text style={styles.qtext}>Question Number: {questionIndex} </Text>

            {/* <Text style={styles.qtext}>Solve this Question</Text> */}
        <Text style={styles.question}>{question}</Text>
        </View>
        <View style={styles.answer}>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={userAnswer}
        onChangeText={setUserAnswer}
        placeholder=" Enter Your Answer"
      />
    
      <TouchableOpacity onPress={handleSubmit}>
      <View style={styles.button}>
        <Text style={styles.buttontext}>Submit Answer</Text>
       
      </View>
      </TouchableOpacity > 
      {questionIndex === 10 && 
      
      <Button title="Finish Quiz" onPress={handleFinish} />}
      </View>
        
     

    

    </View>
    
  );
}


export default QuestionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#665f6b"
        
      },
      header:
      {
        height:100,
        width:SCREEN_WIDTH,
        flexDirection:'row',
        backgroundColor:'#36313b',

      },
      questioncontainer:
      {
        padding:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#a591b5"
      },
      answer:
      {
        padding:40,
      },
      headingtext:
      {
          fontSize:20,
          color:'white',
          marginTop:50,
          marginLeft:20,
      },
      question: {
        fontSize: 24,
        marginBottom: 20,
        margintop:200,
        
      },
      qtext:
      {
        fontSize:25,
        marginBottom:10,
      },
      timer: {
        fontSize: 18,
        marginBottom: 20,
        color: 'red',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor:'white',
        borderRadius:10,
       
        width:300,
        height:60,
        color:'Black',
      },
      score: {
        fontSize: 18,
        marginTop: 50,
        color:'white',
        marginLeft:150,
      },
      button:
      {
        marginTop:SCREEN_HEIGHT*0.16431924882,
        width:SCREEN_WIDTH-2*40,
        height:SCREEN_HEIGHT*0.07042253521,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2c2136',
        borderRadius:10,
      },
      buttontext:
      {
        color:'white',
        fontSize:20,
      }
})
