import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from '../../components/Header';
import PurchaseItem from '../../components/PurchaseItem';

import styles from './styles';

function ClientsList() {

  return(
    <View style={styles.container}>
      <Header title={'Pedidos do Cliente'} />
      <ScrollView style={styles.purchaseList}>
        <PurchaseItem />
        <PurchaseItem />
        <PurchaseItem />
        <PurchaseItem />
        <PurchaseItem />
        <PurchaseItem />
      </ScrollView>
    </View>
  );
}

export default ClientsList;