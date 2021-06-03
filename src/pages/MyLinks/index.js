import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import StatusbarPage from '../../components/StatusBarPage';

import {Container, Title, ListLinks} from './styles';
import Menu from '../../components/Manu';
import ListItem from '../../components/ListItem';

import {getLinksSave} from '../../utils/storeLinks';

export default function MyLink(){

   const [links, setLinks] = useState([]);
   const [data, setData] = useState({});
   const [modalVisible, setModalVisible] = useState(false);

   const isFocused = useIsFocused();

   useEffect(()=>{

      async function getLinks(){
          const result = await getLinksSave('sujeitolinks');
          setLinks(result);
          //setLoading(false);
      }

      getLinks();

  },[isFocused])

 return(
     <Container>

          <StatusbarPage
            barStyle="Light-content"
            backgroundColor="#132742"
         />
         <Menu />

         <Title>Meus links</Title>

         <ListLinks
            data={links}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <ListItem data={item} />}
            contentConteinerStyle={{paddingBotton:20}}
            showVerticalScrollindicator={false}
         />

    </Container>
 );
}

