import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

function AddButton({ iconName, label}) {
  return (
    <RectButton style={styles.newClientButton}>
      <AntDesign name={iconName} size={30} color="white" />

      <Text style={styles.newClientLabel}>{label}</Text>
    </RectButton>
  );
}

export default AddButton;