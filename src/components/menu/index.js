import React from 'react'
import QRCode from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles'

export default function Menu()
{
    return (
        <Container>
            <Code>
                <QRCode
                value="https://rocketseat.com.br"
                size={80}
                fgColor="#FFF"
                bgColor="#8B10AE"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF"></Icon>
                    <NavText>Me Ajude</NavText>
                </NavItem>
                    <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF"></Icon>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF"></Icon>
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF"></Icon>
                    <NavText>Configurar app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair</SignOutButtonText>
            </SignOutButton>
        </Container>
        );
    }