import firebase from 'firebase';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, ActivityIndicator, Alert } from 'react-native';

import FormRow from '../../components/FormRow';

import styles from './styles';

function Login() {
  const { navigate } = useNavigation();
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

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate('ClientsList')
      }).catch(error => {
        setMessage(getMessageByError(error.code));
      }).finally(() => {
        setLoading(false);
      });
  }

  function getMessageByError(code) {
    switch (code) {
      case 'auth/user-not-found':
        return 'E-mail inexistente';
      case 'auth/wrong-password':
        return 'Senha incorreta.';
      default:
        return 'Erro desconhecido';
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
    } else if (message === 'success') {
      return (
        <Text style={styles.success}>Usuário criado com sucesso!</Text>
      );
    }

    return (
      <Text style={styles.error}>{message}</Text>
    );
  }

  function registerUser() {
    if (email && password) {
      Alert.alert(
        'Cadastrando conta de login',
        `Deseja criar a conta?\nE-mail: ${email}\nSenha: ${password}`,
        [{
          text: 'Não',
        }, {
          text: 'Sim',
          onPress: () => {
            firebase.auth()
              .createUserWithEmailAndPassword(email, password)
              .then(setMessage('success'))
              .catch(error => {
                setMessage(getMessageByError(error.code))
              });
          },
        }],
        { cancelable: true }
      );
    } else {
      setMessage('Os campos não foram preenchidos corretamento');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subTitle}>Preencha os campos para acessar o app!</Text>

      <View style={styles.form}>
        <View style={styles.message}>
          { renderMessage() }
        </View>

        <FormRow label='E-mail:'>
          <TextInput
            style={styles.textInput}
            placeholder="example@email.com"
            placeholderTextColor='#AAA'
            value={email}
            onChangeText={ valor => {
              setEmail(valor);
            }}
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

export default Login;