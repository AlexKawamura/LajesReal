import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

const ProductCard = ({ product, onNavigate }) => (
  <BorderlessButton style={styles.container} onPress={() => onNavigate()}>
    <View style={styles.card}>
      <Image
        style={styles.picture}
        source={{ uri: `data:image/jpeg;base64,${product.pictureURL}` }}
        aspectRatio={1}
        resizeMode="cover"
      />

      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{ product.productName }</Text>
      </View>
    </View>
  </BorderlessButton>
);

export default ProductCard;