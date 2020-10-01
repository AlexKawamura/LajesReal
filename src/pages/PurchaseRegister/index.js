import React from 'react';
import { View, TextInput, Button, ScrollView } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import FormRow from '../../components/FormRow';

function PurchaseRegister() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.formContainer}>
        <View style={styles.form}>
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

          <View style={styles.loginButton}>
            <Button
              title="Cadastrar"
              color="#1B262C"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default PurchaseRegister;