import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';

import Header from '../../components/Header';
import ClientItem from '../../components/ClientItem';
import AddButton from '../../components/AddButton';

// import api from '../../services/api';
import clients from '../../../clients.json';

import styles from './styles';

function ClientsList() {
  const { navigate } = useNavigation();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
              ({ item }) => {
                return <ClientItem client={item} />
              }
            }
            keyExtractor={(item) => item.cpf }
          />
      }

      <AddButton
        iconName={"adduser"}
        label={"Novo cliente"}
        onNavigate={() => {navigate("ClientRegister")}}
      />
    </View>
  );
}

export default ClientsList;