import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, Picker, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

import FormRow from '../../components/FormRow';
import FormContainer from '../../components/FormContainer';

import styles from './styles';

import { setField, setAllFields, resetForm, saveClientPurchase, deleteClientPurchase } from '../../actions';

function PurchaseForm({
  route,
  purchaseForm,
  products,
  setField,
  saveClientPurchase,
  resetForm,
  setAllFields,
  deleteClientPurchase
}) {
  const { goBack } = useNavigation();
  const [loading, setLoading] = useState(false);
  const { client } = route.params;
  const { purchase } = route.params;

  useEffect(() => {
    if(purchase) {
      setAllFields(purchase);
    } else {
      resetForm();
    }
  }, []);

  function renderButton() {
    if(route.params.purchase) {
      return (
        <View style={styles.groupButton}>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={async () => {
              setLoading(true);
              try {
                await saveClientPurchase(client, purchaseForm)
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
              const hasDeleted = await deleteClientPurchase(client, purchaseForm);

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
            await saveClientPurchase(client, purchaseForm)
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

  function renderPickerItens() {
    const productsPicker = Object.keys(products).map(key => {
      return (<Picker.Item label={products[key].productName} value={products[key].productName} key={key} />)
    });

    return productsPicker;
  }
  
  return (
    <View style={styles.container}>
      <FormContainer>
        <FormRow>
          <Picker
            selectedValue={purchaseForm.product}
            onValueChange={itemValue => {
              setField('product', itemValue)
            }}
          >
            <Picker.Item
              label={'Selecione um produto'} value={null}
            />
            {renderPickerItens()}
          </Picker>
        </FormRow>
        <FormRow label="Quantidade:">
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={String(purchaseForm.amount)}
            onChangeText={value => {
              setField('amount', value)
            }}
          />
        </FormRow>
        <FormRow label="Total:">
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={String(purchaseForm.total)}
            onChangeText={value => {
              setField('total', value)
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

const mapStateToProps = state => {
  return ({
    products: state.products,
    purchaseForm: state.purchaseForm
  });
}

const mapDispatchToProps = {
  setField,
  setAllFields,
  resetForm,
  saveClientPurchase,
  deleteClientPurchase
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm);