import React, {useEffect} from "react";
import { View, Text } from 'react-native';
import useAuthActions from "../../../redux/hooks/useAuthAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from 'react-redux';
import RootStack from "../../../navigation/RootStack";
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from "react-native-splash-screen";

const Splash = ()=>{
    const {setToken} = useAuthActions();
    useEffect(() => {
      try {
        setTimeout(() => {
          SplashScreen.hide(); {/*추가*/}
        }, 2000); {/* 스플래시 시간 조절 (2초) */}
      } catch(e) {
        console.warn('에러발생');
        console.warn(e);
      }
    });
  
    /*
    useEffect(()=>{
      console.log('Splash.js');
      SplashScreen.hide()
    }, [isLoading]);
    */
    
    useEffect(() => {
      const bootstrapAsync = async () => {
        try{
          const result = await AsyncStorage.getItem('authData');
          setToken(JSON.parse(result)?.token);
        }
        catch(error){
          console.log(error)
        }
      }
      bootstrapAsync();
      
    }, []);
    const isLoading = useSelector((state)=>state.auth.loginIndicator.isLoading);
    
  return (
    <>
      {
        isLoading ?
          <View><Text>Loading</Text></View>
          : <RootStack/>
      }
    </>
    )
}

export default Splash;