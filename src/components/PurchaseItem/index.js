import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function PurchaseItem({ item, onNavigate }) {
  const product = item.product;

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={() => onNavigate()}>
        <View style={styles.infosContainer}>

          <View style={styles.infos}>
            <Text style={styles.id}>Nº.: {item.id}</Text>
            <Text style={styles.text}>Produto: {product.productName}</Text>
            <Text style={styles.text}>Quantidade: {item.amount}</Text>
            <Text style={styles.text}>Total: {item.total}</Text>
          </View>

          <AntDesign style={styles.iconRight} name="right" size={24} color="black" />
        </View>
      </BorderlessButton>
    </View>
  );
}

export default PurchaseItem;