import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'react-native';

import PurchaseItem from '../../components/PurchaseItem';
import AddButton from '../../components/AddButton';

import products from '../../../products.json';

import styles from './styles';

function PurchaseList({route}) {
  const { navigate } = useNavigation();
  const client = route.params;

  return(
    <View style={styles.container}>
      <FlatList
        style={styles.purchaseList}
        data={client.purchases}
        renderItem={
          ({ item }) => {
            return <PurchaseItem item={item} onNavigate={() => navigate('PurchaseEdit')} />
          }
        }
        keyExtractor={(item) => item.id }
      />

      <AddButton iconName={"addfile"} label={"Novo pedido"} onNavigate={() => navigate("PurchaseRegister")} />
    </View>
  );
}

export default PurchaseList;