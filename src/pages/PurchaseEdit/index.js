import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import FormRow from '../../components/FormRow';

function PurchaseEdit() {
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

          <View style={styles.groupButton}>
            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete}>
              <Ionicons name="md-trash" size={24} color="#1B262C" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </View>
  );
}

export default PurchaseEdit;