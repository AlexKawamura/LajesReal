import React from 'react';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

function AddButton({ iconName, label, onNavigate}) {
  return (
    <RectButton style={styles.addButton} onPress={() => onNavigate()}>
      <AntDesign name={iconName} size={30} color="white" />

      <Text style={styles.text}>{label}</Text>
    </RectButton>
  );
}

export default AddButton;