import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import ClientItem from '../../components/ClientItem';
import AddButton from '../../components/AddButton';

import { watchClients } from '../../actions';

import styles from './styles';

function ClientsList({ clients, watchClients }) {
  const { navigate } = useNavigation();

  useEffect(() => {
    watchClients();
  }, []);

  return(
    <View style={styles.container}>
      { clients ? (
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
      ) : <ActivityIndicator /> }

      <AddButton
        iconName={"adduser"}
        label={"Novo cliente"}
        onNavigate={() => navigate("ClientForm")}
      />
    </View>
  );
}

const mapStateToProps = state => {
  const { clients } = state;

  if (!clients) {
    return {clients};
  }

  const keys = Object.keys(clients);

  const clientsId = keys.map(key => {
    return {...clients[key], id: key}
  });

  return {clients: clientsId};
}

const mapDispatchToProps = {
  watchClients
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);