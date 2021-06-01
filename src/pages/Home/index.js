import React from 'react';
import {View, Text} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import StatusbarPage from '../../components/StatusBarPage';
import Menu from '../../components/Manu';

export default function Home(){
 return(
     <LinearGradient
        colors={['#1ddbb9', '#132742']}
        style={{flex:1, justifyContent:'center'}}
     >
         <StatusbarPage
            barStyle="Light-content"
            backgroundColor="#1ddbb9"
         />
         <Menu />

         <Text>Página Home</Text>
     </LinearGradient>
 );
}