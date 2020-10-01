import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { View, TextInput, Button, Image, ScrollView } from 'react-native';

import styles from './styles';
import FormRow from '../../components/FormRow';

function ClientRegister() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.formContainer}>
        <View style={styles.form}>
          <View style={styles.addAvatar}>
            <FontAwesome style={styles.avatarIcon} name="user-circle-o" size={120} color="black" />
            {/* <Image source={{ uri: "https://avatars1.githubusercontent.com/u/22474655?s=460&u=b14af544d098b4ada62f67feace43d51e7a7a1ca&v=4" }} style={styles.avatar} /> */}
            <Button title='Alterar foto' />
          </View>

          <FormRow label="Nome:">
            <TextInput style={styles.textInput} />
          </FormRow>
          <FormRow label="CPF:">
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
            />
          </FormRow>
          <FormRow label="E-mail:">
            <TextInput
              style={styles.textInput}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </FormRow>
          <FormRow label="Telefone:">
            <TextInput
              style={styles.textInput}
              keyboardType="phone-pad"
            />
          </FormRow>
          <FormRow label="Endereço:">
            <TextInput style={styles.textInput} />
          </FormRow>
          <View style={styles.inputLocation}>
            <FormRow label="Cidade:">
              <TextInput style={styles.cityInput} />
            </FormRow>
            <FormRow label="UF:">
              <TextInput style={styles.textInput} />
            </FormRow>
          </View>

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

export default ClientRegister;