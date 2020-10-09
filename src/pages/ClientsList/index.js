import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import ClientItem from '../../components/ClientItem';
import AddButton from '../../components/AddButton';

import styles from './styles';

function ClientsList({ clients }) {
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

const mapStateToProps = state => {
  return {
    clients: state.clients
  }
}

export default connect(mapStateToProps)(ClientsList);