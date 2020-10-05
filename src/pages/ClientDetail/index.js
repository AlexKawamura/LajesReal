import React from 'react';
import { View, Text, Image, Button } from 'react-native';

import LongText from '../../components/LongText';
import FormContainer from '../../components/FormContainer';

import styles from './styles';

function ClientDetail({route}) {
  const client = route.params;
  const label = "Descrição";
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida erat eget elit viverra efficitur. Quisque in euismod ex, pharetra mollis erat. Vivamus ultricies risus placerat diam tincidunt, sed tempus dui blandit. Donec non luctus nisi, at convallis est. Ut a pellentesque libero. Nullam non odio ullamcorper metus condimentum pretium vel et nibh. Praesent semper efficitur orci et lobortis. Nulla cursus cursus blandit."

  return (
      <View style={styles.container}>
        <FormContainer>
          <View style={styles.details}>
            <Image source={{ uri: client.avatar }} style={styles.avatar} />
            <Button title='Alterar foto' />

            <View style={styles.infos}>
            <Text style={styles.name}>{client.name}</Text>
            {/* <Text style={styles.otherInfos}>{client.email}</Text> */}
            <Text style={styles.otherInfos}>{client.city + ' - ' + client.uf}</Text>
            <Text style={styles.otherInfos}>{client.address}</Text>
            {/* <Text style={styles.otherInfos}>{client.cell}</Text> */}
            <Text style={styles.otherInfos}>{client.phone}</Text>
            <LongText label={label} content={content} />
            </View>
          </View>
        </FormContainer>
      </View>
  );
}

export default ClientDetail;