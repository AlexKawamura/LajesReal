import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TextInput, Button, Image, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

import { setField, saveClient, resetForm, setAllFields, deleteClient } from '../../actions';

import FormRow from '../../components/FormRow';
import FormContainer from '../../components/FormContainer';

import styles from './styles';

function ClientRegister({
  route,
  clientForm,
  setField,
  saveClient,
  setAllFields,
  resetForm,
  deleteClient
}) {
  const { goBack } = useNavigation();
  const camRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [camera, setCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

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
          <TouchableOpacity
            style={styles.buttonDelete}
            onPress={async () => {
              const hasDeleted = await deleteClient(clientForm);

              if(hasDeleted) {
                goBack();
              }
            }}
          >
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

  async function takePicture() {
    if(camRef) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true
      }
      const data = await camRef.current.takePictureAsync(options);

      if (data) {
        setField('avatar', data.base64);
        setCamera(false);
      }
    }
  }

  async function selectImageFromGallery() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('O app precisa de permissão para acessar a galeria.');
      return;
    }

    const options = {
      allowEditing: true,
      quality: 0.5,
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    }
    const data = await ImagePicker.launchImageLibraryAsync(options);

    if (data.cancelled) {
      return;
    }

    setField('avatar', data.base64);
  }

  if (camera) {
    if (hasPermission === false) {
      return <View />;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={camRef}>
        </Camera>

        <TouchableOpacity style={styles.takePictureButton} onPress={takePicture}>
          <Text style={{ color: '#FFF' }}>Tirar foto</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FormContainer>
          { clientForm.avatar ? (
            <Image source={{ uri: `data:image/jpeg;base64,${clientForm.avatar}` }} style={styles.avatar} />
          ) : null }
          <View style={styles.alterPictureButton}>
            <Button title='Alterar foto' onPress={() => {
              Alert.alert(
                'Foto do cliente',
                'Como deseja adicionar uma foto do cliente?',
                [
                  {
                    text: 'Câmera',
                    onPress: async () => {
                      const { status } = await Camera.requestPermissionsAsync();
                      setHasPermission(status === 'granted');

                      setCamera(true);
                    },
                  },
                  {
                    text: 'Galeria',
                    onPress: () => selectImageFromGallery(),
                  }
                ],
                { cancelable: true }
              );
            }}
          />
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
  resetForm,
  deleteClient
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientRegister);