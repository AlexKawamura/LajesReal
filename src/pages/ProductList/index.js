import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import AddButton from '../../components/AddButton';
import ProductCard from '../../components/ProductCard';

import products from '../../../products.json';

import styles from './styles';

function ProductList() {
  const { navigate } = useNavigation();

  return(
    <View style={styles.container}>
      <FlatList
        style={styles.productList}
        data={products}
        renderItem={({item}) => {
          return (
            <ProductCard product={item} onNavigate={() => navigate('ProductEdit')} />
          );
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />

      <AddButton iconName={"shoppingcart"} label={"Novo produto"} onNavigate={() => {navigate("ProductRegister")}} />
    </View>
  );
}

export default ProductList;