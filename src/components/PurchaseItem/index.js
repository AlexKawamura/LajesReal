import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function PurchaseItem() {

  return (
    <View style={styles.container}>
      <BorderlessButton>
            <View style={styles.purchaseInfos}>
              <View style={styles.numero}>
                <Text style={styles.label}>0000000</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Produto: </Text><Text>Material X</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Quantidade: </Text><Text>5</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Total: </Text><Text>R$ 150,00</Text>
              </View>
            </View>
        </BorderlessButton>
    </View>
  );
}

export default PurchaseItem;