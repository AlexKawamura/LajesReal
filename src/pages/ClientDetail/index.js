import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

function ClientDetail({route}) {
  const client = route.params;
  const fullName = client.name.first + ' ' + client.name.last;
  const { location } = client;
  const { medium } = client.picture;

  return (
      <View style={styles.container}>
        <Header title={fullName} />

        <ScrollView style={styles.clientsList}>
          <View style={styles.details}>
                <Image source={{ uri: medium }} style={styles.avatar} />
                <Button title='Alterar foto' />

                <View style={styles.infos}>
                  <Text style={styles.name}>{fullName}</Text>
                  <Text style={styles.otherInfos}>{client.email}</Text>
                  <Text style={styles.otherInfos}>{location.city + ' - ' + location.state}</Text>
                  <Text style={styles.otherInfos}>{location.street.name + ' - ' + location.street.number}</Text>
                  <Text style={styles.otherInfos}>{client.cell}</Text>
                  <Text style={styles.otherInfos}>{client.phone}</Text>
                </View>
          </View>
        </ScrollView>
      </View>
  );
}

export default ClientDetail;