import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function ClientItem({ client }) {
  const { navigate } = useNavigation();
  const { thumbnail } = client.picture;
  const fullName = client.name.first + ' ' + client.name.last;

  function handlerNavigateToClientDetail() {
    navigate('ClientDetail', client);
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={() => handlerNavigateToClientDetail()}>
        <View style={styles.profile}>
          <Image source={{ uri: thumbnail}} style={styles.avatar} />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>{fullName}</Text>
            <Text style={styles.tel}>Cel: {client.cell}</Text>
            <Text style={styles.tel}>Tel: {client.phone}</Text>
          </View>
        </View>
      </BorderlessButton>

      <TouchableOpacity onPress={() => {navigate('PurchaseList')}}>
        <View style={styles.pedidos}>
          <Text>Pedidos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ClientItem;