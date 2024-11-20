import React, { useState, useEffect } from "react";
import { StyleSheet,View,Text, Image} from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH} from "../utils/diemention";
import { Icons } from "../assets/icons";
// import { Icons } from "../assets";
// import { ScreenNames } from "../navigator/screenNames";

interface SplashScreenProps {
    navigation: any;
  }

  const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
 
   
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
        navigation.navigate("LogIn");
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);

  
    return(
        
    <View style={styles.container}>
      
      <Image source={Icons.mathicon} style={styles.image}/>
     
    </View>
  
    )
}
export default SplashScreen;
const styles=StyleSheet.create({
   
  container:
  {
      width:SCREEN_WIDTH,
      height:SCREEN_HEIGHT,
      backgroundColor:'#252029',
      justifyContent:'center',
      alignItems:'center',
  },
  image:
  {
      width:SCREEN_WIDTH/2,
      height:SCREEN_HEIGHT/2,
     resizeMode:'contain',
      position:'absolute',
  },
})