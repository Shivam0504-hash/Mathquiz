import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from './screenNames.ts';
import SplashScreen from '../screens/SplashScreen.tsx';
import LogIn from '../screens/login.js';
import QuizScreen from '../screens/quizscreen.js';
import QuestionScreen from '../screens/questionscreen.js';
import LeaderboardScreen from '../screens/leaderboardscreen.js';







const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenNames.SplashScreen}>
        
        <Stack.Screen
          name={screenNames.SplashScreen}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.LogIn}
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.QuizScreen}
          component={QuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.QuestionScreen}
          component={QuestionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.LeaderboardScreen}
          component={LeaderboardScreen}
          options={{ headerShown: false }}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;