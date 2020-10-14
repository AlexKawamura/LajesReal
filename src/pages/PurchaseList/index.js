import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'react-native';

import PurchaseItem from '../../components/PurchaseItem';
import AddButton from '../../components/AddButton';

import styles from './styles';
import { watchClientPurchases } from '../../actions';

function PurchaseList({ route, purchases, watchClientPurchases }) {
  const { navigate } = useNavigation();
  const client = route.params;
  
  useEffect(() => {
    watchClientPurchases(client);
  }, []);

  return(
    <View style={styles.container}>
      <FlatList
        style={styles.purchaseList}
        data={purchases}
        renderItem={({item}) => {
          return (
            <PurchaseItem purchase={item} onNavigate={() => navigate('PurchaseForm', {client: client, purchase: item})} />
          );
        }}
        keyExtractor={item => String(item.id)}
      />

      <AddButton iconName={"addfile"} label={"Novo pedido"} onNavigate={() => navigate('PurchaseForm', {client: client})} />
    </View>
  );
}

const mapStateToProps = state => {
  const { purchases } = state;

  if (!purchases) {
    return {purchases};
  }

  const keys = Object.keys(purchases);

  const purchasesId = keys.map(key => {
    return {...purchases[key], id: key}
  });

  return {purchases: purchasesId};
}

const mapDispatchToProps = {
  watchClientPurchases
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseList);