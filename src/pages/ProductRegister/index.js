import React from 'react';
import { connect } from 'react-redux';
import Slider from '@react-native-community/slider';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

import { setField, saveProduct } from '../../actions';

import styles from './styles';
import FormRow from '../../components/FormRow';

function ProductRegister({productForm, setField, saveProduct}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.formContainer}>
        <View style={styles.form}>
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
              value={productForm.price}
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

          <View style={styles.loginButton}>
            <Button
              title="Cadastrar"
              color="#1B262C"
              onPress={() => {
                saveProduct(productForm);
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
    productForm: state.productForm
  });
}

const mapDispatchToProps = {
  setField,
  saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductRegister);