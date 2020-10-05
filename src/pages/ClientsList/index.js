import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import ClientItem from '../../components/ClientItem';
import AddButton from '../../components/AddButton';

import clients from '../../../clients.json';

import styles from './styles';

function ClientsList() {
  const { navigate } = useNavigation();

  return(
    <View style={styles.container}>
      <FlatList
        style={styles.clientsList}
        data={clients}
        renderItem={
          ({ item }) => {
            return <ClientItem client={item} />
          }
        }
        keyExtractor={(item) => item.cpf }
      />

      <AddButton
        iconName={"adduser"}
        label={"Novo cliente"}
        onNavigate={() => navigate("ClientRegister")}
      />
    </View>
  );
}

export default ClientsList;