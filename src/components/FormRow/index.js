import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const FormRow = (props) => {
  const { children, label } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      { children }
    </View>
  );
};

export default FormRow;
