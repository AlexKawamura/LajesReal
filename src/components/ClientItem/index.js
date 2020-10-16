import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

function ClientItem({ client }) {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={() => navigate('ClientForm', client)}>
        <View style={styles.profile}>
          <Image source={{ uri: `data:imagem/jpeg;base64,${client.avatar}` }} style={styles.avatar} />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>{client.name}</Text>
            <Text style={styles.tel}>Tel: {client.phone}</Text>
          </View>

          <AntDesign style={styles.iconRight} name="right" size={24} color="black" />
        </View>
      </BorderlessButton>

      <TouchableOpacity onPress={() => navigate('PurchaseList', client)}>
        <View style={styles.pedidos}>
          <Text>Pedidos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ClientItem;