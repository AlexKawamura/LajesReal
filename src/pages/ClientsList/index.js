import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import Header from '../../components/Header';
import ClientItem from '../../components/ClientItem';

import api from '../../services/api';

import styles from './styles';

function ClientsList() {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('?nat=br&results=50').then(response => {
      const results = response.data.results;

      setClients(results);
      setLoading(false);
    }).catch(error => {
      setError(true);
      setLoading(false);
    });
  }, []);

  return(
    <View style={styles.container}>
      <Header title={'Lista de Clientes'} />
      {
        loading ? <ActivityIndicator size="large" color="#3282B8" />
        : error ? <Text style={styles.error}>Erro ao carregar lista de contatos...</Text>
        : <FlatList
            style={styles.clientsList}
            data={clients}
            renderItem={
              ({ item }) => (
                <ClientItem client={item} />
              )
            }
            keyExtractor={(item, index) => item.name.first+index }
          />
      }

      <RectButton style={styles.newClientButton}>
        <AntDesign name="adduser" size={30} color="white" />

        <Text style={styles.newClientLabel}>Novo Clientes</Text>
      </RectButton>
    </View>
  );
}

export default ClientsList;