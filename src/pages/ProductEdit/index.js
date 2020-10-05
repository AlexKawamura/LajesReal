import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import FormRow from '../../components/FormRow';
import FormContainer from '../../components/FormContainer';

import styles from './styles';

function ProductEdit() {
  return (
      <View style={styles.container}>
        <FormContainer>
          <FormRow label="Nome:">
            <TextInput style={styles.textInput} />
          </FormRow>
          <FormRow label="Qtd. Armazenado:">
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
            />
          </FormRow>
          <FormRow label="Preço/unid.:">
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
            />
          </FormRow>
          <FormRow label="Descrição:">
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={5}
              textAlignVertical='top'
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
        </FormContainer>
      </View>
  );
}

export default ProductEdit;