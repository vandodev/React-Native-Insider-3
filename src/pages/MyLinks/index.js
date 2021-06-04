import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import StatusbarPage from '../../components/StatusBarPage';

import {Container, Title, ListLinks, ContainerEmpty} from './styles';
import Menu from '../../components/Manu';
import ModalLink from '../../components/ModalLink';
import ListItem from '../../components/ListItem';

import {getLinksSave, deleteLink} from '../../utils/storeLinks';

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

  },[isFocused]);

  function handleItem(item){
      setData(item);
      setModalVisible(true);
   }

   async function handleDelete(id){
      const result = await deleteLink(links, id);
      setLinks(result);
   }

 return(
     <Container>

          <StatusbarPage
            barStyle="Light-content"
            backgroundColor="#132742"
         />
         <Menu />

         <Title>Meus links</Title>

         { !loading && links.length === 0 && (
                <ContainerEmpty>
                    <WarningText>Você ainda não possui links :[</WarningText>
                </ContainerEmpty>
            )
         }

         <ListLinks
            data={links}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} /> }
            contentConteinerStyle={{paddingBotton:20}}
            showVerticalScrollindicator={false}
         />

            <Modal visible={modalVisible} transparent animationType="slide">  
                <ModalLink onClose={() => setModalVisible(false)} data={data} deleteItem={handleDelete} />
            </Modal>

    </Container>
 );
}

