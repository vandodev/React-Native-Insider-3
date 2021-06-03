import React from 'react';
import {Text, TouchableOpacity, View, TouchableWithoutFeedback, Share, SafeAreaView} from 'react-native';

import {ModalContainer, Container, Header, LinlArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl} from './styles';
import {Feather} from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';

export default function ModalLink({onClose, data}){

    function copyLink(){
        Clipboard.setString(data.link);
        alert('Link copiado com sucesso')
    }

   async function handleShare(){
        try{
            const result = await Share.share({
                message: `Link: ${data.link}`
            })

            if(result.action === Share.sharedAction){
                if(result.activityType){
                    console.log('Activetype');
                }else{
                    console.log('Compartilhado com sucesso')
                }
            }else if(result.action === Share.dismissedAction){
                console.log('Modal fechado');
            }

        }catch(error){
            console.log(error.message);
        }
    }

    return(
        <ModalContainer>

            <TouchableWithoutFeedback onPress={onClose}>
                 <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>

         <Container>
           <Header>

             <TouchableOpacity onPress={onClose}>
                <Feather 
                    name="x"
                    color="#212743"
                    size={30}
                />
             </TouchableOpacity> 

             <TouchableOpacity onPress={handleShare}>
                <Feather 
                    name="share"
                    color="#212743"
                    size={30}
                />
             </TouchableOpacity> 

           </Header>  

           <LinlArea>
               <Title>Link encurtado</Title>
               <LongUrl numberOfLines={1} >{data.long_url}</LongUrl>

               <ShortLinkArea
                activeOpacity={1}
                onPress={copyLink}
               >
                    <ShortLinkUrl numberOfLines={1} >{data.link}</ShortLinkUrl>

                    <TouchableOpacity onPress={copyLink}>
                        <Feather
                            name="copy"
                            color="#fff"
                            size={25}
                        />
                    </TouchableOpacity>

                </ShortLinkArea>

               

               


           </LinlArea>

           

         </Container>
        </ModalContainer>
    );
}