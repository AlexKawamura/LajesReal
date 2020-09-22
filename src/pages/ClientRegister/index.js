import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

function ClientRegister({route}) {
  const client = route.params;

  return (
      <View>
        <Header title="Cadastro" />
      </View>
  );
}

export default ClientRegister;