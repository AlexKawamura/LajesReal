import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function Header({ title }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

export default Header;
