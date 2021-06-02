import React from 'react';
import {Text, TouchableOpacity, View, TouchableWithoutFeedback} from 'react-native';

import {ModalContainer, Container, Header, LinlArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl} from './styles';
import {Feather} from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';

export default function ModalLink({onClose}){

    function copyLink(){
        Clipboard.setString('http:\\meulink.com.br');
        alert('Link copiado com sucesso')
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

             <TouchableOpacity>
                <Feather 
                    name="share"
                    color="#212743"
                    size={30}
                />
             </TouchableOpacity> 

           </Header>  

           <LinlArea>
               <Title>Link encurtado</Title>
               <LongUrl numberOfLines={1} >https:\\bit.li/url.com</LongUrl>

               <ShortLinkArea
                activeOpacity={1}
                onPress={copyLink}
               >
                    <ShortLinkUrl numberOfLines={1} >https:\\www.vandodev.com</ShortLinkUrl>

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