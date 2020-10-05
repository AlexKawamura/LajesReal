import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import AddButton from '../../components/AddButton';

import products from '../../../products.json';

import styles from './styles';

function ProductList() {
  const { navigate } = useNavigation();

  return(
    <View style={styles.container}>

      <AddButton iconName={"shoppingcart"} label={"Novo produto"} onNavigate={() => {navigate("ProductRegister")}} />
    </View>
  );
}

export default ProductList;