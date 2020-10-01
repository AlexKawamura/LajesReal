import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import PurchaseItem from '../../components/PurchaseItem';
import AddButton from '../../components/AddButton';

import styles from './styles';

function ProductList() {
  const { navigate } = useNavigation();

  return(
    <View style={styles.container}>
      <ScrollView style={styles.purchaseList}>
        <PurchaseItem onNavigate={() => navigate("ProductEdit")} />
      </ScrollView>

      <AddButton iconName={"shoppingcart"} label={"Novo produto"} onNavigate={() => {navigate("ProductRegister")}} />
    </View>
  );
}

export default ProductList;