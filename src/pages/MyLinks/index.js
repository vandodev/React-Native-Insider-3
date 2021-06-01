import React from 'react';
import {View, Text} from 'react-native';
import StatusbarPage from '../../components/StatusBarPage';

export default function MyLink(){
 return(
     <View>

          <StatusbarPage
            barStyle="Light-content"
            backgroundColor="#132742"
         />

         <Text>Página MyLink</Text>
     </View>
 );
}

