import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect, useRef } from 'react';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, Button, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

import FormRow from '../../components/FormRow';
import FormContainer from '../../components/FormContainer';

import { setField, saveProduct, resetForm, setAllFields, deleteProduct } from '../../actions';

import styles from './styles';

function ProductRegister({
  route,
  productForm,
  setField,
  saveProduct,
  resetForm,
  setAllFields,
  deleteProduct
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
                await saveProduct(productForm);
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
              const hasDeleted = await deleteProduct(productForm);

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
            await saveProduct(productForm);
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
        setField('pictureURL', data.base64);
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

    setField('pictureURL', data.base64);
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
        { productForm.pictureURL ? (
          <Image source={{ uri: `data:image/jpeg;base64,${productForm.pictureURL}` }} style={styles.picture} />
        ) : null }
        <View style={styles.alterPictureButton}>
          <Button title='Alterar imagem' onPress={() => {
            Alert.alert(
              'Imagem do produto',
              'Como deseja escolher uma imagem para o produto?',
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
          }} />
        </View>
        <FormRow label="Nome:">
            <TextInput
              style={styles.textInput}
              placeholder="nome"
              value={productForm.productName}
              onChangeText={value => setField('productName', value)}
            />
          </FormRow>
          <FormRow label="Qtd. Armazenado:">
            <Text style={{alignSelf: 'center'}}>{productForm.stored}</Text>
            <Slider
              style={{height: 40}}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor="#3282B8"
              minimumTrackTintColor="#3282B8"
              step={1}
              value={productForm.stored}
              onValueChange={itemValue => {
                setField('stored', itemValue);
              }}
            />
          </FormRow>
          <FormRow label="Preço/unid.:">
            <TextInput
              style={styles.textInput}
              value={String(productForm.price)}
              keyboardType="numeric"
              onChangeText={value => {
                setField('price', value);
              }}
            />
          </FormRow>
          <FormRow label="Descrição:">
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={5}
              textAlignVertical='top'
              value={productForm.description}
              onChangeText={value => {
                setField('description', value);
              }}
            />
          </FormRow>

          <View style={styles.registerButton}>
            { loading ? <ActivityIndicator /> : renderButton() }
          </View>
        </FormContainer>
    </View>
  );
}

const mapStateToProps = (state) => {
  return({
    productForm: state.productForm
  });
}

const mapDispatchToProps = {
  setField,
  saveProduct,
  resetForm,
  setAllFields,
  deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductRegister);