import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../asset/logo.png'
import { useState } from 'react';


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setEroor] = useState("");
  const navigation = useNavigation();


  const credentialsEmail = "abc";
  const credentialsPassword = "123";

  function handleSubmit() {
    setEroor("");
    if (!email.trim()) {
      setEroor("Por favor,insira um e-mail");
      return;
    }

    if (!password.trim()) {
      setEroor("Por favor,insira uma senha");
      return;
    }

    if (email !== credentialsEmail || password !== credentialsPassword) {
      setEroor("Credenciais invalidas");
      setEmail("");
      setPassword("");
    }
    navigation.navigate("Feed", { username: credentialsEmail })

  }
  return (

    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.image}
      />

      <Text style={styles.title}>Bem-Vindo</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu email"
        placeholderTextColor="#959ba3"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Digite sua senha"
        placeholderTextColor="#959ba3"
        secureTextEntry={true}
      />

      <Text style={styles.text}>Esquceu sua Senha?</Text>

      <TouchableOpacity style={styles.button}
        onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    top: 20,
    left: 120,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '50%',
    height: '30%'
  },
  input: {
    top: 30,
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});