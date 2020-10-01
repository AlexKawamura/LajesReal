import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView } from 'react-native';

import PurchaseItem from '../../components/PurchaseItem';
import AddButton from '../../components/AddButton';

import styles from './styles';

function PurchaseList() {
  const { navigate } = useNavigation();

  return(
    <View style={styles.container}>
      <ScrollView style={styles.purchaseList}>
        <PurchaseItem onNavigate={() => navigate("PurchaseEdit")} />
      </ScrollView>

      <AddButton iconName={"addfile"} label={"Novo pedido"} onNavigate={() => navigate("PurchaseRegister")} />
    </View>
  );
}

export default PurchaseList;