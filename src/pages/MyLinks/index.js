import React from 'react';
import {View, Text} from 'react-native';
import StatusbarPage from '../../components/StatusBarPage';

import {Container, Title, ListLinks} from './styles';
import Menu from '../../components/Manu';
import ListItem from '../../components/ListItem';

export default function MyLink(){
 return(
     <Container>

          <StatusbarPage
            barStyle="Light-content"
            backgroundColor="#132742"
         />
         <Menu />

         <Title>Meus links</Title>

         <ListLinks
            // data={[{id:1, link: 'meulink.com'}, {id:2, link: 'meulinkDois.com'}]}
            data={[1,2,3,4,5,6,7,8]}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <ListItem data={item} />}
            contentConteinerStyle={{paddingBotton:20}}
            showVerticalScrollindicator={false}
         />

    </Container>
 );
}

