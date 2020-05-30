import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';
import Header from '~/components/header';
import Tabs from '~/components/tabs';
import Menu from '~/components/menu';

export default function Main() {
  return (
    <Container >
      <Header />
      <Menu/>
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666"/>
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Description> R$ 109,889,45</Description>
          </CardContent>

          <CardFooter>
            <Annotation>Transferência de R$ 20,00 recebida de IC SD</Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
};
