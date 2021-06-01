import React from 'react';
import {View, Text} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import StatusbarPage from '../../components/StatusBarPage';
import Menu from '../../components/Manu';
import { Feather } from "@expo/vector-icons";

import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  BoxIcon,
  Input,
  ContainerInput,
  ButtonLink,
  ButtonLiknkText
  } from "./styles";

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

         <ContainerLogo>
            <Logo source={require("../../assets/Logo.png")} resizeMode="contain" />
        </ContainerLogo>

        <ContainerContent>
            
         <Title>SujeitoLink</Title>
         <SubTitle>Cole seu link para encurtar</SubTitle>

         <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color="#fff" />
          </BoxIcon>
          <Input
            placeholder="Cole seu link aqui..."
            placeholderTextColor="white"
          />
        </ContainerInput>

        <ButtonLink>
          <ButtonLiknkText>Gerar Link</ButtonLiknkText>
        </ButtonLink>

        </ContainerContent>

     </LinearGradient>
 );
}