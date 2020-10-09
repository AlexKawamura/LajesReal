import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Button, Image, ActivityIndicator } from 'react-native';

import { setField, saveClient } from '../../actions';

import FormRow from '../../components/FormRow';
import FormContainer from '../../components/FormContainer';

import styles from './styles';

function ClientRegister({clientForm, setField, saveClient}) {
  const { goBack } = useNavigation();
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <FormContainer>
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
        {loading
              ? <ActivityIndicator /> 
              : <Button
                title="Cadastrar"
                color="#1B262C"
                onPress={async () => {
                  setLoading(true);
                  try {
                    await saveClient(clientForm);
                    goBack();
                  } catch (error) {
                    Alert.alert('Error', error.message);
                  } finally {
                    setLoading(false);
                  }
                }}
              />
            }
        </View>
      </FormContainer>
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