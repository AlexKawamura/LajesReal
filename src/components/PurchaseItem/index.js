import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function PurchaseItem({ purchase, onNavigate }) {
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={() => onNavigate()}>
        <View style={styles.infosContainer}>

          <View style={styles.infos}>
            <Text style={styles.id}>Nº.: {purchase.id}</Text>
            <Text style={styles.text}>Produto: {purchase.product}</Text>
            <Text style={styles.text}>Quantidade: {purchase.amount}</Text>
            <Text style={styles.text}>Total: {purchase.total}</Text>
          </View>

          <AntDesign style={styles.iconRight} name="right" size={24} color="black" />
        </View>
      </BorderlessButton>
    </View>
  );
}

export default PurchaseItem;