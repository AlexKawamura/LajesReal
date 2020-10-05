import React from 'react';
import { View, TextInput, Button } from 'react-native';

import FormRow from '../../components/FormRow';
import FormContainer from '../../components/FormContainer';

import styles from './styles';

function PurchaseRegister() {
  return (
    <View style={styles.container}>
      <FormContainer>
          <FormRow label="Nº. do Pedido:">
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
            />
          </FormRow>
          <FormRow label="Produtos:">
            <TextInput style={styles.textInput} />
          </FormRow>
          <FormRow label="Quantidade:">
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
            />
          </FormRow>
          <FormRow label="Total:">
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
            />
          </FormRow>

          <View style={styles.registerButton}>
            <Button
              title="Cadastrar"
              color="#1B262C"
            />
          </View>
      </FormContainer>
    </View>
  );
}

export default PurchaseRegister;