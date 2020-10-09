import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import AddButton from '../../components/AddButton';
import ProductCard from '../../components/ProductCard';

import styles from './styles';

function ProductList({ products }) {
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

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList);