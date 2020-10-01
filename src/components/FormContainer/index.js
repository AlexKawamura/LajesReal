import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';

const FormContainer = ({children}) => {
  return (
    <ScrollView style={styles.formContainer}>
      <View style={styles.form}>
        {children}
      </View>
    </ScrollView>
  );
}

export default FormContainer;