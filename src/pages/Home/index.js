import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import StatusbarPage from '../../components/StatusBarPage';
import Menu from '../../components/Manu';
import { Feather } from "@expo/vector-icons";
import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal} from 'react-native';


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
import ModalLink from '../../components/ModalLink';

export default function Home(){

const [input, setInput] = useState('');
const [modalVisible, setModalVisible] = useState(false);

function handleShortLink(){
    //alert('url:' + input)
    setModalVisible(true);
}

 return(
     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <LinearGradient
            colors={['#1ddbb9', '#132742']}
            style={{flex:1, justifyContent:'center'}}
        >
            <StatusbarPage
                barStyle="Light-content"
                backgroundColor="#1ddbb9"
            />
            <Menu />

            <KeyboardAvoidingView 
                behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                enabled
            >

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
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="url"
                    value={input}
                    onChangeText={(text)=> setInput(text)}
                />
                </ContainerInput>

                <ButtonLink onPress={handleShortLink}>
                <ButtonLiknkText>Gerar Link</ButtonLiknkText>
                </ButtonLink>

                </ContainerContent>
            </KeyboardAvoidingView>

            <Modal visible={modalVisible} transparent animationType="slide">
                <ModalLink />
            </Modal>

        </LinearGradient>
     </TouchableWithoutFeedback>
 );
}