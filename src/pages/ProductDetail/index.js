import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, Button } from 'react-native';

import LongText from '../../components/LongText';
import FormContainer from '../../components/FormContainer';

import styles from './styles';

function ProductDetail({route}) {
  const { replace } = useNavigation();
  const product = route.params;

  return (
      <View style={styles.container}>
        <FormContainer>
          <View style={styles.details}>
            <Image source={{ uri: `data:image/jpeg;base64,${product.pictureURL}` }} style={styles.avatar} />

            <View style={styles.infos}>
              <Text style={styles.name}>{product.productName}</Text>
              <View style={styles.infoLine}>
                <Text style={styles.label}>Quantidade em estoque: </Text>
                <Text style={styles.info}>{product.stored}</Text>
              </View>
              <View style={styles.infoLine}>
                <Text style={styles.label}>Preço: </Text>
                <Text style={styles.info}>R${product.price}</Text>
              </View>
              <LongText label={"Descrição"} content={product.description} />
            </View>

            <View style={styles.editButton}>
              <Button title='Editar' onPress={() => {replace('ProductForm', product)}} />
            </View>
          </View>
        </FormContainer>
      </View>
  );
}

export default ProductDetail;