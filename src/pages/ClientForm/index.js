import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TextInput, Button, Image, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

import { setField, saveClient, resetForm, setAllFields } from '../../actions';

import FormRow from '../../components/FormRow';
import FormContainer from '../../components/FormContainer';

import styles from './styles';

function ClientRegister({
  route,
  clientForm,
  setField,
  saveClient,
  setAllFields,
  resetForm
}) {
  const { goBack } = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(route.params) {
      setAllFields(route.params);
    } else {
      resetForm();
    }
  }, []);

  function renderButton() {
    if(route.params) {
      return (
        <View style={styles.groupButton}>
          <TouchableOpacity
            style={styles.buttonRegister}
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
          >
            <Text style={styles.textButton}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDelete}>
            <Ionicons name="md-trash" size={24} color="#1B262C" />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <Button
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
    );
  }

  return (
    <View style={styles.container}>
      <FormContainer>
          <Image source={{ uri: clientForm.avatar }} style={styles.avatar} />
          <View style={styles.alterPictureButton}>
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
        { loading ? <ActivityIndicator /> : renderButton() }
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
  saveClient,
  setAllFields,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientRegister);