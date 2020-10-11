import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, Button, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

import FormRow from '../../components/FormRow';
import FormContainer from '../../components/FormContainer';

import { setField, saveProduct, resetForm, setAllFields } from '../../actions';

import styles from './styles';

function ProductRegister({
  route,
  productForm,
  setField,
  saveProduct,
  resetForm,
  setAllFields
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
            <TouchableOpacity style={styles.buttonRegister}>
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

  return (
    <View style={styles.container}>
      <FormContainer>
        <Image source={{ uri: productForm.pictureURL }} style={styles.picture} />
        <View style={styles.alterPictureButton}>
          <Button title='Alterar foto' />
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
  setAllFields
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductRegister);