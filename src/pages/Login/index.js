import firebase from 'firebase';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, ActivityIndicator, KeyboardAvoidingView } from 'react-native';

import FormRow from '../../components/FormRow';
import { processLoginAction, registerUserAction } from '../../actions';

import styles from './styles';

function Login(props, { navigation }) {
  const { navigate, reset } = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if(!firebase.apps.length) {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDw8rwlHyTFm-WBAMVGv9coDMhVDRHLLOY",
      authDomain: "lajesreal-2958d.firebaseapp.com",
      databaseURL: "https://lajesreal-2958d.firebaseio.com",
      projectId: "lajesreal-2958d",
      storageBucket: "lajesreal-2958d.appspot.com",
      messagingSenderId: "793479740291",
      appId: "1:793479740291:web:1ce261951b4dbcb1e554b6",
      measurementId: "G-DTFR6SEC3C"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  function processLogin() {
    setLoading(true);

    props.processLoginAction({email, password})
      .then(() => {
        props.navigation.replace("TabScreen");
      }).catch(error => {
        setMessage(getMessageByError(error.code));
      }).finally(() => {
        setLoading(false);
      });
  }

  function registerUser() {
    props.registerUserAction({email, password})
      .then(() => {
        props.navigation.replace("ClientsList");
      }).catch(error => {
        setMessage(getMessageByError(error.code));
      });
  }

  function getMessageByError(code) {
    switch (code) {
      case "auth/user-not-found":
        return "E-mail inexistente";
      case "auth/wrong-password":
        return "Senha incorreta.";
      case "auth/invalid-email":
        return "E-mail inválido";
      default:
        return code;
    }
  }

  function renderButton() {
    if (loading) {
      return <ActivityIndicator />;
    }

    return (
      <Button
        title="Entrar"
        color="#1B262C"
        onPress={() => processLogin()}
      />
    );
  }

  function renderMessage() {
    if (!message) {
      return null;
    } else if (message === "success") {
      return (
        <Text style={styles.success}>Usuário criado com sucesso!</Text>
      );
    }

    return (
      <Text style={styles.error}>{message}</Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subTitle}>Preencha os campos para acessar o app!</Text>

      <View style={styles.form}>
        <View style={styles.message}>
          { renderMessage() }
        </View>

        <FormRow label="E-mail:">
          <TextInput
            style={styles.textInput}
            placeholder="example@email.com"
            placeholderTextColor='#AAA'
            value={email}
            onChangeText={ valor => {
              setEmail(valor);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </FormRow>

        <FormRow label='Senha:'>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password here"
            placeholderTextColor='#AAA'
            secureTextEntry
            value={password}
            onChangeText={ valor => {
              setPassword(valor);
            }}
          />
        </FormRow>

        <View style={styles.loginButton}>
          { renderButton() }
        </View>
      </View>

      <View style={styles.registerButton}>
        <Button
          title="Registrar"
          color="#3282B8"
          onPress={() => registerUser()}
        />
      </View>
    </View>
  );
}

export default connect(null, { processLoginAction, registerUserAction })(Login);