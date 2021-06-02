import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ModalContainer, Container, Header, LinlArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl} from './styles';
import {Feather} from '@expo/vector-icons';

export default function ModalLink(){
    return(
        <ModalContainer>
            <View style={{flex:1}}></View>
         <Container>
           <Header>

             <TouchableOpacity>
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
               >
                    <ShortLinkUrl numberOfLines={1} >https:\\www.vandodev.com</ShortLinkUrl>

                    <TouchableOpacity>
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