import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Title from '../components/Title';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import axios from "axios"

import { Dialog, Portal } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  let user = {};

  let state = {
    visible: false,
  };

  const _hide = () => this.setState({ visible: false });
    
  return (<Background>
    <Logo />
    <Header>ORT en CASA</Header>
    <Title>Hola {user ? user.first_name : 'sin Nombre'}</Title>
    <Paragraph>
      A continuación realizamos algunos ejemplos de prueba.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
    <Portal>
      <Dialog visible={state.visible} onDismiss={_hide}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>This is simple dialog</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={_hide}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  </Background>);
};

export default memo(Dashboard);
