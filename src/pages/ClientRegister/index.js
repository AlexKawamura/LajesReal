import React from 'react';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons'; 
import { View, TextInput, Button, Image, ScrollView } from 'react-native';

import { setField, saveClient } from '../../actions';

import styles from './styles';
import FormRow from '../../components/FormRow';

function ClientRegister({clientForm, setField, saveClient}) {
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
            <TextInput
              style={styles.textInput}
              value={clientForm.name}
              onChangeText={value => setField('name', value)}
            />
          </FormRow>
          <FormRow label="CPF:">
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={clientForm.cpf}
              onChangeText={value => setField('cpf', value)}
            />
          </FormRow>
          <FormRow label="E-mail:">
            <TextInput
              style={styles.textInput}
              keyboardType="email-address"
              autoCapitalize="none"
              value={clientForm.email}
              onChangeText={value => setField('email', value)}
            />
          </FormRow>
          <FormRow label="Telefone:">
            <TextInput
              style={styles.textInput}
              keyboardType="phone-pad"
              value={clientForm.phone}
              onChangeText={value => setField('phone', value)}
            />
          </FormRow>
          <FormRow label="Endereço:">
            <TextInput
              style={styles.textInput}
              value={clientForm.address}
              onChangeText={value => setField('address', value)}
            />
          </FormRow>
          <View style={styles.inputLocation}>
            <FormRow label="Cidade:">
              <TextInput
                style={styles.cityInput}
                value={clientForm.city}
                onChangeText={value => setField('city', value)}
              />
            </FormRow>
            <FormRow label="UF:">
              <TextInput
                style={styles.textInput}
                value={clientForm.uf}
                onChangeText={value => setField('uf', value)}
              />
            </FormRow>
          </View>

          <View style={styles.loginButton}>
            <Button
              title="Cadastrar"
              color="#1B262C"
              onPress={() => {
                saveClient(clientForm);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return({
    clientForm: state.clientForm
  });
}

const mapDispatchToProps = {
  setField,
  saveClient
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientRegister);