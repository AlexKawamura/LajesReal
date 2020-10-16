import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import AddButton from '../../components/AddButton';
import ProductCard from '../../components/ProductCard';

import { watchProducts } from '../../actions';

import styles from './styles';

function ProductList({ products, watchProducts }) {
  const { navigate } = useNavigation();

  useFocusEffect(() => {
    watchProducts();
  }, []);

  return(
    <View style={styles.container}>
      { products ? (
        <FlatList
          style={styles.productList}
          data={products}
          renderItem={({item}) => {
            return (
              <ProductCard product={item} onNavigate={() => navigate('ProductDetail', item)} />
            );
          }}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      ) : <ActivityIndicator /> }

      <AddButton
        iconName={"shoppingcart"}
        label={"Novo produto"}
        onNavigate={() => {navigate("ProductForm")}}
      />
    </View>
  );
}

const mapStateToProps = state => {
  const { products } = state;

  if (!products) {
    return {products};
  }

  const keys = Object.keys(products);

  const productsId = keys.map(key => {
    return {...products[key], id: key}
  });

  return {products: productsId};
}

const mapDispatchToProps = {
  watchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);